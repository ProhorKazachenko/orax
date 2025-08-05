<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\EmailOnResetPasswordRequest;
use App\Http\Requests\Auth\ResetPasswordRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cache;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $email = $request['email'];
        $password = $request['password'];

        $user = User::create([
            'email' => $email,
            'password' => Hash::make($password),
        ]);

        return response()->json([
            'message' => 'Пользователь успешно создан',
            'user_id' => $user->id,
        ]);
    }

    public function login(LoginRequest $request)
    {
        $email = $request['email'];
        $password = $request['password'];

        $user = User::where('email', $email)->first();
        if (!$user) {
            return response()->json(['message' => 'Пользователь не найден'], 404);
        }

        if (!Hash::check($password, $user->password)) {
            return response()->json(['message' => 'Неверный пароль'], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Вход выполнен успешно',
            'token' => $token,
        ], 200);
    }

    public function emailForResetPassword(EmailOnResetPasswordRequest $request)
    {
        $email = $request['email'];

        $token = Str::random(64);
        Cache::put('password_reset_' . $token, $email, now()->addMinutes(60));

        $frontendUrl = config('app.frontend_url');

        $resetUrl = rtrim($frontendUrl, '/') . '/auth/recovery?token=' . $token;

        $messageBody = <<<MESSAGE
            Здравствуйте!

            Вы запросили восстановление пароля для доступа в личный кабинет на сайте www.orax-assets.com
            Чтобы установить новый пароль, перейдите по ссылке ниже:

            {$resetUrl}

            Ссылка будет активна в течение 60 минут.
            Если вы не запрашивали восстановление пароля, просто проигнорируйте это письмо — ваш текущий пароль останется без изменений.

            С уважением,
            Команда ORAX CORPORATION LLC 
            Техническая поддержка office@orax-assets.com
            MESSAGE;

        Mail::raw($messageBody, function ($message) use ($email) {
            $message->to($email)
                ->subject('Восстановление пароля к вашему аккаунту www.orax-assets.com');
        });

        return response()->json([
            'message' => 'Письмо с инструкциями по сбросу пароля отправлено',
        ], 200);
    }

    public function resetPassword(ResetPasswordRequest $request)
    {
        $token = $request['token'];
        $password = $request['password'];

        if (!Cache::has('password_reset_' . $token)) {
            return response()->json(['message' => 'Ссылка недействительна или устарела'], 410);
        }

        $email = Cache::pull('password_reset_' . $token);
        $user = User::where('email', $email)->firstOrFail();
        $user->password = Hash::make($password);
        $user->save();

        return response()->json(['message' => 'Пароль успешно изменен'], 200);
    }
}
