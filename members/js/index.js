var render = function() {
    _pre_render()

    $('#header').after(function() { return Mustache.render($(this).html(), data); });
    $('#members').after(function() { return Mustache.render($(this).html(), data); });

    // Global post render
    _post_render();

    // Local post render
    
    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });

    addAuthenticityTokenToForms();
}
