<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\UpdatePhoneRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

    public function show()
    {
        $user = Auth::user();
        $strategy = $user->strategy;
        $remaining_term = intval(now()->diffInDays($strategy->remaining_term));

        return response()->json([
            'phone' => $user->phone,
            'strategy_name' => $strategy->name,
            'income' => $strategy->income,
            'deposit' => $strategy->deposit,
            'start_of_deposit' => $strategy->start_of_deposit,
            'remaining_term' => $remaining_term,
        ], 200);
    }
}
