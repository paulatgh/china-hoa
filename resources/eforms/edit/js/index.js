var render = function() {
    _pre_render();
    $("#page_title").after(function(){return Mustache.render($(this).html(),data);});
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
