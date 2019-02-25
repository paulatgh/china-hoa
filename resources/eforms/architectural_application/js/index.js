var render = function() {
    _pre_render()
    var page_title = $('#page_title').html()
    $.each(data.page_title, function() {
        $('#page_title_cycle').append(Mustache.render(page_title, this));
    });

    var article_title = $('#article_title').html()
    $.each(data.article_title, function() {
        $('#article_title_cycle').append(Mustache.render(article_title, this));
    });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.choose-right').css('margin-top', '50px')
        $('.announcements_add').css('display', 'block')
        $('.announcements_permission').css('display', 'block')
    }

};
