var render = function() {
    _pre_render();
    // var content_template = $('#edit_eforms').html();
    // Mustache.parse(content_template);
    // $('#edit_eforms').after(Mustache.render(content_template, data));

    var page_title = $('#page_title').html();
    Mustache.parse(page_title);
    $.each(data.page_title, function() {
        $('#page_title_cycle').append(Mustache.render(page_title, this));
    });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }
    addAuthenticityTokenToForms();

};
