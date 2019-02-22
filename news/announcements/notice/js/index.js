var render = function () {
    _pre_render();
    var img = $('#img').html();
    $.each(data.img, function () {
        $('#img_cycle').append(Mustache.render(img, this));
    });


    var article = $('#article').html();
    $.each(data.article, function () {
        $('#article_cycle').append(Mustache.render(article, this));
    });

    // Global post render
    _post_render();

    // Local post render
   
  
}