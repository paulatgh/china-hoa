var render = function() {
    _pre_render();
    // var event_template = $('#add').html();
    // Mustache.parse(event_template);
    // $('#add').after(Mustache.render(event_template, data));

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }
    addAuthenticityTokenToForms();

};
