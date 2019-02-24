var render = function() {
    _pre_render();
    var announcements_template = $('#announcements_template').html();
    Mustache.parse(announcements_template);
    $.each(data.announcements, function() {
        $('#news_announcements').append(Mustache.render(announcements_template, this));
    });
    // var announcements_templateleft = $('#announcements_templateleft').html();
    // Mustache.parse(announcements_templateleft);
    // $.each(data.announcementsleft, function () {
    //     $('#news_announcementsleft').append(Mustache.render(announcements_templateleft, this));
    // });

    var announcements = $('#announcements').html();
    $.each(data.community_announcements, function() {
        $('#announcements_cycle').append(Mustache.render(announcements, this));
    });

    var important_announcement = $('#important_announcement').html();
    $.each(data.important_announcement, function() {
        $('#important_announcement_cycle').append(Mustache.render(important_announcement, this));
    });

    var add = $('#add').html();
    $.each(data.add, function() {
        $('#add_cycle').append(Mustache.render(add, this));
    });

    $('#tabs a').click(function(e) {
        e.preventDefault();
        $('#tabs li').removeClass("current").removeClass("hoverItem");
        $(this).parent().addClass("current");
        $(".choose-right ul").removeClass("show");
        $('.' + $(this).attr('title')).addClass('show');
    });

    $('#tabs a').hover(function() {
        if (!$(this).parent().hasClass("current")) {
            $(this).parent().addClass("hoverItem");
        }
    }, function() {
        $(this).parent().removeClass("hoverItem");
    });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin) {
        $('.choose-right').css('margin-top', '50px')
        $('.announcements_add').css('display', 'block')
        $('.announcements_permission').css('display', 'block')
        $(".del").click(function() {
            delete_element()
        })
    }
}
