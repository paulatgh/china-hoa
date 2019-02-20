var render = function () {
    var photo = $('#photo').html();
    Mustache.parse(photo);
    $.each(data.album, function () {
        $('#photo_cycle').append(Mustache.render(photo, this));
    });




    // Global post render
    _post_render();

    // Local post render



    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === data._current_user.display_name && data._current_user.is_admin == true) {
        $('.address_book_click').css('display', 'block')
    }

    var username = storage.getItem('username')
    $(".btns-language").text(username);

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://127.0.0.1:8080/home/"
    })
};