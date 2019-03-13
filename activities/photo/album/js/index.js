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
    $(".delete-button").click(function (e) {
        var id = $(e.target).data("id");
        submitDynamicForm(
          data._metadata.root_url + data._metadata.page_path + '/delete',
          'POST',
          [{
              name: 'photo_id',
              value: id
          }, {
              name: 'album_id',
              value: data.album.id
          }]
        );
    })
};