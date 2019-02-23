var render = function () {
    _pre_render();

    $("#album").after(function() { return Mustache.render($(this).html(), data); });
    $("#photos").after(function() { return Mustache.render($(this).html(), data); });

    // Global post render
    _post_render();

    // Local post render

    // admin
};