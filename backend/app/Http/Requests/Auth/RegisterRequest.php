<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|string|email|max:255|unique:users',
            'password' => [
                'required',
                'string',
                'min:8',
                'max:64',
                'regex:/[a-z]/',
                'regex:/[A-Z]/',
                'regex:/[0-9]/',
                'regex:/[@$!%*#?&]/',
            ],
            'password_confirmation' => 'required|string|min:8|same:password',
        ];
    }

    public function messages(): array
    {
        return [
            'email.unique' => 'Почта уже занята другим пользователем',
            'password_confirmation.same' => 'Пароли не совпадают',
            'password.regex' => 'Пароль должен содержать хотя бы одну букву в верхнем регистре, одну букву в нижнем регистре, одну цифру и один специальный символ',
        ];
    }
}
