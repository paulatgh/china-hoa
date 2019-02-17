var render = function () {
    var CommitteeAdd = $('#CommitteeAdd').html();
    Mustache.parse(CommitteeAdd);
    $('#CommitteeAdd').after(Mustache.render(CommitteeAdd, data.TheTitle[0]));
    


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