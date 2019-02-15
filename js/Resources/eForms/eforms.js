var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.eForms, function () {
        $('#calendar_events').append(Mustache.render(event_template, this));
    });

    var event_template2 = $('#event_template2').html();
    Mustache.parse(event_template);
    $.each(data.eFormsEdit, function () {
        $('#calendar_events2').append(Mustache.render(event_template2, this));
    });

    var event_template3 = $('#event_template3').html();
    Mustache.parse(event_template);
    $.each(data.ViewExportSubmittedEforms, function () {
        $('#calendar_events3').append(Mustache.render(event_template3, this));
    });

    // admin
var storage = window.localStorage;
if (storage.getItem('username') === 'admin') {
    $('.buttona').css('display', 'none')
    $(".del").click(function () {
        deleteLog()
    })
    $(".edi").click(function () {
        window.location.href = `http://tfire.net/Resources/eForms/edit.html`
    })
}
var username = storage.getItem('username')
$(".btns-language").text(username);


$('.logout').click(function () {
    window.localStorage.setItem('username', '')
    window.location.href = "http://tfire.net/dao.html"
})

var stronge = window.localStorage;
    if (stronge.getItem('username') === 'admin') {
        $('.form_content_right').css('display', 'block');
        $(".form_title_right").css("display", "block");
    }
};










