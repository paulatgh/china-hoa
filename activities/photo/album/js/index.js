var render = function () {
    _pre_render();

    $("#album").after(function() { return Mustache.render($(this).html(), data); });
    $("#photos").after(function() { return Mustache.render($(this).html(), data); });

    // Global post render
    _post_render();

    // Local post render



    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.address_book_click').css('display', 'block')
    }

    
};