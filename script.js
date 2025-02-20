// Модальное окно index.html
document.addEventListener('DOMContentLoaded', function () {
    const cartLink = document.querySelector('.header__links-item a[href="card.html"]'); // Находим ссылку "Корзина"
    const cardBox = document.querySelector('.card__item-box'); // Находим модальное окно

    // Проверяем, находится ли пользователь на index.html
    if (window.location.pathname.includes('index.html')) {
        if (cartLink && cardBox) {
            cartLink.addEventListener('click', function (event) {
                event.preventDefault(); // Предотвращаем переход по ссылке
                cardBox.classList.toggle('show'); // Показываем/скрываем модальное окно
            });
        }
    } else {
        // На других страницах ссылка "Корзина" работает как обычная
        if (cartLink) {
            cartLink.addEventListener('click', function () {
                window.location.href = 'card.html'; // Переход на страницу корзины
            });
        }
    }
});


// Модальное окно catalog.html
document.addEventListener('DOMContentLoaded', function () {
    const filterButton = document.querySelector('.filter-btn.filter1'); // Кнопка "Фильтрация"
    const filteringForm = document.querySelector('.filtering-form'); // Форма фильтрации

    filterButton.addEventListener('click', function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение кнопки
        filteringForm.classList.toggle('show'); // Переключаем класс show
    });
});