var render = function () {
    var content_template = $('#notice').html();
    Mustache.parse(content_template);
    $('#notice').after(Mustache.render(content_template, data));

    // admin
    var storage = window.localStorage;
    var username = storage.getItem('username')
    $(".btns-language").text(username);

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://tfire.net/index.html"
    })

    var username = storage.getItem('username')
    $(".btns-language").text(username);
}