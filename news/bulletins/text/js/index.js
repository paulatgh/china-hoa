var render = function() {
    _pre_render();
    var text_add_title = $('#text_add_title').html();
    Mustache.parse(text_add_title);
    $.each(data.text_add_title, function() {
        $('#text_add_title_cycle').append(Mustache.render(text_add_title, this));
    });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }
    addAuthenticityTokenToForms();

}
