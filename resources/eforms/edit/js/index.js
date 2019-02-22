var render = function() {
    _pre_render();
    var content_template = $('#edit_eforms').html();
    Mustache.parse(content_template);
    $('#edit_eforms').after(Mustache.render(content_template, data));

    // Global post render
    _post_render();

    // Local post render
    $.getScript(data._metadata.assets_path + '/news/volunteer/add/js/cdn.ckeditor.js', function() {
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
