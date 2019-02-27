var render = function() {
    _pre_render();

    var page_title = $('#page_title').html();
    Mustache.parse(page_title);
    $.each(data.page_title, function() {
        $('#page_title_cycle').append(Mustache.render(page_title, this));
    });
    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });
    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/resources/eforms`;
    })
    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }
    addAuthenticityTokenToForms();

};
