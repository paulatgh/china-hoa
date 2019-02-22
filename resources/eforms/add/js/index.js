var render = function() {
    _pre_render()

    var form = $('#form').html();
    $('#form').after(Mustache.render(form, data));

    // Global post render
    _post_render();

    // Local post render

    $.getScript(data._metadata.assets_path + '/news/volunteer/add/js/cdn.ckeditor.js', function () {
        //Carousel
        ClassicEditor
            .create(document.querySelector('#editor'))
            .catch(error => {
                console.error(error);
            });
        ClassicEditor
            .create(document.querySelector('#editor1'))
            .catch(error => {
                console.error(error);
            });
    });

    function CuteEditor_FilterCode(editor, code) {
        return code.replace(/(<\/*)(script)([^\>]*\>)/ig,
            "$1script$3").replace(/(['"][^\n\r']*)([\n\r]+)([^\n\r']*)([\n\r]*)(['"])/ig,
            "$1$3$5");
    }

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

};
