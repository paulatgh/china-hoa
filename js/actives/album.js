var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.album, function () {
        $('#events_photo').append(Mustache.render(event_template, this));
    });
    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === 'admin') {
        $('.address_book_click').css('display', 'block')
    }

    var username = storage.getItem('username')
    $(".btns-language").text(username);

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://tfire.net/dao.html"
    })
};
