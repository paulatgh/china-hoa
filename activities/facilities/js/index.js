var render = function () {
    var content_template = $('#Facilities').html();
    Mustache.parse(content_template);
    $('#Facilities').after(Mustache.render(content_template, data));

    // Global post render
    _post_render();

    // Local post render
    $.getScript('js/swiper.min.js', function () {
        //Carousel
        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    });
    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);

    $('.logout').click(function () {
        //TODO: log out user

    })
};