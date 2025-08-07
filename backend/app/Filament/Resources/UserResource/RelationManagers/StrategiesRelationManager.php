<?php

namespace App\Filament\Resources\UserResource\RelationManagers;

use Filament\Forms\Form;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\TextInput;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;

class StrategiesRelationManager extends RelationManager
{
    protected static string $relationship = 'strategy';

    protected static ?string $title = 'Стратегии';

    public function form(Form $form): Form
    {
        return $form->schema([
            Select::make('name')
                ->label('Название стратегии')
                ->options([
                    'Strategy S1' => 'Strategy S1',
                    'Strategy A1' => 'Strategy A1',
                    'Strategy B1' => 'Strategy B1',
                ])
                ->required()
                ->columnSpanFull(),
            TextInput::make('deposit')
                ->label('Сумма')
                ->prefix('$')
                ->minValue(0)
                ->maxValue(1000000000)
                ->numeric()
                ->required()
                ->columnSpanFull(),
            TextInput::make('income')
                ->label('Доход')
                ->prefix('$')
                ->numeric()
                ->minValue(0)
                ->maxValue(1000000000)
                ->required()
                ->columnSpanFull(),
            DateTimePicker::make('start_of_deposit')
                ->label('Начало вклада')
                ->required()
                ->columnSpanFull()
                ->live(),
            DateTimePicker::make('remaining_term')
                ->label('Остаток срока')
                ->required()
                ->columnSpanFull()
                ->minDate(now())
                ->rules([
                    function ($get) {
                        return function (string $attribute, $value, \Closure $fail) use ($get) {
                            $startDate = $get('start_of_deposit');
                            if ($startDate && $value && $value <= $startDate) {
                                $fail('Остаток срока должен быть после начала вклада.');
                            }
                        };
                    }
                ]),
            Toggle::make('contract_signed')
                ->label('Договор подписан')
                ->required()
                ->columnSpanFull(),
        ]);
    }

    public function table(Table $table): Table
    {
        return $table->columns([
            TextColumn::make('name')->label('Название'),
            TextColumn::make('deposit')->numeric(2)->label('Сумма'),
            TextColumn::make('income')->numeric(2)->label('Доход'),
            TextColumn::make('start_of_deposit')->dateTime('d.m.Y H:i')->label('Начало вклада'),
            TextColumn::make('remaining_term')->dateTime('d.m.Y H:i')->label('Остаток срока'),
            TextColumn::make('contract_signed')
                ->label('Договор подписан')
                ->formatStateUsing(fn($state) => $state ? 'Да' : 'Нет'),
        ])
            ->headerActions([])
            ->actions([
                Tables\Actions\EditAction::make()
                    ->icon('')
                    ->label('Редактировать')
                    ->modalSubmitActionLabel('Сохранить изменения')
                    ->modalCancelActionLabel('Отмена')
                    ->modalWidth('sm')
                    ->modalHeading('Редактирование стратегии')
            ])
            ->bulkActions([]);
    }
}
