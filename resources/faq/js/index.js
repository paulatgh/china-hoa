var render = function () {
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });
    var event_template = $('#FAQcontent').html();
    Mustache.parse(event_template);
    $.each(data.FrequentlyAskedQuestions, function () {
        $('#FAQcontent_cycle').append(Mustache.render(event_template, this));
    });

    var event_template = $('#FAQtitle').html();
    $.each(data.FAQtitle, function () {
        $('#FAQtitle_cycle').append(Mustache.render(event_template, this));
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
        window.location.href = "http://127.0.0.1:8080/home/"
    })
};