var render = function () {
    _pre_render();
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.events, function () {
        $('#calendar_events').append(Mustache.render(event_template, this));
    });
    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }
    $(".details").click(function(e){
        var eventType = $(e.currentTarget).data('event-type');
        if (eventType == 'event') {
            var id = $(e.currentTarget).data('id');
            window.location = `${data._metadata.root_url}/activities/calendar/list/details?event_id=${id}`;
        }
    })
};
