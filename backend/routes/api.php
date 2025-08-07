<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return response()->json(['message' => 'Hello, World!']);
})->name('test');

Route::prefix('users')->group(function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/update-phone', [UserController::class, 'updatePhone'])
            ->name('users.update-phone');

        Route::delete('/', [UserController::class, 'destroy'])
            ->name('users.destroy');

        Route::get('/data', [UserController::class, 'show'])
            ->name('users.show');
    });

    Route::prefix('auth')->group(function () {
        Route::post('/register', [AuthController::class, 'register'])
            ->name('auth.register');
        Route::post('/login', [AuthController::class, 'login'])
            ->name('auth.login');
        Route::post('/password/email', [AuthController::class, 'emailForResetPassword'])
            ->name('auth.password.email');
        Route::post('/password/reset', [AuthController::class, 'resetPassword'])
            ->name('auth.password.reset');
        Route::post('/logout', [AuthController::class, 'logout'])
            ->middleware('auth:sanctum')
            ->name('auth.logout');
    });
});
