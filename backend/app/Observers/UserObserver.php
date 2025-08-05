<?php

namespace App\Observers;

use App\Models\User;
use App\Models\Strategy;
use Carbon\Carbon;

class UserObserver
{
    public function created(User $user): void
    {
        Strategy::create([
            'user_id'           => $user->id,
            'name'              => 'Strategy S1',
            'income'            => 0,
            'deposit'           => 0,
            'start_of_deposit'  => Carbon::now('UTC'),
            'remaining_term'    => Carbon::now('UTC')->addYear(),
        ]);
    }
}
