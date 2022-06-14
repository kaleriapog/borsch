const tabNavigationMeat = document.getElementById('tab-navigation-meat')
const tabNavigationVegan = document.getElementById('tab-navigation-vegan')
const tabProductMeat = document.getElementById('tab-product-meat')
const tabProductVegan = document.getElementById('tab-product-vegan')
const accordion = document.querySelector('.accordion-list')
const items = accordion.querySelectorAll('.accordion-list-item')
const ourDetailsIconClose = document.querySelector('.our-details-icon-close')
const ourDetailsBlock = document.querySelector('.our-details')
const ourDetailsTrigger = document.querySelectorAll('.open-our-details-trigger');

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

// for media slider
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

// for accordion
if(document.querySelector('.accordion-list')) {
    function toggleAccordion() {
        let thisItem = this.closest('.accordion-list-item');

        items.forEach(item => {
            if (thisItem == item) {

                thisItem.classList.toggle('open-accordion-item');
                return;
            }

            item.classList.remove('open-accordion-item');

            console.log(thisItem)
        });
        console.log(thisItem)
    }

    items.forEach(question => question.addEventListener('click', toggleAccordion))
}
//for open our-details
if(ourDetailsTrigger) {
    ourDetailsTrigger.forEach((elem) => {
        elem.addEventListener('click', () => {
            ourDetailsBlock.classList.add('open-our-details')
        })
    })
}
if(ourDetailsIconClose) {
    ourDetailsIconClose.addEventListener('click', () => {
        ourDetailsBlock.classList.remove('open-our-details')
    })
}
