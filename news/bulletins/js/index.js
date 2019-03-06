var render = function() {
    _pre_render();
    $("#breadcrumbs").after(function() {
        return Mustache.render($(this).html(), data);
    });
    var bulletins_template = $('#bulletins_template').html();
    Mustache.parse(bulletins_template);
    $.each(data.bulletins, function() {
        $('#news_bulletins').append(Mustache.render(bulletins_template, $.extend({}, this, data._metadata)));
    });

    var the_title = $('#the_title').html();
    $.each(data.the_title, function() {
        $('#the_title_cycle').append(Mustache.render(the_title, this));
    });

    var email_button = $('#email_button').html();
    $.each(data.email_button, function() {
        $('#email_button_cycle').append(Mustache.render(email_button, $.extend({}, this, data._metadata)));
    });

    var template = $('#template').html();
    $.each(data.template, function() {
        $('#template_cycle').append(Mustache.render(template, this));
    });

    // Global post render
    _post_render();

    // Local post render

    // admin
    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);
    if (data._current_user && data._current_user.is_admin == true) {
        $('.address_book_click').css('display', 'block')
        $('.photo-albums').css('display', 'block')
    }

};
