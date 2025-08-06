<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('strategies', function (Blueprint $table) {
            $table->id();
            $table->enum('name', ['Strategy S1', 'Strategy A1', 'Strategy B1']);
            $table->boolean('contract_signed')
                ->default(false);
            $table->decimal('income', 10, 2);
            $table->decimal('deposit', 10, 2);
            $table->foreignIdFor(User::class)
                ->constrained()
                ->cascadeOnDelete();

            $table->timestamp('start_of_deposit');
            $table->timestamp('remaining_term');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('strategies');
    }
};
