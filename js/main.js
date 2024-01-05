// basket
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

// search
const headerEl = document.querySelector('header');
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const shadowEl = searchWrapEl.querySelector('.shadow');

searchStarterEl.addEventListener('click', showSearching);
searchCloserEl.addEventListener('click', hideSearching);
shadowEl.addEventListener('click', hideSearching);

function showSearching() {
    headerEl.classList.add('.searching');
}

function hideSearching() {
    headerEl.classList.remove('.searching');
}