let collectedAmount = 0.00240; // Изначальное количество монет при старте
let additionalBalance = 0; // Дополнительный баланс монет для улучшений
let incrementRate = 0.0026; // Начальная скорость добычи монет в час
let currentLevel = 1; // Начальный уровень улучшения Pickaxe
let storageLevel = 1; // Начальный уровень улучшения Storage
let upgradeCost = 0.0012; // Стоимость улучшения с 1-го до 2-го уровня Pickaxe
let storageUpgradeCost = 0.0012; // Стоимость улучшения Storage
let maxMiningHours = 1; // Начальное время майнинга в часах
let miningTime = 0; // Время, прошедшее с начала майнинга

// Функция для анимированного увеличения количества монет и обновления прогресс-бара
function startMining() {
    const progressBar = document.getElementById('progress-bar-animation');
    const totalMiningTime = maxMiningHours * 3600; // Преобразование времени майнинга в секунды
    miningTime = 0; // Сброс времени майнинга

    const interval = setInterval(() => {
        if (miningTime < totalMiningTime) {
            collectedAmount += incrementRate / 3600; // Конвертируем в секунды для реального времени
            document.getElementById('mining-amount').textContent = collectedAmount.toFixed(5);
            document.getElementById('collected-amount').textContent = collectedAmount.toFixed(5);
            miningTime++;

            // Обновление прогресс-бара
            const progressPercentage = (miningTime / totalMiningTime) * 100;
            progressBar.style.width = progressPercentage + '%';
        } else {
            clearInterval(interval); // Остановка майнинга, когда время закончилось
        }
    }, 1000); // Обновление каждую секунду
}

// Показ анимации
function showAnimation(elementId) {
    const element = document.getElementById(elementId);
    element.style.display = 'block';
    element.classList.add('show-animation');

    setTimeout(() => {
        element.classList.remove('show-animation');
        element.classList.add('hide-animation');
    }, 1000);

    setTimeout(() => {
        element.style.display = 'none';
        element.classList.remove('hide-animation');
    }, 1500);
}

// Обработчик для кнопки "Claim" в основном меню
document.querySelector('#claim-main').addEventListener('click', function() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('golt-miner-menu').style.display = 'block';
    startMining(); // Запуск процесса добычи монет и анимации прогресса
});

// Обработчик для кнопки "Назад"
document.querySelector('#back-btn').addEventListener('click', function() {
    document.getElementById('golt-miner-menu').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
});

// Обработчик для кнопки "Claim" в меню "GOLT Miner"
document.querySelector('#claim-golt').addEventListener('click', function() {
    additionalBalance += collectedAmount; // Обновляем только баланс монет (⚪)
    document.getElementById('additional-balance-1').textContent = additionalBalance.toFixed(5); // Обновляем отображение дополнительного баланса
    document.getElementById('current-balance').textContent = document.getElementById('additional-balance-1').textContent; // Синхронизируем "Мой баланс" с отображением дополнительного баланса
    collectedAmount = 0; // Сбрасываем собранные монеты
    miningTime = 0; // Сбрасываем время майнинга
    document.getElementById('mining-amount').textContent = collectedAmount.toFixed(5); // Обновляем отображение собранных монет
    document.getElementById('collected-amount').textContent = collectedAmount.toFixed(5); // Обновляем отображение собранных монет в основном меню
    
    showAnimation('claim-animation'); // Показ анимации при нажатии на Claim
});

// Обработчик для кнопки "Lvl Up" для Pickaxe
document.querySelector('#lvl-up-btn').addEventListener('click', function() {
    if (additionalBalance >= upgradeCost) {
        additionalBalance -= upgradeCost; // Списываем стоимость улучшения
        document.getElementById('additional-balance-1').textContent = additionalBalance.toFixed(5);
        document.getElementById('current-balance').textContent = document.getElementById('additional-balance-1').textContent; // Синхронизируем "Мой баланс" с отображением дополнительного баланса
        
        currentLevel += 1; // Увеличиваем уровень
        document.getElementById('current-level').textContent = currentLevel;
        
        // Обновляем параметры в зависимости от нового уровня
        switch (currentLevel) {
            case 2:
                incrementRate = 0.0080; // Скорость добычи для 2-го уровня
                upgradeCost = 0.01; // Стоимость улучшения с 2-го до 3-го уровня
                break;
            case 3:
                incrementRate = 0.0150; // Скорость добычи для 3-го уровня
                upgradeCost = 0.015; // Стоимость улучшения с 3-го до 4-го уровня
                break;
            // Добавьте дополнительные уровни и их настройки по необходимости
            default:
                incrementRate += 0.0050; // Пример: добавляем +0.0050 для каждого последующего уровня
                upgradeCost = (upgradeCost * 1.5).toFixed(5); // Увеличиваем стоимость следующего улучшения
        }
        
        document.getElementById('earnings-per-hour').textContent = incrementRate.toFixed(4);
        document.getElementById('upgrade-cost').textContent = upgradeCost.toFixed(4);

        showAnimation('levelup-animation'); // Показ анимации при нажатии на Lvl Up
    } else {
        alert('Недостаточно монет для улучшения!');
    }
});

// Обработчик для кнопки "Lvl Up" для Storage
document.querySelector('#storage-upgrade-btn').addEventListener('click', function() {
    if (additionalBalance >= storageUpgradeCost) {
        additionalBalance -= storageUpgradeCost; // Списываем стоимость улучшения Storage
        document.getElementById('additional-balance-1').textContent = additionalBalance.toFixed(5);
        document.getElementById('current-balance').textContent = document.getElementById('additional-balance-1').textContent; // Синхронизируем "Мой баланс" с отображением дополнительного баланса
        
        storageLevel += 1; // Увеличиваем уровень Storage
        document.getElementById('storage-level').textContent = storageLevel;
        
        maxMiningHours += 1; // Увеличиваем время майнинга на 1 час с каждым уровнем
        document.getElementById('max-storage-hours').textContent = maxMiningHours;

        storageUpgradeCost = (storageUpgradeCost * 1.5).toFixed(5); // Увеличиваем стоимость следующего улучшения Storage
        document.getElementById('storage-upgrade-cost').textContent = storageUpgradeCost;

        showAnimation('storage-animation'); // Показ анимации при нажатии на Storage Lvl Up
    } else {
        alert('Недостаточно монет для улучшения Storage!');
    }
});
