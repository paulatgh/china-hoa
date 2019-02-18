var render = function () {
    var event_template = $('#add').html();
    Mustache.parse(event_template);
    $('#add').after(Mustache.render(event_template, data));

    // Global post render
    _post_render();

    // Local post render


    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === 'admin') {
        $('.buttona').css('display', 'none')
    }
    var username = storage.getItem('username')
    $(".btns-language").text(username);


    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://127.0.0.1:8080/home/"
    })
};