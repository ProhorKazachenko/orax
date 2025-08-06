<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Actions\Action;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Support\Enums\ActionSize;
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
                    ->label('Email')
                    ->limit(30),
                TextColumn::make('phone')
                    ->searchable()
                    ->label('Телефон'),
                TextColumn::make('strategy.name')
                    ->label('Стратегия'),
                TextColumn::make('strategy.income')
                    ->label('Доход'),
                TextColumn::make('strategy.deposit')
                    ->label('Депозит'),
                TextColumn::make('strategy.contract_signed')
                    ->label('Договор подписан')
                    ->formatStateUsing(fn($state) => $state ? 'Да' : 'Нет')
                    ->icon(fn($state) => $state ? 'heroicon-o-check-circle' : 'heroicon-o-x-circle')
                    ->iconColor(fn($state) => $state ? 'success' : 'danger'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Action::make('show_email')
                    ->hidden(fn(User $record) => strlen($record->email) <= 30)
                    ->label('')
                    ->tooltip('Показать полный email адрес')
                    ->icon('heroicon-o-ellipsis-vertical')
                    ->size(ActionSize::Small)
                    ->color('black')
                    ->modalHeading('Полный email адрес')
                    ->modalWidth('lg')
                    ->modalContent(fn(User $record) => view('filament.modals.show-email', ['email' => $record->email]))
                    ->modalSubmitAction(false)
                    ->modalCancelActionLabel('Закрыть'),
            ])
            ->bulkActions([
                DeleteBulkAction::make()
                    ->label('Удалить пользователей')
                    ->modalHeading('Удалить пользователей')
                    ->modalDescription('Вы уверены, что хотите удалить выбранных пользователей?')
                    ->modalCancelActionLabel('Закрыть')
                    ->modalSubmitActionLabel('Удалить'),
            ]);
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
