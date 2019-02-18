var render = function () {
    var announcements_template = $('#announcements_template').html();
    Mustache.parse(announcements_template);
    $.each(data.announcements, function () {
        $('#news_announcements').append(Mustache.render(announcements_template, this));
    });
    // var announcements_templateleft = $('#announcements_templateleft').html();
    // Mustache.parse(announcements_templateleft);
    // $.each(data.announcementsleft, function () {
    //     $('#news_announcementsleft').append(Mustache.render(announcements_templateleft, this));
    // });
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });

    $('#tabs a').click(function (e) {
        e.preventDefault();
        $('#tabs li').removeClass("current").removeClass("hoverItem");
        $(this).parent().addClass("current");
        $(".choose-right ul").removeClass("show");
        $('.' + $(this).attr('title')).addClass('show');
    });

    $('#tabs a').hover(function () {
        if (!$(this).parent().hasClass("current")) {
            $(this).parent().addClass("hoverItem");
        }
    }, function () {
        $(this).parent().removeClass("hoverItem");
    });

    // Global post render
    _post_render();

    // Local post render

    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === 'admin') {
        $('.choose-right').css('margin-top', '50px')
        $('.announcements_add').css('display', 'block')
        $('.announcements_permission').css('display', 'block')
        $(".del").click(function () {
            deleteLog()
        })
    }


    var username = storage.getItem('username')
    $(".btns-language").text(username);


    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://127.0.0.1:8080/home";

    })

    var username = storage.getItem('username')
    $(".btns-language").text(username);
}