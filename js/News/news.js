var render = function () {
    var news_template = $('#news_template').html();
    Mustache.parse(news_template);
    $.each(data.news, function () {
        $('#news_list').append(Mustache.render(news_template, this));
    });
    // admin管理员用户权限
    var storage = window.localStorage;
    if (storage.getItem('username') === 'admin') {
        $('.buttona').css('display', 'none')
    }

    var username = storage.getItem('username')
    $(".btns-language").text(username);


    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://tfire.net/index.html"
    })
}