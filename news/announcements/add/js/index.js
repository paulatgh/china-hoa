var render = function() {
    // var content_template = $('#add').html();
    // Mustache.parse(content_template);
    // $('#add').after(Mustache.render(content_template, data));

    _pre_render();

    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
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

}
