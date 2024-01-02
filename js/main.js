const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = basketStarterEl.querySelector('.basket');

basketStarterEl.addEventListener('click', function(event) {
    event.stopPropagation(); // 이벤트가 상위 요소에 전달되지 않게 막아줌.
    if(basketEl.classList.contains('show')) {
        // hide
        hideBasket();
    } else {
        // show
        showBasket();
    }
});

basketEl.addEventListener('click', function(event) {
    event.stopPropagation();
});
window.addEventListener('click', function() {
    hideBasket();
});

function showBasket() {
    basketEl.classList.add('show');
}

function hideBasket() {
    basketEl.classList.remove('show');
}