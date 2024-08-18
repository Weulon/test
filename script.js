let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.remove('active', 'previous');
        if (i === index) {
            page.classList.add('active');
        } else if (i === index - 1) {
            page.classList.add('previous');
        }
    });
}

function handleSwipe(event) {
    const direction = event.deltaX > 0 ? 'left' : 'right';
    if (direction === 'right' && currentPage > 0) {
        currentPage--;
    } else if (direction === 'left' && currentPage < pages.length - 1) {
        currentPage++;
    }
    showPage(currentPage);
}

// Инициализация первой страницы
showPage(currentPage);

// Добавляем обработчик жестов свайпа
document.addEventListener('swiped-left', handleSwipe);
document.addEventListener('swiped-right', handleSwipe);

// Функции для обработки жестов свайпа (регистрируем события)
(function() {
    let touchstartX = 0;
    let touchendX = 0;

    function checkDirection() {
        if (touchendX < touchstartX) {
            document.dispatchEvent(new Event('swiped-left'));
        }
        if (touchendX > touchstartX) {
            document.dispatchEvent(new Event('swiped-right'));
        }
    }

    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        checkDirection();
    });
})();
