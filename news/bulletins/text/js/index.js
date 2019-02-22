var render = function () {
    var content_template = $('#text').html();
    Mustache.parse(content_template);
    $('#text').after(Mustache.render(content_template, data));

    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }

    $.getScript(data._metadata.assets_path + '/news/bulletins/text/js/cdn.ckeditor.js', function () {
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



    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);

    $('.logout').click(function () {
        //TODO: log out user
        logOutUser()
    })
}