var render = function() {
    _pre_render();
    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });
    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/resources/docs`;
    })

    // Global post render
    _post_render();

    // Local post render

    addAuthenticityTokenToForms();
};
