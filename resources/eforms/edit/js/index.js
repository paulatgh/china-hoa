var render = function () {
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });
    var content_template = $('#editEforms').html();
    Mustache.parse(content_template);
    $('#editEforms').after(Mustache.render(content_template, data));

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