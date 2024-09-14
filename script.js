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
                <img src="photo_2024-01-09_23-42-12.jpg" alt="Оптимизация моделей для 3D печати" style="width: 100%; margin-bottom: 10px;">
                <p>Описание: Научитесь оптимизировать 3D модели для печати, разрезать модели на части и исправлять ошибки.</p>
                <h4>Что вы узнаете:</h4>
                <ul>
                    <li><strong>Мастерство оптимизации моделей:</strong></li>
                    <ul>
                        <li>Научитесь настраивать модели для достижения максимального качества печати.</li>
                        <li>Избегайте распространенных ошибок, которые приводят к браку и потере материалов.</li>
                    </ul>
                    <li><strong>Разрезка крупных моделей:</strong></li>
                    <ul>
                        <li>Освойте методы разделения больших моделей на части для печати на принтерах с ограниченной областью печати.</li>
                        <li>Узнайте, как соединять части после печати без видимых швов.</li>
                    </ul>
                    <li><strong>Исправление ошибок подготовки:</strong></li>
                    <ul>
                        <li>Идентифицируйте и исправляйте геометрические проблемы в моделях.</li>
                        <li>Используйте проверенные техники для укрепления слабых структур и предотвращения деформаций.</li>
                    </ul>
                    <li><strong>Консультации по ключевым программам:</strong></li>
                    <ul>
                        <li>Blender: Моделирование, ретопология и текстурирование.</li>
                        <li>ZBrush: Детализация и скульптинг сложных форм.</li>
                        <li>Chitubox: Настройка параметров печати и генерация поддержек.</li>
                    </ul>
                </ul>
                <h4>Преимущества плана:</h4>
                <ul>
                    <li>Повышение качества ваших печатных изделий.</li>
                    <li>Экономия времени и ресурсов благодаря снижению количества неудачных печатей.</li>
                    <li>Углубление знаний в популярных программах 3D моделирования.</li>
                </ul>
                <div class="modal-footer">
                    <a href="https://t.me/tribute/app?startapp=d9nX" target="_blank" class="buy-btn">Купить</a>
                </div>
            `;
            break;
        case 'plan2':
            content = `
                <h3>План 2: Поиск и подготовка моделей</h3>
                <p>Цена: 15 000 руб. (вместе с Планом 3)</p>
                <img src="path-to-image2.jpg" alt="Поиск и подготовка моделей" style="width: 100%; margin-bottom: 10px;">
                <p>Описание: Узнайте, где искать модели для 3D печати и как их подготовить для печати.</p>
                <div class="modal-footer">
                    <a href="https://t.me/tribute/app?startapp=d9nX" target="_blank" class="buy-btn">Купить</a>
                </div>
            `;
            break;
        case 'plan3':
            content = `
                <h3>План 3: Продажа моделей и пассивный доход</h3>
                <p>Цена: 15 000 руб. (вместе с Планом 2)</p>
                <img src="path-to-image3.jpg" alt="Продажа моделей и пассивный доход" style="width: 100%; margin-bottom: 10px;">
                <p>Описание: Превратите свои навыки в стабильный источник дохода и станьте успешным предпринимателем в сфере 3D печати.</p>
                <div class="modal-footer">
                    <a href="https://t.me/tribute/app?startapp=d9nX" target="_blank" class="buy-btn">Купить</a>
                </div>
            `;
            break;
        case 'plan4':
            content = `
                <h3>План 4: Полное сопровождение и развитие бизнеса</h3>
                <p>Цена: 25 000 руб. (за все 4 плана)</p>
                <img src="path-to-image4.jpg" alt="Полное сопровождение и развитие бизнеса" style="width: 100%; margin-bottom: 10px;">
                <p>Описание: Получите всестороннюю поддержку для успешного старта и развития бизнеса в сфере 3D печати.</p>
                <div class="modal-footer">
                    <a href="https://t.me/tribute/app?startapp=d9nX" target="_blank" class="buy-btn">Купить</a>
                </div>
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
