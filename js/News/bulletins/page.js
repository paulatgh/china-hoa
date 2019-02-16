var render = function () {
    var content_template = $('#page').html();
    Mustache.parse(content_template);
    $('#page').after(Mustache.render(content_template, data));

    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === 'admin') {
        $('.buttona').css('display', 'none')
    }

    ClassicEditor
        .create(document.querySelector('#editor'))
        .catch(error => {
            console.error(error);
        });
      
        function CuteEditor_FilterCode(editor, code) {
        return code.replace(/(<\/*)(script)([^\>]*\>)/ig,
            "$1script$3").replace(/(['"][^\n\r']*)([\n\r]+)([^\n\r']*)([\n\r]*)(['"])/ig,
                "$1$3$5");
    }

    
    var username = storage.getItem('username')
    $(".btns-language").text(username);

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://tfire.net/index.html"

    })
}