
document.querySelectorAll("[data-swiper-init]").forEach(elSwiper => {

    let isLoop = elSwiper.hasAttribute("data-swiper-loop");
    let isCenteredSlides = elSwiper.hasAttribute("data-swiper-centered");
    let pagination = elSwiper.hasAttribute("data-swiper-pagination") ? JSON.parse(elSwiper.getAttribute("data-swiper-pagination")) : false;
    let nextBtn = elSwiper.hasAttribute("data-swiper-next") ? elSwiper.getAttribute("data-swiper-next") : false;
    let prevBtn = elSwiper.hasAttribute("data-swiper-prev") ? elSwiper.getAttribute("data-swiper-prev") : false;
    let breakpoints = "";
    if (elSwiper.hasAttribute("data-swiper-breakpoints")) {
        array = JSON.parse(elSwiper.getAttribute("data-swiper-breakpoints"));
        let len = array.length - 1;
        array.forEach((e, key) => {
            [media, perSlide, spacing] = e;
            breakpoints += `"${media}": {"slidesPerView": ${perSlide},"spaceBetween": ${spacing}}${len != key ? "," : ""}`;
        });
        breakpoints = JSON.parse("{" + breakpoints + "}");
    } else {
        breakpoints = null;
    }

    var newSwiper = new Swiper(elSwiper, {
        loop: isLoop,
        loopFillGroupWithBlank: true,
        centeredSlides: isCenteredSlides,
        breakpoints: breakpoints,
        pagination: pagination,
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },
    });
});
