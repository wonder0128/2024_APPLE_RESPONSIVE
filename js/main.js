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
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]; // 전개 연산자를 이용한 얕은 복사
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const shadowEl = searchWrapEl.querySelector('.shadow');
const searchInputEl = searchWrapEl.querySelector('input');
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')];

searchStarterEl.addEventListener('click', showSearch);
searchCloserEl.addEventListener('click', hideSearch);
shadowEl.addEventListener('click', hideSearch);

function showSearch() {
    headerEl.classList.add('searching');
    document.documentElement.classList.add('fixed');
    headerMenuEls.reverse().forEach((el, idx) => {
        el.style.transitionDelay = (idx * .4) / headerMenuEls.length + 's';
    });
    searchDelayEls.forEach((el, idx) => {
        el.style.transitionDelay = (idx * .4) / searchDelayEls.length + 's';
    });
    setTimeout(() => {
        searchInputEl.focus();
    }, 600);
}

function hideSearch() {
    headerEl.classList.remove('searching');
    document.documentElement.classList.remove('fixed');
    headerMenuEls.reverse().forEach((el, idx) => {
        el.style.transitionDelay = (idx * .4) / headerMenuEls.length + 's';
    });
    searchDelayEls.reverse().forEach((el, idx) => {
        el.style.transitionDelay = (idx * .4) / searchDelayEls.length + 's';
    });
    searchDelayEls.reverse();
    searchInputEl.value = '';
}

// 요소의 가시성 관찰
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('show');
    })
})

const infoEls = document.querySelectorAll('.info');
infoEls.forEach(el => {
    io.observe(el);
})
