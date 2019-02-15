var render = function () {
    var event_template = $('#event_template').html();
    var event_template2 = $('#event_template2').html();
    var event_template3 = $('#event_template3').html();
    var event_template4 = $('#event_template4').html();
    var event_template5 = $('#event_template5').html();

    Mustache.parse(event_template);
    $.each(data.CupertinoCityResources, function () {
        $('#calendar_events').append(Mustache.render(event_template, this));
    });
    Mustache.parse(event_template2);
    $.each(data.HelpfulAddresses, function () {
        $('#calendar_events2').append(Mustache.render(event_template2, this));
    });
    Mustache.parse(event_template3);
    $.each(data.UrbanResourceInformation, function () {
        $('#calendar_events3').append(Mustache.render(event_template3, this));
    });
    Mustache.parse(event_template4);
    $.each(data.NearbySchools, function () {
        $('#calendar_events4').append(Mustache.render(event_template4, this));
    });
    Mustache.parse(event_template5);
    $.each(data.Utilities, function () {
        $('#calendar_events5').append(Mustache.render(event_template5, this));
    });
    // admin
    var storage = window.localStorage;
    var username = storage.getItem('username')
    $(".btns-language").text(username);

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://tfire.net/dao.html"

    })

};