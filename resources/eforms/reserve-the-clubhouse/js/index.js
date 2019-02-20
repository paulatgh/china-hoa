var render = function () {
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });
    var content_template = $('#bodya').html();
    Mustache.parse(content_template);
    $('#bodya').after(Mustache.render(content_template, data));

        // Global post render
        _post_render();

        // Local post render

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