var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.albums, function () {
        $('#events_photo').append(Mustache.render(event_template, this));
    });

    var photo_title = $('#photo_title').html();
    $.each(data.photo_title, function () {
        $('#photo_title_cycle').append(Mustache.render(photo_title, this));
    });

    var admin_permissions = $('#admin_permissions').html();
    $.each(data.admin_permissions, function () {
        $('#admin_permissions_cycle').append(Mustache.render(admin_permissions, this));
    });



    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.address_book_click').css('display', 'block')
        $(".address_book_right").css("display", "block")
    }
    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);


    $('.logout').click(function () {
        //TODO: log out user
        logOutUser()
    })
    $(".address_book_right").click(function () {
        $(".upload-photos").css("display", "block")
        $(".bg").css("display", "block")
    })
    $(".photos-img").click(function () {
        $(".upload-photos").css("display", "none")
        $(".bg").css("display", "none")
    })
};