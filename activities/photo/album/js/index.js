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
    if (data._current_user && data._current_user.is_admin == true) {
        $('.address_book_click').css('display', 'block')
    }

    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);

    $('.logout').click(function () {
        //TODO: log out user
        logOutUser()
    })
};