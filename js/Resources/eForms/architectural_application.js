var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data, function () {
        $('#calendar_events').append(Mustache.render(event_template, this));
    });

    // admin
var storage = window.localStorage;
if (storage.getItem('username') === 'admin') {
    $('.choose-right').css('margin-top', '50px')
    $('.announcements_add').css('display', 'block')
    $('.announcements_permission').css('display', 'block')
}

var username = storage.getItem('username')
$(".btns-language").text(username);


$('.logout').click(function () {
    window.localStorage.setItem('username', '')
    window.location.href = "http://tfire.net/dao.html"

})
};



