var render = function() {
    _pre_render();
    var page_add_title = $('#page_add_title').html();
    Mustache.parse(page_add_title);
    $.each(data.page_add_title, function() {
        $('#page_add_title_cycle').append(Mustache.render(page_add_title, this));
    });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

}
