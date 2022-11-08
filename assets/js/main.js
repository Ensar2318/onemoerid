// Header ve footer load işlemi
$(document).ready(function () {
    //$("#header").load("header.html");
    //$("#footer").load("footer.html");

    // Transition kısmını engellemeye yarıyor.
    $("body").addClass("page-loaded");

    $('.hamburger').click(function () {
        $('.mobile-menu-wrapper').toggleClass('active');
    })

    $('.mobile-menu li > i').click(function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle(500)
    })

    $('.close-menu').click(function () {
        $('.mobile-menu .sub-menu').hide();
        $('.mobile-menu i').removeClass('active');

        $('.mobile-menu-wrapper').removeClass('active');
    })

    $('.accordion-item .item-header').click(function () {
        $(this).parent().toggleClass('active');
        $(this).next().slideToggle(300)
    })

    $("#tabbarmain .tabbar-main-item .tabbar-step").click(function (e) {
        e.preventDefault();
        if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active");

        } else {
            $("#tabbarmain .tabbar-main-item").removeClass("active");
            $(this).parent().addClass("active");

        }

    });

});

