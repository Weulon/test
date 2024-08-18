let currentPage = 0;
const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.remove('active', 'previous');
        if (i === index) {
            page.classList.add('active');
        } else if (i === index - 1) {
            page.classList.add('previous');
        }
    });
    updateButtons();
}

function updateButtons() {
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === pages.length - 1;
}

// Кнопка "Назад"
prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

// Кнопка "Вперед"
nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

// Инициализация первой страницы
showPage(currentPage);
