<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Support\Facades\Cache;
use Filament\Actions\Action;

class EditUser extends EditRecord
{
    protected static string $resource = UserResource::class;

    protected static ?string $title = 'Стратегии пользователя';

    protected function getHeaderActions(): array
    {
        return [
            Action::make('cancel')
                ->label('Вернуться к пользователям')
                ->url(UserResource::getUrl('index'))
                ->color('gray'),
        ];
    }

    protected function getFormActions(): array
    {
        return [];
    }

    public function mount(int|string $record): void
    {
        parent::mount($record);

        Cache::forever('user_reviewed_' . $this->record->id, true);
    }
}
