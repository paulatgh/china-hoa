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
    var storage = window.localStorage;
    var username = storage.getItem('username')
    $(".btns-language").text(username);

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://127.0.0.1:8080/home"
    })

    var username = storage.getItem('username')
    $(".btns-language").text(username);
}