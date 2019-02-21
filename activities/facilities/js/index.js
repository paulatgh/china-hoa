var render = function () {
    var Facilities = $('#content_title').html();
    $.each(data.content_title, function () {
        $('#content_title_cycle').append(Mustache.render(Facilities, this));
    });

    var entertainment_facilities = $('#entertainment_facilities').html();
    $.each(data.entertainment_facilities, function () {
        $('#entertainment_facilities_cycle').append(Mustache.render(entertainment_facilities, this));
    });

    var Img = $('#img').html();
    $.each(data.Img, function () {
        $('#img_cycle').append(Mustache.render(Img, this));
    });

    var bg_img = $('#bg_img').html();
    $.each(data.bg_img, function () {
        $('#bg_img_cycle').append(Mustache.render(bg_img, this));
    });

    var clubhouse = $('#clubhouse').html();
    $.each(data.clubhouse, function () {
        $('#clubhouse_cycle').append(Mustache.render(clubhouse, this));
    });

    var clubhouseContent = $('#clubhouseContent').html();
    $.each(data.clubhouseContent, function () {
        $('#clubhouseContent_cycle').append(Mustache.render(clubhouseContent, this));
    });

    var entertainmentProject = $('#entertainmentProject').html();
    $.each(data.entertainmentProject, function () {
        $('#entertainmentProject_cycle').append(Mustache.render(entertainmentProject, this));
    });

    var bg_img_second = $('#bg_img_second').html();
    $.each(data.bg_img_second, function () {
        $('#bg_img_second_cycle').append(Mustache.render(bg_img_second, this));
    });

    var entertainmentProject_content = $('#entertainmentProject_content').html();
    $.each(data.entertainmentProject_content, function () {
        $('#entertainmentProject_content_cycle').append(Mustache.render(entertainmentProject_content, this));
    });

    // Global post render
    _post_render();

    // Local post render
    $.getScript(`/community${data._metadata.page_path}/js/swiper.min.js`, function () {
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
        logOutUser()
    })
};
