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



    var storage = window.localStorage;
    if (storage.getItem('username') === data._current_user.display_name && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }
    var username = storage.getItem('username')
    $(".btns-language").text(username);

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://127.0.0.1:8080/home/"
    })
};