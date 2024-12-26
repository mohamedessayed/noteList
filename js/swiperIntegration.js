let swiper = new Swiper('.swiper',{
    autoplay: {
        delay: 5000,
    },
    watchOverflow:false,
    spaceBetween:100,
    slidesPerView:3,
    loop: true,
    zoom: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

