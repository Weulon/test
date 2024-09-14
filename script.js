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

// Функции для навигации в форме записи
function nextStep(currentStep) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.getElementById(`step-${currentStep + 1}`).classList.add('active');
}

function prevStep(currentStep) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.getElementById(`step-${currentStep - 1}`).classList.add('active');
}

// Функция для отображения деталей курса
function showCourseDetails(courseId) {
    const courseDetails = {
        1: `<h3>План 1: Оптимизация моделей для 3D печати</h3>
            <p><strong>Цена:</strong> 7 000 руб.</p>
            <p>Погрузитесь в профессиональные техники подготовки 3D моделей для идеальной печати.</p>
            <ul>
                <li>Мастерство оптимизации моделей для качественной печати.</li>
                <li>Разрезка крупных моделей на части.</li>
                <li>Исправление ошибок при подготовке к печати.</li>
                <li>Консультации по работе с Blender, ZBrush и Chitubox.</li>
            </ul>`,
        2: `<h3>План 2: Поиск и подготовка моделей</h3>
            <p><strong>Цена:</strong> 15 000 руб. (вместе с Планом 3)</p>
            <p>Раскройте богатство доступных 3D моделей и научитесь эффективно их использовать.</p>
            <ul>
                <li>Поиск моделей в легальных источниках.</li>
                <li>Анализ и подготовка моделей для печати.</li>
                <li>Создание уникальных моделей и их адаптация.</li>
            </ul>`,
        3: `<h3>План 3: Продажа моделей и пассивный доход</h3>
            <p><strong>Цена:</strong> 15 000 руб. (вместе с Планом 2)</p>
            <p>Превратите свои навыки в стабильный источник дохода и станьте успешным предпринимателем в сфере 3D печати.</p>
            <ul>
                <li>Поиск и привлечение заказчиков.</li>
                <li>Маркетинг и брендирование.</li>
                <li>Стратегии пассивного дохода через продажу моделей.</li>
            </ul>`,
        4: `<h3>План 4: Полное сопровождение и развитие бизнеса</h3>
            <p><strong>Цена:</strong> 25 000 руб. (за все 4 плана)</p>
            <p>Получите всестороннюю поддержку и необходимые инструменты для быстрого старта и успешного развития вашего бизнеса.</p>
            <ul>
                <li>Разработка Telegram-бота и создание сайта.</li>
                <li>Привлечение первых клиентов.</li>
                <li>Построение пассивного дохода и масштабирование бизнеса.</li>
            </ul>`
    };

    document.getElementById('course-details').innerHTML = courseDetails[courseId];
    document.getElementById('course-modal').style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
    document.getElementById('course-modal').style.display = 'none';
}

// Функция для переключения отображения ответа в FAQ
function toggleFaq(faqId) {
    const answer = document.getElementById(`faq-answer-${faqId}`);
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    showMenu('main-menu');
});

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    const modal = document.getElementById('course-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
