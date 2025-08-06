<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Strategy extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'contract_signed',
        'income',
        'deposit',
        'start_of_deposit',
        'remaining_term',
        'user_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
