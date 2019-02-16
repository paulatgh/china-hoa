var render = function () {
    var event_template = $('#Resources_list').html();
    Mustache.parse(event_template);
    $.each(data.resources, function () {
        $('#Resources_cycle').append(Mustache.render(event_template, this));
    });

    // admin
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
};