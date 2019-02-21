var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.list, function () {
        $('#calendar_events').append(Mustache.render(event_template, this));
    });

    var list_category = $('#list_category').html();
    $.each(data.list_category, function () {
        $('#list_category_cycle').append(Mustache.render(list_category, this));
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
};