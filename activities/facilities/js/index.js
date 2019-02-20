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
    var storage = window.localStorage;
    if (storage.getItem('username') === data._current_user.display_name && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

    var username = storage.getItem('username')
    $(".btns-language").text(username);

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://127.0.0.1:8080/home/"

    })
};