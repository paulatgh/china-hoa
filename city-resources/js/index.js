var render = function() {
    _pre_render();
    var city_resources_content = $('#city_resources_content').html();
    var helpful_addresses_title = $('#helpful_addresses_title').html();
    var about_link_content = $('#about_link_content').html();
    var school_addresses_title = $('#school_addresses_title').html();
    var Utilities_title = $('#Utilities_title').html();

    Mustache.parse(city_resources_content);
    $.each(data.cupertino_city_resources, function() {
        $('#city_resources').append(Mustache.render(city_resources_content, this));
    });
    Mustache.parse(helpful_addresses_title);
    $.each(data.helpful_addresses, function() {
        $('#helpful_addresses').append(Mustache.render(helpful_addresses_title, this));
    });
    Mustache.parse(about_link_content);
    $.each(data.urban_resource_information, function() {
        $('#about_link').append(Mustache.render(about_link_content, this));
    });
    Mustache.parse(school_addresses_title);
    $.each(data.nearby_schools, function() {
        $('#school_addresses').append(Mustache.render(school_addresses_title, this));
    });
    Mustache.parse(Utilities_title);
    $.each(data.utilities, function() {
        $('#Utilities').append(Mustache.render(Utilities_title, this));
    });
    var article_title = $('#article_title').html();
    $.each(data.article_title, function() {
        $('#article_title_cycle').append(Mustache.render(article_title, this));
    });

    // Global post render
    _post_render();

    // Local post render

};
