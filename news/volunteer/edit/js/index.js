var render = function() {
    _pre_render();

    var volunteer_add_title = $('#volunteer_add_title').html();
    Mustache.parse(volunteer_add_title);
    // $("#breadcrumbs").after(function() {
    //     return Mustache.render($(this).html(), data);
    // });
    $('#edit-volunteer-body').after(function() { return Mustache.render($(this).html(), data.post) });
    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/news/volunteer`;
    })

    // Global post render
    _post_render();

    // Local post render
    addAuthenticityTokenToForms();
}
