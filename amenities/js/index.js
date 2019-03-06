var render = function() {
    _pre_render();

    $('#page_title').after(function() { return Mustache.render($(this).html(), data); });
    $("#sections").after(function() { return Mustache.render($(this).html(), data); });

    // Global post render
    _post_render();

    // Local post render
    if (data._current_user && data._current_user.is_admin == true) {
        $('.choose-right').css('margin-top', '50px')
        $('.announcements_add').css('display', 'block')
        $('.announcements_permission').css('display', 'block')
    }

    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });

};
