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

    var user_list_section_template = $('#user-list-section-template').html();
    $.each(data.names_by_letter, function() {
        $('#user_list').append(Mustache.render(user_list_section_template, this));
    });

    Mustache.parse(AccordingToTheStreet);
    $.each(data.AccordingToTheStreet, function () {
        $('#AccordingToTheStreet_cycle').append(Mustache.render(AccordingToTheStreet, this));
    });

    var alphabet = $('#alphabet').html();
    $.each(data.letter_anchors, function () {
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

    var category = $('#category').html();
    $.each(data.AddressBookCategories, function () {
        $('#address').append(Mustache.render(category, this));
    });
    var first = $('#first').html();
    $.each(data.lettersorderone, function () {
        $('#group_one').append(Mustache.render(first, this));
    });
    var second = $('#second').html();
    $.each(data.lettersordertwo, function () {
        $('#group_two').append(Mustache.render(second, this));
    });
    var third = $('#third').html();
    $.each(data.lettersorderthree, function () {
        $('#group_three').append(Mustache.render(third, this));
    });
    var nostreetname_one = $('#nostreetname_one').html();
    $.each(data.nostreetnamelist, function () {
        $('#nostreetname').append(Mustache.render(nostreetname_one, this));
    });
    var camberleylane_one = $('#camberleylane_one').html();
    $.each(data.camberleylanelist, function () {
        $('#camberleylane').append(Mustache.render(camberleylane_one, this));
    });
    var crickethillroad_one = $('#crickethillroad_one').html();
    $.each(data.crickethillroadlist, function () {
        $('#crickethillroad').append(Mustache.render(crickethillroad_one, this));
    });
    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.choose-right').css('margin-top', '50px')
        $('.announcements_add').css('display', 'block')
        $('.announcements_permission').css('display', 'block')
    }

    $('.logout').click(function () {
        //TODO: log out user
        logOutUser()
    })

    var username = data._current_user && data._current_user.display_name
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
