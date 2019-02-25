var render = function() {
    _pre_render()

    // var CommitteeAdd = $('#CommitteeAdd').html();
    // Mustache.parse(CommitteeAdd);
    // $('#CommitteeAdd').after(Mustache.render(CommitteeAdd, data.the_title[0]));

    var form = $('#form').html();
    $('#form').after(Mustache.render(form, data));

    // Global post render
    _post_render();

    // Local post render

   

    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }
};
