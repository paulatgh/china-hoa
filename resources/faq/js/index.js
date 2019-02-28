var render = function() {
    _pre_render()

    // $("#faq").after(function() { return Mustache.render($(this).html(), data); });

    var faq = $('#faq').html()
    $.each(data.faq, function() {
        $('#faq_cycle').append(Mustache.render(faq, this));
    });

    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

};
