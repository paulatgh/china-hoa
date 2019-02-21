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
    if (data._current_user && data._current_user.is_admin == true) {
        $('.choose-right').css('margin-top', '50px')
        $('.announcements_add').css('display', 'block')
        $('.announcements_permission').css('display', 'block')
    }
    if (!data._current_user || !data._current_user.display_name) {
        $('.btns-language').text('null')
        $('.profile').css('display','none')
        $('.btns-language').click(function () {
            window.location.href = "http://127.0.0.1:8080/home/"
        })

    }
    $('.logout').click(function () {
        //TODO: log out user
    })
    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);
};