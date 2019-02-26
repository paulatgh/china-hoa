var render = function() {
    _pre_render()

    $("#faqs").after(function() { return Mustache.render($(this).html(), data); });
    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

};
