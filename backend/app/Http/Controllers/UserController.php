<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\UpdatePhoneRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;

class UserController extends Controller
{
    public function updatePhone(UpdatePhoneRequest $request)
    {
        Auth::user()->update(['phone' => $request['phone']]);

        return response()->json(['message' => 'Телефон пользователя успешно обновлен'], 200);
    }

    public function destroy()
    {
        Auth::user()->forceDelete();

        return response()->json(['message' => 'Пользователь успешно удален'], 200);
    }

    //use normal conventions if project grows
    public function show()
    {
        $user = Auth::user();
        $strategy = $user->strategy;
        $remaining_term = 0;

        if (now() > $strategy->remaining_term) {
            $remaining_term = 0;
        } else if (now() >= $strategy->start_of_deposit) {
            $remaining_term = intval(now()->startOfDay()->diffInDays(Carbon::parse($strategy->remaining_term)->startOfDay()));
        } else {
            $remaining_term = intval(Carbon::parse($strategy->start_of_deposit)->startOfDay()->diffInDays(Carbon::parse($strategy->remaining_term)->startOfDay()));
        }

        $is_reviewed = Cache::has('user_reviewed_' . $user->id);

        return response()->json([
            'phone' => $user->phone,
            'email' => $user->email,
            'contract_signed' => $strategy->contract_signed,
            'strategy_name' => $strategy->name,
            'income' => floatval($strategy->income),
            'deposit' => floatval($strategy->deposit),
            'start_of_deposit' => $strategy->start_of_deposit,
            'remaining_term' => $remaining_term,
            'is_reviewed' => $is_reviewed,
        ], 200);
    }
}
