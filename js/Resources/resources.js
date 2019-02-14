var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.resources, function () {
        $('#calendar_events').append(Mustache.render(event_template, this));
    });
};



// admin管理员用户权限
var storage = window.localStorage;
if (storage.getItem('username') === 'admin') {
    $('.buttona').css('display', 'none')
}
var username = storage.getItem('username')
$(".btns-language").text(username);


$('.logout').click(function () {
    window.localStorage.setItem('username', '')
    window.location.href = "http://tfire.net/index.html"
})