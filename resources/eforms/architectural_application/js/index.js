var render = function() {
    _pre_render();

    data.eform && $('#page_title').after(function() { return Mustache.render($(this).html(), data.eform); });
    data.eform && $('#article_title').after(function() { return Mustache.render($(this).html(), data.eform); });
    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });
    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/resources/eforms`;
    })
    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.choose-right').css('margin-top', '50px')
        $('.announcements_add').css('display', 'block')
        $('.announcements_permission').css('display', 'block')
    }
    addAuthenticityTokenToForms();

};
