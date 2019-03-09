var render = function() {
    _pre_render();
    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });
    $("#form").after(function() { return Mustache.render($(this).html(), data); });
    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/resources/docs`;
    })

    var currentDirectoryPath = data.directory_path;
    var directoryChain = currentDirectoryPath.split('/').filter(function (i){return !!i});
    var pathBreadcrumbs = $.map( directoryChain, function( val, i ) {
        var currentPathChain = directoryChain.slice(0, i+1);
        return {
            link: data._metadata.root_url + '/resources/docs?directory_path=/' + currentPathChain.join('/'),
            directoryName: val
        }
    });
    $("#path-breadcrumbs").after(function() { return Mustache.render($(this).html(), {pathBreadcrumbs: pathBreadcrumbs}); });

    // Global post render
    _post_render();

    // Local post render

    addAuthenticityTokenToForms();
};
