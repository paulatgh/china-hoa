var render = function () {
    _pre_render()

    var HomeownersAssociation = $('#HomeownersAssociation').html();
    Mustache.parse(HomeownersAssociation);
    $.each(data.homeowners_association, function () {
        $('#HomeownersAssociationExternal').append(Mustache.render(HomeownersAssociation, this));
    });

    var HomeownersAssociation = $('#HomeownersAssociation').html();
    Mustache.parse(HomeownersAssociation);
    $.each(data.homeowners_association_second, function () {
        $('#HomeownersAssociationSecondExternal').append(Mustache.render(HomeownersAssociation, this));
    });

    $('#category_template').after(function() { return Mustache.render($(this).html(), data); });
    $('#documents_template').after(function() { return Mustache.render($(this).html(), data); });

    var categoryName = $('#categoryName').html();
    Mustache.parse(categoryName);
    $.each(data.category_name, function () {
        $('#categoryNameExternal').append(Mustache.render(categoryName, this));
    });

    var PDFcategoryList = $('#PDFcategoryList').html();
    Mustache.parse(PDFcategoryList);
    $.each(data.pdf_category, function () {
        $('#PDFcategoryListExternal').append(Mustache.render(PDFcategoryList, this));
    });

    // Global post render
    _post_render();

    // Local post render


    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.announcements_add').css('display', 'block')
        $('.announcements_permission').css('display', 'block')
    }

    // $('.tabs a').click(function (e) {
    //     e.preventDefault();
    //     $('#tabs li').removeClass("current").removeClass("hoverItem");
    //     $(this).parent().addClass("current");
    //     $(".choose-right ul").removeClass("show");
    //     $('.' + $(this).attr('title')).addClass('show');
    // });

    $('.tabs a').hover(function () {
        if (!$(this).parent().hasClass("current")) {
            $(this).parent().addClass("hoverItem");
        }
    }, function () {
        $(this).parent().removeClass("hoverItem");
    });
};
