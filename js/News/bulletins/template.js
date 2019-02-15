var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.template, function () {
        $('#calendar_events').append(Mustache.render(event_template, this));
    });
    var stronge = window.localStorage;
    if (stronge.getItem('username') === 'admin') {
        $('.form_content_right').css('display', 'block');
        $(".form_title_right").css("display", "block");
    }
    // admin
var storage = window.localStorage;

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
var username = storage.getItem('username')
$(".btns-language").text(username);

$('.logout').click(function () {
    window.localStorage.setItem('username', '')
    window.location.href = "http://tfire.net/dao.html"
})

};






