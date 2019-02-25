var render = function() {
    _pre_render()

    // var form = $('#form').html();
    // $('#form').after(Mustache.render(form, data));

    var eforms_add_title = $('#eforms_add_title').html();
    Mustache.parse(eforms_add_title);
    $.each(data.eforms_add_title, function() {
        $('#eforms_add_title_cycle').append(Mustache.render(eforms_add_title, this));
    });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

};
