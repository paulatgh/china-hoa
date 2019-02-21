var render = function () {
    var bulletins_template = $('#bulletins_template').html();
    Mustache.parse(bulletins_template);
    $.each(data.bulletins, function () {
        $('#news_bulletins').append(Mustache.render(bulletins_template, this));
    });
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });
    // Global post render
    _post_render();

    // Local post render

    // admin
    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);
    if (data._current_user && data._current_user.is_admin == true) {
        $('.address_book_click').css('display', 'block')
        $('.photo-albums').css('display', 'block')
    }

    $('.logout').click(function () {
        //TODO: log out user
    })

    $(".btns-language").text(username);
};