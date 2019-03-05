var render = function() {
    _pre_render();

    $("#breadcrumbs").after(function() {
        return Mustache.render($(this).html(), data);
    });
    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/news/volunteer`;
    })
    
    var the_title = $('#the_title').html();
    $.each(data.the_title, function() {
        $('#the_title_cycle').append(Mustache.render(the_title, this));
    });

    var information = $('#information').html();
    $.each(data.information, function() {
        $('#information_cycle').append(Mustache.render(information, this));
    });

    var character_information = $('#character_information').html();
    $.each(data.character_information, function() {
        $('#character_information_cycle').append(Mustache.render(character_information, this));
    });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }
    addAuthenticityTokenToForms();
}
