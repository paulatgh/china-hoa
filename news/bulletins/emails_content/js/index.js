var render = function () {
    _pre_render();
    var committee_add = $('#committee_add').html();
    Mustache.parse(committee_add);
    $('#committee_add').after(Mustache.render(committee_add, data.TheTitle[0]));

    var form = $('#form').html();
    $('#form').after(Mustache.render(form, data));



    // Global post render
    _post_render();

    // Local post render
    
    $.getScript(data._metadata.assets_path + '/news/bulletins/emails_content/js/cdn.ckeditor.js', function () {
        //Carousel
        ClassicEditor
            .create(document.querySelector('#editor'))
            .catch(error => {
                console.error(error);
            });
    });



    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }
   
};