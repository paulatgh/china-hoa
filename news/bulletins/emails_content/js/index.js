var render = function() {
    _pre_render();

    var emails_title = $('#emails_title').html();
    Mustache.parse(emails_title);
    $.each(data.emails_title, function() {
        $('#emails_title_cycle').append(Mustache.render(emails_title, this));
    });
    $("#breadcrumbs").after(function() {
        return Mustache.render($(this).html(), data);
    });
    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/news/bulletins`;
    })
    // Global post render
    _post_render();

    // Local post render

    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

};
