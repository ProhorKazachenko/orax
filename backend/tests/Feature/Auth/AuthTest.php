<?php

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

uses(RefreshDatabase::class, WithFaker::class);

const auth_url = '/api/users/auth';

it('should register user', function () {
    $password = $this->faker->password(8, 64);
    $response = $this->post(route('auth.register'), [
        'email' => $this->faker->unique()->safeEmail,
        'password' => $password,
        'password_confirmation' => $password,
    ]);

    $response->assertStatus(200);
    $response->assertJson([
        'message' => 'Пользователь успешно создан',
        'user_id' => 1,
    ]);
});

it('should login user', function () {
    $password = $this->faker->password(8, 64);
    $email = $this->faker->unique()->safeEmail;

    $response = $this->post(route('auth.register'), [
        'email' => $email,
        'password' => $password,
        'password_confirmation' => $password,
    ]);

    $response = $this->post(route('auth.login'), [
        'email' => $email,
        'password' => $password,
    ]);

    $response->assertStatus(200);
    $response->assertJson([
        'message' => 'Вход выполнен успешно',
    ]);
});
