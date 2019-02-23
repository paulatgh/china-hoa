var render = function() {
    _pre_render()

    var committeeList = $('#committeeList').html();
    Mustache.parse(committeeList);
    $.each(data.management_list, function() {
        $('#committeeExternal').append(Mustache.render(committeeList, this));
    });
    var committeeListsecond = $('#committeeListsecond').html();
    Mustache.parse(committeeListsecond);
    $.each(data.management_list_two, function() {
        $('#committeeListsecondExternal').append(Mustache.render(committeeListsecond, this));
    });
    var committeeListThird = $('#committeeListThird').html();
    Mustache.parse(committeeListThird);
    $.each(data.management_list_three, function() {
        $('#committeeExternalExternal').append(Mustache.render(committeeListThird, this));
    });

    var the_title = $('#the_title').html();
    Mustache.parse(the_title);
    $.each(data.the_title, function() {
        $('#TheTitleExternal').append(Mustache.render(the_title, this));
    });

    var Addbutton = $('#Addbutton').html();
    Mustache.parse(Addbutton);
    $.each(data.add_button, function() {
        $('#AddbuttonExternal').append(Mustache.render(Addbutton, this));
    });

    // Global post render
    _post_render();

    // Local post render

    $('#tabs a').click(function(e) {
        e.preventDefault();
        $('#tabs li').removeClass("current").removeClass("hoverItem");
        $(this).parent().addClass("current");
        $(".choose-right ul").removeClass("show");
        $('#' + $(this).attr('title')).addClass('show');
    });

    $('#tabs a').hover(function() {
        if (!$(this).parent().hasClass("current")) {
            $(this).parent().addClass("hoverItem");
        }
    }, function() {
        $(this).parent().removeClass("hoverItem");
    });

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.choose-right').css('margin-top', '50px')
        $('.committee_add').css('display', 'block')
        $('.admin-control').css('display', 'block')
        $('.committee_add').click(function() {
            var data = 'Board/Committee';
            window.location.href = `${data._metadata.root_url}/resources/committee/add/`
        })
        $(".del").click(function() {
            deleteLog()
        })
    }

};
