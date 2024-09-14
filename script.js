// Функция для переключения между меню
function showMenu(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => {
        if (menu.id === menuId) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }
    });
}

// Функция для вставки Telegram-ника пользователя
function insertTelegramUsername() {
    const telegramField = document.getElementById('telegram-nickname');
    if (window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
        const username = window.Telegram.WebApp.initDataUnsafe.user.username;
        if (username) {
            telegramField.value = `@${username}`;
        } else {
            alert('У вас не установлен Telegram-ник. Пожалуйста, установите его в настройках Telegram.');
        }
    } else {
        alert('Невозможно получить данные пользователя. Пожалуйста, откройте приложение в Telegram.');
    }
}

// Функция для отправки формы
function submitForm() {
    const fullname = document.getElementById('fullname').value.trim();
    const telegramNick = document.getElementById('telegram-nickname').value.trim();

    if (fullname === '' || telegramNick === '') {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    // Здесь можно добавить код для отправки данных на сервер или боту
    alert(`Спасибо, ${fullname}! Ваша заявка отправлена.`);
    showMenu('main-menu');
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    showMenu('main-menu');
});
