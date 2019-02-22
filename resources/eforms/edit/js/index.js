var render = function () {
    _pre_render();
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
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }


};