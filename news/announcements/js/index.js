var render = function() {
    _pre_render();
    $("#breadcrumbs").after(function() {
        return Mustache.render($(this).html(), data);
    });
    var announcements_template = $('#announcements_template').html();
    Mustache.parse(announcements_template);
    $.each(data.announcements, function() {
        $('#news_announcements').append(Mustache.render(announcements_template, this));
    });

    $('#add').after(function() { return Mustache.render($(this).html(), data); });

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
    $('.announcement-row').click(function() {
        window.location = this.getAttribute('data-link');
    });

    // admin
    if (data._current_user && data._current_user.is_admin) {
        $('.choose-right').css('margin-top', '50px')
        $('.announcements_add').css('display', 'block')
        $('.announcements_permission').css('display', 'block')
        $(".del").click(function() {
            var self = this;
            // TODO these should not be passing null, but it only matters in the dev env
            delete_element(data, null, null, function() {
                submitDynamicForm(self.getAttribute('data-action'), 'POST');
            });
        })
    }
}
