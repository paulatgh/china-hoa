var render = function() {
    var content_template = $('#edit').html();
    Mustache.parse(content_template);
    $('#edit').after(Mustache.render(content_template, data));
    _pre_render();

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

}
