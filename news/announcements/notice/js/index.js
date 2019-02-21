var render = function () {
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });

    var img = $('#img').html();
    $.each(data.img, function () {
        $('#img_cycle').append(Mustache.render(img, this));
    });


    var article = $('#article').html();
    $.each(data.article, function () {
        $('#article_cycle').append(Mustache.render(article, this));
    });

    // Global post render
    _post_render();

    // Local post render
    // admin
    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);

    $('.logout').click(function () {
        //TODO: log out user
        logOutUser()
    })

    $(".btns-language").text(username);
}