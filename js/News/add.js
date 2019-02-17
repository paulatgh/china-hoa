var render = function () {
    var content_template = $('#add').html();
    Mustache.parse(content_template);
    $('#add').after(Mustache.render(content_template, data));

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

    // var query = window.location.search.substring(1);
    // if (query === "Board/Committee") {
    //     $('.add_volunteer_title').text(query)
    //     var str = `<li><a href="index.html" rel="noopener noreferrer">Home</a></li>
    //     <li>&nbsp;>&nbsp;</li>
    //     <li><a href="resources.html" rel="noopener noreferrer"> Resources </a></li>
    //     <li>&nbsp;>&nbsp;</li>
    //     <li><a href="committee.html" rel="noopener noreferrer">${query}</a></li>  `
    //     $('.breadcrumb').append(str)
    // } else {
    //     $('.add_volunteer_title').text('Volunteer Needs')
    //     var str = `<li><a href="../../dao.html" rel="noopener noreferrer">Home</a></li>
    //     <li>&nbsp;>&nbsp;</li>
    //     <li><a href="../../News/news.html" rel="noopener noreferrer"> News </a></li>
    //     <li>&nbsp;>&nbsp;</li>
    //     <li><a href="../../News/volunteer/volunteer.html" rel="noopener noreferrer">Volunteer Needs</a></li>  `
    //     $('.breadcrumb').append(str)
    // }
    var username = storage.getItem('username')
    $(".btns-language").text(username);

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://tfire.net/index.html"

    })
}