<div class="space-y-4">
    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 max-h-48 overflow-y-auto">
        <p class="text-sm font-mono break-all select-all leading-relaxed">
            {{ $email }}
        </p>
    </div>
    
    <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>Длина: {{ strlen($email) }} символов</span>
        <button 
            onclick="navigator.clipboard.writeText('{{ addslashes($email) }}').then(() => { 
                this.textContent = 'Скопировано!'; 
                setTimeout(() => this.textContent = 'Копировать', 2000) 
            })"
            class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
            Копировать
        </button>
    </div>
</div>