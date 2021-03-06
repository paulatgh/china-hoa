var render = function() {
    _pre_render();
    $("#breadcrumbs").after(function() {
        return Mustache.render($(this).html(), data);
    });
    var custom_template = $('#custom_template').html();
    Mustache.parse(custom_template);
    $.each(data.template, function() {
        $('#bulletins_custom').append(Mustache.render(custom_template, this));
    });
    var template_title = $('#template_title').html();
    Mustache.parse(template_title);
    $.each(data.headline, function() {
        $('#form_titles').append(Mustache.render(template_title, this));
    });

    if (data._current_user && data._current_user.is_admin == true) {
        $('.form_content_right').css('display', 'block');
        $(".form_title_right").css("display", "block");
    }

    // Global post render
    _post_render();

    // Local post render

    // admin
    $('.del').click(function() {
        delete_element()
    })
    $('.edit').click(function() {
        var data = $(this).parent().prev().text();
        var str = `<input value='${data}' type="text" class="edit_inp"/> <span class="save">Save Changes</span>`
        $(this).parents('li').empty().append(str)
        $('.save').click(function() {
            var val = $(this).prev().val()
            var valStr =
                ` <div class="form_content_left">${val}</div>
                            <div class="form_content_right">
                                <span class="edit">Edit</span>
                                <span class="del">Delete</span>                                    
                            </div>`
            $(this).parent().empty().append(valStr)
            $('.del').click(function() {
                delete_element()
                $('.delete_button').click(function() {
                    console.log('1111')
                })
            })
        })

    })

};
