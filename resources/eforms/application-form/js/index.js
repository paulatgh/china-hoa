var render = function() {
    _pre_render()

    var event_template2 = $('#eforms_edit').html();
    $.each(data.eforms_edit, function() {
        $('#eforms_edit_cycle').append(Mustache.render(event_template2, this));
    });

    var event_template5 = $('#eForms_edit_title').html();
    $.each(data.eforms_edit_title, function() {
        $('#eForms_edit_title_cycle').append(Mustache.render(event_template5, this));
    });
    $("#breadcrumbs").after(function() {
        return Mustache.render($(this).html(), data);
    });

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
