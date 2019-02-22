var render = function () {
    _pre_render()
    var event_template = $('#faq_content').html();
    Mustache.parse(event_template);
    $.each(data.frequently_asked_questions, function () {
        $('#faq_content_cycle').append(Mustache.render(event_template, this));
    });

    var event_template = $('#faq_title').html();
    $.each(data.faq_title, function () {
        $('#faq_title_cycle').append(Mustache.render(event_template, this));
    });


    // Global post render
    _post_render();

    // Local post render

    

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

};