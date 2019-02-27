var render = function() {
    _pre_render();
    var event_template = $('#add').html();
    Mustache.parse(event_template);
    $('#add').after(Mustache.render(event_template, data));
    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });
    
    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/activities/photo/album`;
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
