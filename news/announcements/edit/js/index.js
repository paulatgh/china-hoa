var render = function() {
    _pre_render();

    $('#edit-announcement-body').after(function() { return Mustache.render($(this).html(), data.announcement) });

    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/news/announcements`;
    })

    // Global post render
    _post_render();

    // Local post render

    addAuthenticityTokenToForms();
}
