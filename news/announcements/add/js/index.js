var render = function() {
    _pre_render();
    $("#breadcrumbs").after(function() {
        return Mustache.render($(this).html(), data);
    });
    $('#add-announcement-form').attr('action', `${data._metadata.root_url}${data._metadata.page_path}`);

    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/news/announcements`;
    })

    // Global post render
    _post_render();

    // Local post render

    addAuthenticityTokenToForms();
}
