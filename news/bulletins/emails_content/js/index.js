var render = function () {
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });
    var CommitteeAdd = $('#CommitteeAdd').html();
    Mustache.parse(CommitteeAdd);
    $('#CommitteeAdd').after(Mustache.render(CommitteeAdd, data.TheTitle[0]));

    var form = $('#form').html();
    $('#form').after(Mustache.render(form, data));



    // Global post render
    _post_render();

    // Local post render
    
    $.getScript('js/cdn.ckeditor.js', function () {
        //Carousel
        ClassicEditor
            .create(document.querySelector('#editor'))
            .catch(error => {
                console.error(error);
            });
    });



    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }
    $(".btns-language").text(data._current_user && data._current_user.display_name);

    $('.logout').click(function () {
        //TODO: log out user
        logOutUser()
    })
};