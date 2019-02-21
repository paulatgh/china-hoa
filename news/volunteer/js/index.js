var render = function () {
    var volunteer_template = $('#volunteer_template').html();
    Mustache.parse(volunteer_template);
    $.each(data.volunteer, function () {
        $('#news_volunteer').append(Mustache.render(volunteer_template, this));
    });
    var volunteer_templates = $('#volunteer_templates').html();
    Mustache.parse(volunteer_templates);
    $.each(data.volunteersecond, function () {
        $('#news_volunteers').append(Mustache.render(volunteer_templates, this));
    });

    var volunteer_templatet = $('#volunteer_templatet').html();
    Mustache.parse(volunteer_templatet);
    $.each(data.volunteerthird, function () {
        $('#news_volunteert').append(Mustache.render(volunteer_templatet, this));
    });
    var volunteer_title = $('#volunteer_title').html();
    Mustache.parse(volunteer_title);
    $.each(data.volunteertitle, function () {
        $('#main_volunteer').append(Mustache.render(volunteer_title, this));
    });
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });
    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin) {
        $('.top-Add').css('display', 'block')
        $('.part').css('display', 'block')
        $('.part .part-a2').click(function () {
            deleteLog()
        })
    }
    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);
    $('.logout').click(function () {
        //TODO: log out user
        logOutUser()
    })

}

function edit() {
    $(".part-a1").click(function () {
        if ($('.saveChange').length !== 0) {
            return false;
        }
        var val = $(this).parents('ul').find('li');
        var saveButton = `<span class="saveChange">Save</span>`;
        val.each(function (index, item) {
            if ($(item).find('.part-a')) {
                $(item).find('.part-a').remove();
            }
            var value = $(item).text().trim();
            var inp = `<input type="text" style="width:80%" value="${value}"/>`;
            $(item).empty().append(inp)
        })
        val.parent().append(saveButton);
        $('.saveChange').click(function () {
            $(this).remove()
            var value = []
            val.find('input').each(function (index, item) {
                value.push($(item).val())
            })
            $(val).empty()
            var editStr = `
            <div class="part-a" style="display: block;">
            <a class="part-a1">Edit</a>
            <a class="part-a2">Delete</a>
        </div>`
            $.each(value, function (index, item) {
                $(val).eq(index).text(item)
            })
            $(val).eq(0).append(editStr)
            $(".part-a2").click(function () {
                if ($('#news_volunteer .saveChange').length) {
                    return false;
                }
                deleteLog(data, index)
            })
            edit()
        })

    })
}