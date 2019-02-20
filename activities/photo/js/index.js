var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.albums, function () {
        $('#events_photo').append(Mustache.render(event_template, this));
    });


    // Global post render
    _post_render();

    // Local post render

    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === data._current_user.display_name && data._current_user.is_admin == true) {
        $('.address_book_click').css('display', 'block')
        $(".address_book_right").css("display", "block")
    }
    var username = storage.getItem('username')
    $(".btns-language").text(username);


    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://127.0.0.1:8080/home/"

    })
    $(".address_book_right").click(function () {
        $(".upload-photos").css("display", "block")
        $(".bg").css("display", "block")
    })
    $(".photos-img").click(function () {
        $(".upload-photos").css("display", "none")
        $(".bg").css("display", "none")
    })
};