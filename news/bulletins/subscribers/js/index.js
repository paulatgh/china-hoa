var render = function() {
    _pre_render();
    var subscribers_template = $('#subscribers_template').html();
    Mustache.parse(subscribers_template);
    $.each(data.subscribers, function() {
        $('#news_subscribers').append(Mustache.render(subscribers_template, this));
    });
    var content_title = $('#content_title').html();
    Mustache.parse(content_title);
    $.each(data.content, function() {
        $('#form_titles').append(Mustache.render(content_title, this));
    });

    // Global post render
    _post_render();

    // Local post render

    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

}
