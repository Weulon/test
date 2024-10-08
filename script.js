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
                <p>Детали курса</p>
                <img src="ne.jpg" alt="Оптимизация моделей для 3D печати" style="width: 100%; margin-bottom: 10px;">
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
                    <h3>План 2: Извлечение и подготовка 3D моделей из игр</h3>
                    <p>Автор курса @dikayl. Цена курса 20.000руб.</p>
                    <img src="path-to-image2.jpg" alt="Извлечение и подготовка моделей из игр" style="width: 100%; margin-bottom: 10px;">
                    <p>На этом курсе вы научитесь, как с помощью специализированных программ извлекать 3D модели из игр и адаптировать их для последующей печати или использования в других проектах.</p>
                    <h4>Что вы узнаете:</h4>
                    <ul>
                        <li><strong>Извлечение моделей из игр:</strong></li>
                        <ul>
                            <li>Использование программ для извлечения 3D моделей из популярных игр.</li>
                            <li>Обзор лучших инструментов и плагинов для этой задачи.</li>
                            <li>Правовые аспекты использования игровых моделей.</li>
                        </ul>
                        <li><strong>Анализ и адаптация игровых моделей:</strong></li>
                        <ul>
                            <li>Оценка качества моделей и их пригодности для дальнейшей работы.</li>
                            <li>Оптимизация моделей для 3D печати или других целей (анимации, текстурирование).</li>
                        </ul>
                        <li><strong>Создание уникальных моделей на основе игровых активов:</strong></li>
                        <ul>
                            <li>Техники модификации и доработки игровых моделей.</li>
                            <li>Советы по созданию собственных версий игровых персонажей и объектов.</li>
                        </ul>
                    </ul>
                    <h4>Преимущества плана:</h4>
                    <ul>
                        <li>Возможность использовать богатую библиотеку игровых моделей для своих проектов.</li>
                        <li>Научитесь быстро адаптировать игровые активы для коммерческого использования.</li>
                        <li>Расширьте свои навыки в области 3D моделирования и печати, работая с популярными игровыми объектами.</li>
                    </ul>
                    <div class="modal-footer">
                        <a href="https://t.me/tribute/app?startapp=d9nX" target="_blank" class="buy-btn">Купить</a>
                    </div>
                `;
            
            break;
            case 'plan3':
                content = `
                    <h3>План 3: Продажа моделей и пассивный доход</h3>
                    <p>Цена: 30 000 руб. (вместе с Планом 2)</p>
                    <img src="path-to-image3.jpg" alt="Продажа моделей и пассивный доход" style="width: 100%; margin-bottom: 10px;">
                    <p>В этом курсе я подробно расскажу, как и где продавать 3D модели для печати, а также предложу несколько проверенных бизнес-идей. Вы узнаете тонкости этого процесса, которые часто остаются за кулисами и о которых редко говорят. Эти знания помогут вам не только начать зарабатывать, но и создать стабильный источник дохода в долгосрочной перспективе.</p>
                    <div class="modal-footer">
                        <a href="https://t.me/tribute/app?startapp=d9nX" target="_blank" class="buy-btn">Купить</a>
                    </div>
                `;
            break;
            case 'plan4':
                content = `
                    <h3>План 4: Полное сопровождение и развитие бизнеса</h3>
                    <p>Цена: 100 000 руб.</p>
                    <img src="path-to-image4.jpg" alt="Полное сопровождение и развитие бизнеса" style="width: 100%; margin-bottom: 10px;">
                    <p>Получите всестороннюю поддержку и необходимые инструменты для быстрого старта и успешного развития вашего бизнеса в сфере 3D печати.</p>
                    <h4>Что вы получите:</h4>
                    <ul>
                        <li><strong>Разработка Telegram-бота:</strong></li>
                        <ul>
                            <li>Создание бота для автоматизации взаимодействия с клиентами.</li>
                            <li>Настройка функций для приема заказов, консультаций и оповещений.</li>
                        </ul>
                        <li><strong>Создание собственного сайта:</strong></li>
                        <ul>
                            <li>Интеграция с платежными системами и социальными сетями.</li>
                        </ul>
                        <li><strong>Привлечение первых клиентов:</strong></li>
                        <ul>
                            <li>Практические советы по запуску рекламных кампаний.</li>
                            <li>Использование SEO и контент-маркетинга для увеличения видимости.</li>
                        </ul>
                        <li><strong>Построение пассивного дохода:</strong></li>
                        <ul>
                            <li>Индивидуальные стратегии и план действий.</li>
                            <li>Постоянная поддержка и консультации на всех этапах.</li>
                        </ul>
                    </ul>
                    <h4>Преимущества плана:</h4>
                    <ul>
                        <li>Полный набор знаний и инструментов для успешного бизнеса.</li>
                        <li>Персональное сопровождение от опытного специалиста.</li>
                        <li>Быстрый выход на рынок и опережение конкурентов.</li>
                    </ul>
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

function toggleFaq(faqId) {
    const answer = document.getElementById(`faq-answer-${faqId}`);
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

