var render = function() {
    _pre_render()

    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });
    $('#committee').after(function() {return Mustache.render($(this).html(), data);});

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.choose-right').css('margin-top', '50px')
        $('.committee_admin_options').show()
        $('.committee_add').show().click(function() {
            window.location.href = `${data._metadata.root_url}/resources/committee/add/`
        })
    }

};
