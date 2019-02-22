var render = function() {
    _pre_render();
    var content_template = $('#page').html();
    Mustache.parse(content_template);
    $('#page').after(Mustache.render(content_template, data));

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

    $.getScript(data._metadata.assets_path + '/news/bulletins/page/js/cdn.ckeditor.js', function() {
        //Carousel
        ClassicEditor
            .create(document.querySelector('#editor'))
            .catch(error => {
                console.error(error);
            });
    });

    function CuteEditor_FilterCode(editor, code) {
        return code.replace(/(<\/*)(script)([^\>]*\>)/ig,
            "$1script$3").replace(/(['"][^\n\r']*)([\n\r]+)([^\n\r']*)([\n\r]*)(['"])/ig,
            "$1$3$5");
    }

}
