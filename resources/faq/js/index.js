var render = function () {
    _pre_render()
    var event_template = $('#FAQcontent').html();
    Mustache.parse(event_template);
    $.each(data.FrequentlyAskedQuestions, function () {
        $('#FAQcontent_cycle').append(Mustache.render(event_template, this));
    });

    var event_template = $('#FAQtitle').html();
    $.each(data.FAQtitle, function () {
        $('#FAQtitle_cycle').append(Mustache.render(event_template, this));
    });


    // Global post render
    _post_render();

    // Local post render

    

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

};