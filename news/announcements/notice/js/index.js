var render = function() {
    _pre_render();
    // $("#breadcrumbs").after(function() {
    //     return Mustache.render($(this).html(), data);
    // });
    var article = $('#article').html();
    $.each(data.article, function() {
        $('#article_cycle').append(Mustache.render(article, this));
    });
    // Global post render
    _post_render();

    // Local post render
}
