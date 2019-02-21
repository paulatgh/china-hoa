var render = function () {
    var content_template = $('#saveFile').html();
    Mustache.parse(content_template);
    $('#saveFile').after(Mustache.render(content_template, data));
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });


    // Global post render
    _post_render();

    // Local post render


    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }
    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);
    $('.logout').click(function () {
        //TODO: log out user
    })
}