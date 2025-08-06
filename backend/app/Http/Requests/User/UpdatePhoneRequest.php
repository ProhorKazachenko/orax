<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class UpdatePhoneRequest extends FormRequest
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
            'phone' => [
                'required',
                'string',
                'size:20',
                'regex:/^[0-9]+$/',
                Rule::unique('users', 'phone')->ignore(Auth::user()->id),
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'phone.required' => 'Телефон не может быть пустым',
            'phone.string' => 'Телефон должен быть строкой',
            'phone.max' => 'Телефон не может быть длиннее 11 символов',
            'phone.unique' => 'Телефон уже занят другим пользователем',
        ];
    }
}
