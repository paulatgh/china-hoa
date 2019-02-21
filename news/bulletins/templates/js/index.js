var render = function () {
    var custom_template = $('#custom_template').html();
    Mustache.parse(custom_template);
    $.each(data.template, function () {
        $('#bulletins_custom').append(Mustache.render(custom_template, this));
    });
    var template_title = $('#template_title').html();
    Mustache.parse(template_title);
    $.each(data.headline, function () {
        $('#form_titles').append(Mustache.render(template_title, this));
    });

    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });
    
    if (data._current_user && data._current_user.is_admin == true) {
        $('.form_content_right').css('display', 'block');
        $(".form_title_right").css("display", "block");
    }

    // Global post render
    _post_render();

    // Local post render

    // admin
    $('.del').click(function () {
        deleteLog()
    })
    $('.edit').click(function () {
        var data = $(this).parent().prev().text();
        var str = `<input value='${data}' type="text" class="edit_inp"/> <span class="save">Save Changes</span>`
        $(this).parents('li').empty().append(str)
        $('.save').click(function () {
            var val = $(this).prev().val()
            var valStr =
                ` <div class="form_content_left">${val}</div>
                            <div class="form_content_right">
                                <span class="edit">Edit</span>
                                <span class="del">Delete</span>                                    
                            </div>`
            $(this).parent().empty().append(valStr)
            $('.del').click(function () {
                deleteLog()
                $('.delete_button').click(function () {
                    console.log('1111')
                })
            })
        })

    })
    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);

    $('.logout').click(function () {
        //TODO: log out user
        logOutUser()
    })

};