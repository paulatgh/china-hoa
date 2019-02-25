var render = function () {
    _pre_render();
    // var event_template = $('#event_template').html();
    // Mustache.parse(event_template);
    // $.each(data.albums, function () {
    //     $('#events_photo').append(Mustache.render(event_template, this));
    // });
    $('#photo_albums').after(function() { return Mustache.render($(this).html(), data); });
    $('#upload_photo_album_selector').after(function() { return Mustache.render($(this).html(), data); });
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