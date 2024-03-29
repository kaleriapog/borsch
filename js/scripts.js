const tabNavigationMeat = document.getElementById('tab-navigation-meat')
const tabNavigationVegan = document.getElementById('tab-navigation-vegan')
const tabProductMeat = document.getElementById('tab-product-meat')
const tabProductVegan = document.getElementById('tab-product-vegan')
const accordion = document.querySelector('.accordion-list')
const ourDetailsIconClose = document.querySelector('.our-details-icon-close')
const ourDetailsBlock = document.querySelector('.our-details')
const ourDetailsTrigger = document.querySelectorAll('.open-our-details-trigger');
const menuBurgerIconOpen = document.querySelector('.menu-burger-icon-open')
const menu = document.querySelector('.header__menu')
const menuBurgerIconClose = document.querySelector('.icon-close-menu')
const thankOrderIconClose = document.querySelector('.thank-for-order-icon-close')
const thankOrderBlock = document.querySelector('.thank-for-order')
const thankOrderTrigger = document.querySelectorAll('.open-thank-for-order-trigger');
const header = document.querySelector('.header')
const anchors = document.querySelectorAll('a[href*="#"]')
const arrItemsMenuHeader = document.querySelectorAll('.header-red .header__menu-list li')

// for open menu mobile
if(menuBurgerIconOpen) {
    menuBurgerIconOpen.addEventListener('click', () => {
        menu.classList.add('open-menu-mobile')
        document.body.classList.add('no-scroll')
    })
}

if(menuBurgerIconClose) {
    menuBurgerIconClose.addEventListener('click', () => {
        menu.classList.remove('open-menu-mobile')
        document.body.classList.remove('no-scroll')
    })
}

//for fixed header
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    if (scrollTop >= 50) {
        if (header.classList.contains('header-white')) {
            header.classList.add('header-background-white')
        } else {
            header.classList.add('header-background')
        }
    } else {
        header.classList.remove('header-background')
        header.classList.remove('header-background-white')
    }
})

// for tabs
if(tabNavigationMeat) {
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
}

// for reviews slider
if(document.querySelector('.reviews__slider')) {
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
    })
}

// for media slider
if(document.querySelector('.media-about-us__slider')) {
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
    })
}

//for product template images
if(document.querySelector('.slider-product-images')) {
    const swiperProductTemplateImages = new Swiper(".slider-product-images", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        rewind: true,
    });
}

// for accordion
if(accordion) {
    const items = accordion.querySelectorAll('.accordion-list-item')

    function toggleAccordion() {
        let thisItem = this.closest('.accordion-list-item');

        items.forEach(item => {
            if (thisItem === item) {
                thisItem.classList.toggle('open-accordion-item');
                return;
            }

            item.classList.remove('open-accordion-item');

        });
    }

    items.forEach(question => question.addEventListener('click', toggleAccordion))
}

//for open our-details
if(ourDetailsTrigger) {
    ourDetailsTrigger.forEach((elem) => {
        elem.addEventListener('click', () => {
            ourDetailsBlock.classList.add('open-pop-up')
            document.body.classList.add('no-scroll')
        })
    })
}

if(ourDetailsIconClose) {
    ourDetailsIconClose.addEventListener('click', () => {
        ourDetailsBlock.classList.remove('open-pop-up')
        document.body.classList.remove('no-scroll')
    })
}

//for open thank-for-order
if(thankOrderTrigger) {
    thankOrderTrigger.forEach((elem) => {
        elem.addEventListener('click', () => {
            thankOrderBlock.classList.add('open-pop-up')
            document.body.classList.add('no-scroll')
        })
    })
}

if(thankOrderIconClose) {
    thankOrderIconClose.addEventListener('click', () => {
        thankOrderBlock.classList.remove('open-pop-up')
        document.body.classList.remove('no-scroll')
    })
}

//for scroll in to view
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        if(!anchor.getAttribute('href').substr( 1).length) return;

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

if (window.matchMedia("(max-width: 1024px)")) {
    arrItemsMenuHeader.forEach((itemMenu) => {
        itemMenu.addEventListener('click', () => {
            menu.classList.remove('open-menu-mobile')
            document.body.classList.remove('no-scroll')
        })
    })
}
