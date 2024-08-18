let score = 0;
const coin = document.getElementById('coin');
const scoreDisplay = document.getElementById('score');

coin.addEventListener('click', () => {
    score += 1;
    scoreDisplay.textContent = `Score: ${score}`;
});
