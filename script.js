let score = 0;
let combo = 1;
let lastClickTime = 0;
let timer = 30;  // Время игры 30 секунд

const coin = document.getElementById('coin');
const scoreDisplay = document.getElementById('score');
const comboDisplay = document.getElementById('combo');
const timerDisplay = document.getElementById('timer');

// Обновление таймера
const timerInterval = setInterval(() => {
    timer--;
    timerDisplay.textContent = `Time left: ${timer}s`;

    if (timer <= 0) {
        clearInterval(timerInterval);
        alert(`Game Over! Your final score is ${score}`);
        resetGame();
    }
}, 1000);

coin.addEventListener('click', () => {
    const now = new Date().getTime();
    // Если пользователь нажимает быстро (менее чем за 500 мс)
    if (now - lastClickTime < 500) {
        combo++;
    } else {
        combo = 1;
    }
    
    score += combo;
    scoreDisplay.textContent = `Score: ${score}`;
    comboDisplay.textContent = `Combo: x${combo}`;
    
    lastClickTime = now;
});

function resetGame() {
    score = 0;
    combo = 1;
    timer = 30;
    scoreDisplay.textContent = 'Score: 0';
    comboDisplay.textContent = 'Combo: x1';
    timerDisplay.textContent = 'Time left: 30s';
    setInterval(timerInterval, 1000);
}
