var render = function() {
    _pre_render();

    // Global post render
    _post_render();

    // Local post render

    addAuthenticityTokenToForms();
}
