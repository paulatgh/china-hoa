var render = function() {
    _pre_render();
    // $("#breadcrumbs").after(function() {
    //     return Mustache.render($(this).html(), data);
    // });
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
        $('.part-a2').click(function() {
            var self = this;
            // TODO these should not be passing null, but it only matters in the dev env
            delete_element(data, null, null, function() {
                submitDynamicForm(self.getAttribute('data-link'), 'POST');
            });
        })
    }
}
