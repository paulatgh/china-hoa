var render = function () {
    var content_template = $('#saveFile').html();
    Mustache.parse(content_template);
    $('#saveFile').after(Mustache.render(content_template, data));
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });


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
        window.location.href = "http://tfire.net/dao.html"

    })
}