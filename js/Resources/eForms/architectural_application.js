var render = function () {
    var content_template = $('#ArchitecturalApplication').html();
    Mustache.parse(content_template);
    $('#ArchitecturalApplication').after(Mustache.render(content_template, data));


    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === 'admin') {
        $('.choose-right').css('margin-top', '50px')
        $('.announcements_add').css('display', 'block')
        $('.announcements_permission').css('display', 'block')
    }

    var username = storage.getItem('username')
    $(".btns-language").text(username);


    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://tfire.net/index.html"

    })
};