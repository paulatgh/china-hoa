var render = function() {
    _pre_render()

    $('#header').after(function() { return Mustache.render($(this).html(), data); });
    $('#form').after(function() { return Mustache.render($(this).html(), data); });
   
    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/home`;
    })
    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }
    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);
    $('.logout').click(function() {
        //TODO: log out user
        logOutUser()
    })
    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });
    addAuthenticityTokenToForms();
}
