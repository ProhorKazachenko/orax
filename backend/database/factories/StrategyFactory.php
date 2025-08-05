<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Strategy>
 */
class StrategyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->randomElement(['Strategy S1', 'Strategy A1', 'Strategy B1']),
            'income' => fake()->randomFloat(2, 0, 100000),
            'deposit' => fake()->randomFloat(2, 0, 100000),
            'start_of_deposit' => Carbon::now('UTC')->subDays(fake()->numberBetween(1, 30)),
            'remaining_term' => Carbon::now('UTC')->addDays(fake()->numberBetween(30, 365)),
        ];
    }
}
