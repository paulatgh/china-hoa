var render = function() {
    _pre_render()
    var content_template = $('#bodya').html();
    Mustache.parse(content_template);
    $('#bodya').after(Mustache.render(content_template, data));

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

};
