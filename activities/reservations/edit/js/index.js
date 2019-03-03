var render = function() {
    _pre_render();
    $("#breadcrumbs").after(function() {
        return Mustache.render($(this).html(), data);
    });
    $('#image_template').after(function() { return Mustache.render($(this).html(), data.amenity) });
    $('#edit-reservation-body').after(function() { return Mustache.render($(this).html(), data) });
    $('#reservation_fields_template').after(function() { return Mustache.render($(this).html(), data.event) });

    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/activities/calendar`;
    })

    fillTimes(data.event.starts_at, 'start');
    fillTimes(data.event.ends_at, 'end');

    // Global post render
    _post_render();

    // Local post render

    addAuthenticityTokenToForms();
}

var fillTimes = function(rawTime, prefix) {
    if (rawTime) {
        components = parseDateTimeComponents(rawTime);
        $(`input[name=${prefix}_date]`)[0].setAttribute('value', components['date']);
        $(`select[name=${prefix}_time_hour] option[value=${components['hour']}]`)[0].setAttribute('selected', true);
        $(`select[name=${prefix}_time_minute] option[value=${components['minute']}]`)[0].setAttribute('selected', true);
        $(`select[name=${prefix}_time_period] option[value=${components['period']}]`)[0].setAttribute('selected', true);
    }
}
