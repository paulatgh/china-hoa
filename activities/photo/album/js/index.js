var render = function () {
    _pre_render();

    $("#album").after(function() { return Mustache.render($(this).html(), data); });
    $("#photos").after(function() { return Mustache.render($(this).html(), data); });
    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });
    $('#upload_photo_links').after(function() { return Mustache.render($(this).html(), data); });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.admin_option_left').css('display', 'block')
        $(".admin_option_right").css("display", "block")
    }

    $(".admin_option_right").click(function () {
        $(".upload-photos").css("display", "block")
        $(".bg").css("display", "block")
    })
    $(".photos-img").click(function () {
        $(".upload-photos").css("display", "none")
        $(".bg").css("display", "none")
    })
};