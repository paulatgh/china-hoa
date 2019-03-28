var render = function () {
    _pre_render()

    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });
    $("#actions_template").after(function() { return Mustache.render($(this).html(), data); });
    var subdirectories = data.documents;
    function subFn(){
        subdirectories.sort((x,y)=>{
            return x.title[0].localeCompare(y.title[0]);
        })
    $('#documents_template').after(function() { return Mustache.render($(this).html(), data); });
   }
   subFn()

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

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.admin_actions').css('display', 'block')
    }

    $('.tabs a').hover(function () {
        if (!$(this).parent().hasClass("current")) {
            $(this).parent().addClass("hoverItem");
        }
    }, function () {
        $(this).parent().removeClass("hoverItem");
    });

    $('.delete-link').click(function(e) {
        submitDynamicForm(
          data._metadata.root_url + data._metadata.page_path + '/delete',
          'POST',
          [
              {
                  name: 'doc_id',
                  value: $(this).data('id')
              }
          ]
        )
    })
};
