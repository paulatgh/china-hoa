var render = function () {
    var news_template = $('#news_template').html();
    Mustache.parse(news_template);
    $.each(data.news, function () {
        $('#news_list').append(Mustache.render(news_template, this));
    });
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });

    // Global post render
    _post_render();

    // Local post render

    // admin管理员用户权限
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);


    $('.logout').click(function () {
        //TODO: log out user
    })
}