var render = function () {
    _pre_render();

    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(),data);});
    $("#page_title").after(function(){return Mustache.render($(this).html(),data);});
    $("#event_template").after(function(){return Mustache.render($(this).html(),data.event);});
    $("#Information_left_span").after(function(){return Mustache.render($(this).html(),data);});
    $("#Information_left_span_creator").after(function(){return Mustache.render($(this).html(),data);});

    var User_info = $('#User_info').html();
    $.each(data.user_info, function () {
        $('#User_info_cycle').append(Mustache.render(User_info, this));
    });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

};
