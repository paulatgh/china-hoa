var render = function() {
    _pre_render();
    $("#breadcrumbs").after(function() {
        return Mustache.render($(this).html(), data);
    });
    $('#edit-reservation-body').after(function() { return Mustache.render($(this).html(), data.event) });
    $('#edit-reservation-form')[0].setAttribute(
        'action',
        `${data._metadata.root_url}/activities/reservations/respond?id=${data.event.id}`
    );

    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/activities/calendar`;
    })

    // Global post render
    _post_render();

    // Local post render

    addAuthenticityTokenToForms();
}
