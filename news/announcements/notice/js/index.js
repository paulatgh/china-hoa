var render = function () {
    var content_template = $('#notice').html();
    Mustache.parse(content_template);
    $('#notice').after(Mustache.render(content_template, data));
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

    $('.logout').click(function () {
        //TODO: log out user
    })

    $(".btns-language").text(username);
}