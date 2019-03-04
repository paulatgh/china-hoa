var render = function() {
    _pre_render();
    // $("#breadcrumbs").after(function() {
    //     return Mustache.render($(this).html(), data);
    // });
    var text_add_title = $('#text_add_title').html();
    Mustache.parse(text_add_title);
    $.each(data.text_add_title, function() {
        $('#text_add_title_cycle').append(Mustache.render(text_add_title, this));
    });
    
    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/news/bulletins`;
    })
    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }
    addAuthenticityTokenToForms();

}
