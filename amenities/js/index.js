var render = function () {
    _pre_render();
  

    var PageTitle = $('#PageTitle').html();
    $.each(data.pageTitle, function () {
        $('#PageTitle_cycle').append(Mustache.render(PageTitle, this));
    });

    var Community = $('#Community').html();
    $.each(data.community, function () {
        $('#Community_cycle').append(Mustache.render(Community, this));
    });

    var OlympicGames = $('#OlympicGames').html();
    $.each(data.olympicGames, function () {
        $('#OlympicGames_cycle').append(Mustache.render(OlympicGames, this));
    });

    var Clubhouse = $('#Clubhouse').html();
    $.each(data.clubhouse, function () {
        $('#Clubhouse_cycle').append(Mustache.render(Clubhouse, this));
    });

    var Children = $('#Children').html();
    $.each(data.children, function () {
        $('#Children_cycle').append(Mustache.render(Children, this));
    });

    var GreenFields = $('#GreenFields').html();
    $.each(data.greenFields, function () {
        $('#GreenFields_cycle').append(Mustache.render(GreenFields, this));
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