const tabNavigationMeat = document.getElementById('tab-navigation-meat')
const tabNavigationVegan = document.getElementById('tab-navigation-vegan')
const tabProductMeat = document.getElementById('tab-product-meat')
const tabProductVegan = document.getElementById('tab-product-vegan')

tabNavigationMeat.addEventListener('click', (el) => {
    el.preventDefault()
    tabNavigationMeat.classList.add('button-light-color')
    tabNavigationVegan.classList.remove('button-light-color')

    tabProductMeat.classList.add('open-products')
    tabProductVegan.classList.remove('open-products')
})

tabNavigationVegan.addEventListener('click', (el) => {
    el.preventDefault()
    tabNavigationVegan.classList.add('button-light-color')
    tabNavigationMeat.classList.remove('button-light-color')

    tabProductMeat.classList.remove('open-products')
    tabProductVegan.classList.add('open-products')
})

const swiperReviews = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    breakpoints: {
        320: {
            spaceBetween: 15,
        },
        767: {
            spaceBetween: 32,
        },
    },
    centeredSlides: true,
    navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev',
    },
});

const swiperMedia = new Swiper('.media-about-us__slider', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    breakpoints: {
        320: {
            spaceBetween: 15,
            slidesPerView: 1,
        },
        420: {
            spaceBetween: 15,
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: '.media-about-us__button-next',
        prevEl: '.media-about-us__button-prev',
    },
});