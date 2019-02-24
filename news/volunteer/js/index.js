var render = function () {
    _pre_render();

    $('#volunteer_title').after(function() { return Mustache.render($(this).html(), data.volunteer_title); });
    $('#volunteer_tiles').after(function() { return Mustache.render($(this).html(), data); });
  
    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin) {
        $('.top-Add').show();
        $('.volunteer_admin_options').show();
        $('.part .part-a2').click(function () {
            delete_element()
        })
    }
 

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
                delete_element(data, index)
            })
            edit()
        })

    })
}