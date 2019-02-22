var render = function () {
    _pre_render();
  

    var page_title = $('#page_title').html();
    $.each(data.page_title, function () {
        $('#page_title_cycle').append(Mustache.render(page_title, this));
    });

    var community = $('#community').html();
    $.each(data.community, function () {
        $('#community_cycle').append(Mustache.render(community, this));
    });

    var olympic_games = $('#olympic_games').html();
    $.each(data.olympic_games, function () {
        $('#olympic_games_cycle').append(Mustache.render(olympic_games, this));
    });

    var Clubhouse = $('#club_house').html();
    $.each(data.club_house, function () {
        $('#club_house_cycle').append(Mustache.render(Clubhouse, this));
    });

    var Children = $('#Children').html();
    $.each(data.children, function () {
        $('#children_cycle').append(Mustache.render(Children, this));
    });

    var GreenFields = $('#green_fields').html();
    $.each(data.green_fields, function () {
        $('#green_fields_cycle').append(Mustache.render(GreenFields, this));
    });

    // Global post render
    _post_render();

    // Local post render
    if (data._current_user && data._current_user.is_admin == true) {
        $('.choose-right').css('margin-top', '50px')
        $('.announcements_add').css('display', 'block')
        $('.announcements_permission').css('display', 'block')
    }

   
};