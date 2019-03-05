var render = function() {
    _pre_render()
    // var event_template = $('#eforms_content').html();
    // Mustache.parse(event_template);
    // $.each(data.eForms, function() {
    //     $('#eforms_content_cycle').append(Mustache.render(event_template, this));
    // });
    var event_template2 = $('#eforms_edit').html();
    $.each(data.eforms_edit, function() {
        $('#eforms_edit_cycle').append(Mustache.render(event_template2, this));
    });

    var event_template3 = $('#View').html();
    $.each(data.view_export_submitted_eforms, function() {
        $('#view_cycle').append(Mustache.render(event_template3, this));
    });

    // var event_template4 = $('#eforms_type').html();
    // Mustache.parse(event_template);
    // $.each(data.eforms_type, function() {
    //     $('#eforms_type_cycle').append(Mustache.render(event_template4, this));
    // });

    var event_template5 = $('#eForms_edit_title').html();
    $.each(data.eforms_edit_title, function() {
        $('#eForms_edit_title_cycle').append(Mustache.render(event_template5, this));
    });

    var event_template6 = $('#see_table').html();
    $.each(data.see_table, function() {
        $('#see_table_cycle').append(Mustache.render(event_template6, this));
    });

    var event_template7 = $('#function_button_name').html();
    $.each(data.function_button_name, function() {
        $('#function_buttonname_cycle').append(Mustache.render(event_template7, this));
    });
    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
        $(".del").click(function() {
            delete_element()
        })
        $(".edi").click(function() {
            window.location.href = `${data._metadata.root_url}/resources/eforms/edit`
        })
    }

    if (data._current_user && data._current_user.is_admin == true) {
        $('.form_content_right').css('display', 'block');
        $(".form_title_right").css("display", "block");
    }
};
