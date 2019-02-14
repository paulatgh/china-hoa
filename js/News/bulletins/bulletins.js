var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.bulletins, function () {
        $('#calendar_events').append(Mustache.render(event_template, this));
    });

};
// admin
var storage = window.localStorage;
var username = storage.getItem('username')
$(".btns-language").text(username);
if (username === 'admin') {
    $('.address_book_click').css('display', 'block')
    $('.photo-albums').css('display', 'block')
}

$('.logout').click(function () {
    window.localStorage.setItem('username', '')
    window.location.href = "http://tfire.net/index.html";


})

var username = storage.getItem('username')
$(".btns-language").text(username);