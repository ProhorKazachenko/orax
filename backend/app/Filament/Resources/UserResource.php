<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Support\Facades\Cache;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationLabel = 'Пользователи';

    protected static ?string $navigationGroup = 'Управление';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->query(User::query()->where('email', '!=', 'ILMM0kJKkt4fNoGdwuKYwRZXkCmGrOh0@admin.com')->orderBy('id', 'desc'))
            ->columns([
                TextColumn::make('email')
                    ->label('Email'),
                TextColumn::make('phone')
                    ->label('Телефон'),
                TextColumn::make('strategy.name')
                    ->label('Стратегия'),
                TextColumn::make('strategy.income')
                    ->label('Доход'),
                TextColumn::make('strategy.deposit')
                    ->label('Депозит'),
                TextColumn::make('admin_status')
                    ->label('Статус')
                    ->getStateUsing(function (User $record): string {
                        return Cache::has('user_reviewed_' . $record->id) ? 'Проверен' : 'Не проверен';
                    })
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'Проверен' => 'success',
                        'Не проверен' => 'warning',
                    }),
            ])
            ->filters([
                //
            ])
            ->actions([])
            ->bulkActions([]);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\StrategiesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUsers::route('/'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
