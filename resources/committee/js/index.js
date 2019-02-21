var render = function () {
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });
    var committeeList = $('#committeeList').html();
    Mustache.parse(committeeList);
    $.each(data.ManagementList, function () {
        $('#committeeExternal').append(Mustache.render(committeeList, this));
    });
    var committeeListsecond = $('#committeeListsecond').html();
    Mustache.parse(committeeListsecond);
    $.each(data.ManagementList2, function () {
        $('#committeeListsecondExternal').append(Mustache.render(committeeListsecond, this));
    });
    var committeeListThird = $('#committeeListThird').html();
    Mustache.parse(committeeListThird);
    $.each(data.ManagementList3, function () {
        $('#committeeExternalExternal').append(Mustache.render(committeeListThird, this));
    });

    var TheTitle = $('#TheTitle').html();
    Mustache.parse(TheTitle);
    $.each(data.TheTitle, function () {
        $('#TheTitleExternal').append(Mustache.render(TheTitle, this));
    });

    var Addbutton = $('#Addbutton').html();
    Mustache.parse(Addbutton);
    $.each(data.Addbutton, function () {
        $('#AddbuttonExternal').append(Mustache.render(Addbutton, this));
    });


        // Global post render
        _post_render();

        // Local post render



    $('#tabs a').click(function (e) {
        e.preventDefault();
        $('#tabs li').removeClass("current").removeClass("hoverItem");
        $(this).parent().addClass("current");
        $(".choose-right ul").removeClass("show");
        $('#' + $(this).attr('title')).addClass('show');
    });

    $('#tabs a').hover(function () {
        if (!$(this).parent().hasClass("current")) {
            $(this).parent().addClass("hoverItem");
        }
    }, function () {
        $(this).parent().removeClass("hoverItem");
    });



    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.choose-right').css('margin-top', '50px')
        $('.committee_add').css('display', 'block')
        $('.admin-control').css('display', 'block')
        $('.committee_add').click(function () {
            var data = 'Board/Committee';
            window.location.href = `http://127.0.0.1:8080/resources/committee/add/`
        })
        $(".del").click(function () {
            deleteLog()
        })
    }

    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);

    $('.logout').click(function () {
        //TODO: log out user

    })
};