var render = function() {
    _pre_render()

    var form = $('#form').html();
    $('#form').after(Mustache.render(form, data));

    // Global post render
    _post_render();

    // Local post render

    
    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

};
