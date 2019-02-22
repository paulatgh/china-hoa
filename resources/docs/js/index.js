var render = function () {
    _pre_render()
    // var Logo = $('#Logo').html();
    // $.each(data.Logo, function () {
    //     $('#Logo_cycle').append(Mustache.render(Logo, this));
    // });
    var HomeownersAssociation = $('#HomeownersAssociation').html();
    Mustache.parse(HomeownersAssociation);
    $.each(data.HomeownersAssociation, function () {
        $('#HomeownersAssociationExternal').append(Mustache.render(HomeownersAssociation, this));
    });

    var HomeownersAssociation = $('#HomeownersAssociation').html();
    Mustache.parse(HomeownersAssociation);
    $.each(data.HomeownersAssociationSecond, function () {
        $('#HomeownersAssociationSecondExternal').append(Mustache.render(HomeownersAssociation, this));
    });

    var categoryName = $('#categoryName').html();
    Mustache.parse(categoryName);
    $.each(data.categoryName, function () {
        $('#categoryNameExternal').append(Mustache.render(categoryName, this));
    });

    var PDFcategoryList = $('#PDFcategoryList').html();
    Mustache.parse(PDFcategoryList);
    $.each(data.PDFcategory, function () {
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

    $('.tabs a').click(function (e) {
        e.preventDefault();
        $('#tabs li').removeClass("current").removeClass("hoverItem");
        $(this).parent().addClass("current");
        $(".choose-right ul").removeClass("show");
        $('.' + $(this).attr('title')).addClass('show');
    });

    $('.tabs a').hover(function () {
        if (!$(this).parent().hasClass("current")) {
            $(this).parent().addClass("hoverItem");
        }
    }, function () {
        $(this).parent().removeClass("hoverItem");
    });
};