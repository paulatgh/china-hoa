var render = function() {
    _pre_render();
    $("#breadcrumbs").after(function() {
        return Mustache.render($(this).html(), data);
    });
    $('#image_template').after(function() { return Mustache.render($(this).html(), data.amenity) });
    $('#location_template').after(function() { return Mustache.render($(this).html(), data.amenity) });
    $('#rules_template').after(function() { return Mustache.render($(this).html(), data.amenity) });

    data.amenity.boolean_fields = data.amenity.reservation_fields.filter(function(field) { return field.data_type === 'boolean' });
    data.amenity.text_fields = data.amenity.reservation_fields.filter(function(field) { return field.data_type === 'string' });

    $('#reservation_fields_template').after(function() { return Mustache.render($(this).html(), data.amenity) });
    $('#add-reservation-form').attr('action', `${data._metadata.root_url}${data._metadata.page_path}`);

    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/home`;
    })

    // Global post render
    _post_render();

    // Local post render

    addAuthenticityTokenToForms();
}
