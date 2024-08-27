let collectedAmount = 0; // Текущее количество монет в разделе "Collected"
let totalBalance = 0; // Общий баланс монет

// Функция для увеличения количества монет в разделе "Collected" каждую минуту
function startMining() {
    setInterval(() => {
        collectedAmount += 100;
        document.getElementById('mining-amount').textContent = collectedAmount.toFixed(5);
    }, 60000); // 60000 миллисекунд = 1 минута
}

// Обработчик для кнопки "Claim" в основном меню
document.querySelector('#claim-main').addEventListener('click', function() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('golt-miner-menu').style.display = 'block';
    startMining(); // Запуск процесса добычи монет
});

// Обработчик для кнопки "Назад"
document.querySelector('#back-btn').addEventListener('click', function() {
    document.getElementById('golt-miner-menu').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
});

// Обработчик для кнопки "Claim" в меню "GOLT Miner"
document.querySelector('#claim-golt').addEventListener('click', function() {
    totalBalance += collectedAmount; // Добавляем собранные монеты к общему балансу
    document.getElementById('total-balance').textContent = totalBalance.toFixed(5); // Обновляем отображение общего баланса
    collectedAmount = 0; // Сбрасываем собранные монеты
    document.getElementById('mining-amount').textContent = collectedAmount.toFixed(5); // Обновляем отображение собранных монет
    alert('Монеты успешно собраны!');
});
