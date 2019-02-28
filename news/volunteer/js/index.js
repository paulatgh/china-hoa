var render = function() {
    _pre_render();
    $("#breadcrumbs").after(function() {
        return Mustache.render($(this).html(), data);
    });
    $('#volunteer_title').after(function() {
        return Mustache.render($(this).html(), data.volunteer_title[0]);
    });
    $('#volunteer_tiles').after(function() {
        return Mustache.render($(this).html(), data);
    });
    $('#add_links').after(function() {
        return Mustache.render($(this).html(), data);
    });
    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin) {
        $('.top-Add').show();
        $('.volunteer_admin_options').show();
        $('.part .part-a2').click(function() {
            delete_element()
        })
    }
    $(".part-a1").click(function() {
        window.location = `${data._metadata.root_url}/news/volunteer/edit`;
    })
    $(".part-a2").click(function() {
        delete_element()
    })
}
