var render = function() {
    _pre_render();

    // var content_template = $('#edit').html();
    // Mustache.parse(content_template);
    // $('#edit').after(Mustache.render(content_template, data));

    var table_header = $('#table_header').html()
    $.each(data.table_header, function() {
        $('#table_header_cycle').append(Mustache.render(table_header, this));
    });

    var drop_down_list = $('#drop_down_list').html()
    $.each(data.option, function() {
        $('#drop_down_list_cycle').append(Mustache.render(drop_down_list, this));
    });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

}
