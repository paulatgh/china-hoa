var render = function () {
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });
    var username = $('#username').html();
    var event_template = $('#username-A').html();
    var username2 = $('#username2').html();
    var username2 = $('#username2-B').html();
    var username3 = $('#username3').html();
    var username3 = $('#username3-C').html();
    var AccordingToTheStreet = $('#AccordingToTheStreet').html();
    var userInformation = $('#userInformation').html();


    Mustache.parse(event_template);
    var a = []
    $.each(data.user, function (index, item) {
        a = item.username.filter((val) => val.name.substr(0, 1) === 'A' || val.name.substr(0, 1) === 'a')
    });
    var b = []
    $.each(data.user, function (index, item) {
        b = item.username.filter((val) => val.name.substr(0, 1) === 'B' || val.name.substr(0, 1) === 'b')
    });
    var c = []
    $.each(data.user, function (index, item) {
        c = item.username.filter((val) => val.name.substr(0, 1) === 'C' || val.name.substr(0, 1) === 'c')
    });


    $.each(a, function () {
        $('#events_photo,#username-A_cycle').append(Mustache.render(username, this));
    })
    $.each(b, function () {
        $('#events_photo2,#events_photo2-B').append(Mustache.render(username2, this));
    })
    $.each(c, function () {
        $('#events_photo3,#events_photo3-C').append(Mustache.render(username3, this));
    })

    Mustache.parse(AccordingToTheStreet);
    $.each(data.AccordingToTheStreet, function () {
        $('#AccordingToTheStreet_cycle').append(Mustache.render(AccordingToTheStreet, this));
    });

    var alphabet = $('#alphabet').html();
    $.each(data.alphabet, function () {
        $('#alphabet_cycle').append(Mustache.render(alphabet, this));
    });

    var PageInformation = $('#PageInformation').html();
    $.each(data.PageInformation, function () {
        $('#PageInformation_cycle').append(Mustache.render(PageInformation, this));
    });

    var FuctionButton = $('#FuctionButton').html();
    $.each(data.FuctionButton, function () {
        $('#FuctionButton_cycle').append(Mustache.render(FuctionButton, this));
    });

    var userInformation = $('#userInformation').html();
    $.each(data.UserInformation, function () {
        $('#userInformation_cycle').append(Mustache.render(userInformation, this));
    });


    // Global post render
    _post_render();

    // Local post render


  
    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === data._current_user.display_name && data._current_user.is_admin == true) {
        $('.choose-right').css('margin-top', '50px')
        $('.announcements_add').css('display', 'block')
        $('.announcements_permission').css('display', 'block')
    }

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://127.0.0.1:8080/home/"

    })

    var username = storage.getItem('username')
    $(".btns-language").text(username);

    var show = true;
    $('.address_book_click').click(function () {
        if (show) {
            $(this).text('Click here to list from A to Z')
            $('.address_book_letter').css('display', 'none')
            $('.a_z').css('display', 'block')
            $(".a_a").css("display", "none")
            show = false;

        } else {
            $(this).text('Click here to list by Street Name')
            $('.address_book_letter').css('display', 'block')
            $('.a_z').css('display', 'none')
            $(".a_a").css("display", "block")
            show = true;
        }
    })

    $('.user_desc, .a_z .user_desc').click(function () {
        $(".db").css("display", "block")
        $('.close').click(function () {
            $('.db').css("display", "none")
        })
    })
};