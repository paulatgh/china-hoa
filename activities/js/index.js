var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.actives, function () {
        $('#events_photo').append(Mustache.render(event_template, this));
    });

        // Global post render
        _post_render();

        // Local post render

    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === 'admin') {
        $('.choose-right').css('margin-top', '50px')
        $('.announcements_add').css('display', 'block')
        $('.announcements_permission').css('display', 'block')
    }
    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://127.0.0.1:8080/home/"
    })

    var username = storage.getItem('username')
    $(".btns-language").text(username);
};