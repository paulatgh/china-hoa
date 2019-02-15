var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.HomeownersAssociation, function () {
        $('#calendar_events').append(Mustache.render(event_template, this));
    });

    var event_template2 = $('#event_template2').html();
    Mustache.parse(event_template2);
    $.each(data.HomeownersAssociation2, function () {
        $('#calendar_events2').append(Mustache.render(event_template2, this));
    });

    // admin
var storage = window.localStorage;
if (storage.getItem('username') === 'admin') {
    $('.announcements_add').css('display', 'block')
    $('.announcements_permission').css('display', 'block')
}

var username = storage.getItem('username')
$(".btns-language").text(username);

$('.logout').click(function () {
    window.localStorage.setItem('username', '')
    window.location.href = "http://tfire.net/index.html"
})

$('#tabs a').click(function (e) {
    e.preventDefault();
    $('#tabs li').removeClass("current").removeClass("hoverItem");
    $(this).parent().addClass("current");
    $(".choose-right ul").removeClass("show");
    $('#' + $(this).attr('title')).addClass('show');
});

$('#tabs a').hover(function () {
    if (!$(this).parent().hasClass("current")) {
        $(this).parent().addClass("hoverItem");
    }
}, function () {
    $(this).parent().removeClass("hoverItem");
});
};





