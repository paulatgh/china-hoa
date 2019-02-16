var render = function () {
    var bulletins_template = $('#bulletins_template').html();
    Mustache.parse(bulletins_template);
    $.each(data.bulletins, function () {
        $('#news_bulletins').append(Mustache.render(bulletins_template, this));
    });
    // admin
    var storage = window.localStorage;
    var username = storage.getItem('username')
    $(".btns-language").text(username);
    if (username === 'admin') {
        $('.address_book_click').css('display', 'block')
        $('.photo-albums').css('display', 'block')
    }

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://tfire.net/index.html";


    })

    var username = storage.getItem('username')
    $(".btns-language").text(username);
};