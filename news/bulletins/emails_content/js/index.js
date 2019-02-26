var render = function() {
    _pre_render();

    var emails_title = $('#emails_title').html();
    Mustache.parse(emails_title);
    $.each(data.emails_title, function() {
        $('#emails_title_cycle').append(Mustache.render(emails_title, this));
    });

    // Global post render
    _post_render();

    // Local post render

    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

};
