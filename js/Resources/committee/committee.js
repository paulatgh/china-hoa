var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.ManagementList, function () {
        $('#events_photo').append(Mustache.render(event_template, this));
    });
    var event_template2 = $('#event_template2').html();
    Mustache.parse(event_template2);
    $.each(data.ManagementList2, function () {
        $('#events_photo2').append(Mustache.render(event_template2, this));
    });
    var event_template3 = $('#event_template3').html();
    Mustache.parse(event_template3);
    $.each(data.ManagementList3, function () {
        $('#events_photo3').append(Mustache.render(event_template3, this));
    });
};



$(function () {
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

    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === 'admin') {
        $('.choose-right').css('margin-top', '50px')
        $('.committee_add').css('display', 'block')
        $('.admin-control').css('display', 'block')
        $('.committee_add').click(function () {
            var data = 'Board/Committee';
            window.location.href = `http://tfire.net/Resources/committee/add.html?${data}`
        })
        $(".del").click(function () {
            deleteLog()
        })
    }

    var username = storage.getItem('username')
    $(".btns-language").text(username);

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://tfire.net/index.html"

    })
});