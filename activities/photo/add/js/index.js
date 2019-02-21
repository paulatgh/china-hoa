var render = function () {
    var event_template = $('#add').html();
    Mustache.parse(event_template);
    $('#add').after(Mustache.render(event_template, data));

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
        logOutUser()
    })
};