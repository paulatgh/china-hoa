var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.add, function () {
        $('#events_photo').append(Mustache.render(event_template, this));
    });
};


$(function () {
    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === 'admin') {
        $('.buttona').css('display', 'none')
    }
    var query = window.location.search.substring(1);
    if (query === "Board/Committee") {
        $('.add_volunteer_title').text(query)
        var str = `<li><a href="../../dao.html" rel="noopener noreferrer">Home</a></li>
        <li>&nbsp;>&nbsp;</li>
        <li><a href="../../resources.html" rel="noopener noreferrer"> Resources </a></li>
        <li>&nbsp;>&nbsp;</li>
        <li><a href="../../committee.html" rel="noopener noreferrer">${query}</a></li>  `
        $('.breadcrumb').append(str)
    } else {
        $('.add_volunteer_title').text('Volunteer Needs')
        var str = `<li><a href="../../dao.html" rel="noopener noreferrer">Home</a></li>
        <li>&nbsp;>&nbsp;</li>
        <li><a href="../../news.html" rel="noopener noreferrer"> News </a></li>
        <li>&nbsp;>&nbsp;</li>
        <li><a href="#" rel="noopener noreferrer">Volunteer Needs</a></li>  `
        $('.breadcrumb').append(str)
    }
    var username = storage.getItem('username')
    $(".btns-language").text(username);

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://tfire.net/dao.html"
    })
})