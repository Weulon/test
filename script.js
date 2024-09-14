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

// Функция для открытия модального окна с описанием и скрытия кнопки "Назад"
function openModal(planId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const backButton = document.querySelector('.back-btn'); // Кнопка "Назад"
    
    // Скрываем кнопку "Назад"
    backButton.style.display = 'none';
    
    let content = '';
    switch(planId) {
        case 'plan1':
            content = `
                <h3>План 1: Оптимизация моделей для 3D печати</h3>
                <p>Цена: 7 000 руб.</p>
                <img src="path-to-image1.jpg" alt="Оптимизация моделей для 3D печати" style="width: 100%; margin-bottom: 10px;">
                <p>Описание: Научитесь оптимизировать 3D модели для печати, разрезать модели на части и исправлять ошибки.</p>
                <a href="https://t.me/tribute/app?startapp=d9nX" target="_blank" class="buy-btn">Купить</a>
            `;
            break;
        case 'plan2':
            content = `
                <h3>План 2: Поиск и подготовка моделей</h3>
                <p>Цена: 15 000 руб. (вместе с Планом 3)</p>
                <img src="path-to-image2.jpg" alt="Поиск и подготовка моделей" style="width: 100%; margin-bottom: 10px;">
                <p>Описание: Узнайте, где искать модели для 3D печати и как их подготовить для печати.</p>
            `;
            break;
        case 'plan3':
            content = `
                <h3>План 3: Продажа моделей и пассивный доход</h3>
                <p>Цена: 15 000 руб. (вместе с Планом 2)</p>
                <img src="path-to-image3.jpg" alt="Продажа моделей и пассивный доход" style="width: 100%; margin-bottom: 10px;">
                <p>Описание: Превратите свои навыки в стабильный источник дохода и станьте успешным предпринимателем в сфере 3D печати.</p>
            `;
            break;
        case 'plan4':
            content = `
                <h3>План 4: Полное сопровождение и развитие бизнеса</h3>
                <p>Цена: 25 000 руб. (за все 4 плана)</p>
                <img src="path-to-image4.jpg" alt="Полное сопровождение и развитие бизнеса" style="width: 100%; margin-bottom: 10px;">
                <p>Описание: Получите всестороннюю поддержку для успешного старта и развития бизнеса в сфере 3D печати.</p>
            `;
            break;
        default:
            content = `<p>Информация о курсе недоступна.</p>`;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'flex';
}

// Функция для закрытия модального окна и показа кнопки "Назад"
function closeModal() {
    const modal = document.getElementById('modal');
    const backButton = document.querySelector('.back-btn');
    
    // Показываем кнопку "Назад"
    backButton.style.display = 'block';
    
    modal.style.display = 'none';
}

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal(); // Закрываем модал и показываем кнопку "Назад"
    }
};
