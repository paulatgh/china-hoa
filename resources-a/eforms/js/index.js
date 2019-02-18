var render = function () {
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });
    var event_template = $('#eforms_content').html();
    Mustache.parse(event_template);
    $.each(data.eForms, function () {
        $('#eforms_content_cycle').append(Mustache.render(event_template, this));
    });

    var event_template2 = $('#eFormsEdit').html();
    Mustache.parse(event_template);
    $.each(data.eFormsEdit, function () {
        $('#eFormsEdit_cycle').append(Mustache.render(event_template2, this));
    });

    var event_template3 = $('#View').html();
    Mustache.parse(event_template);
    $.each(data.ViewExportSubmittedEforms, function () {
        $('#View_cycle').append(Mustache.render(event_template3, this));
    });

    var event_template4 = $('#eformsType').html();
    Mustache.parse(event_template);
    $.each(data.eformsType, function () {
        $('#eformsType_cycle').append(Mustache.render(event_template4, this));
    });

    var event_template5 = $('#eFormsEditTitle').html();
    Mustache.parse(event_template);
    $.each(data.eFormsEditTitle, function () {
        $('#eFormsEditTitle_cycle').append(Mustache.render(event_template5, this));
    });

    var event_template6 = $('#SeeTable').html();
    Mustache.parse(event_template);
    $.each(data.SeeTable, function () {
        $('#SeeTable_cycle').append(Mustache.render(event_template6, this));
    });

    var event_template7 = $('#FunctionButtonName').html();
    Mustache.parse(event_template);
    $.each(data.FunctionButtonName, function () {
        $('#FunctionButtonName_cycle').append(Mustache.render(event_template7, this));
    });

    // Global post render
    _post_render();

    // Local post render

    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === 'admin') {
        $('.buttona').css('display', 'none')
        $(".del").click(function () {
            deleteLog()
        })
        $(".edi").click(function () {
            window.location.href = `http://tfire.net/Resources/eForms/edit.html`
        })
    }
    var username = storage.getItem('username')
    $(".btns-language").text(username);


    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://tfire.net/index.html"
    })

    var stronge = window.localStorage;
    if (stronge.getItem('username') === 'admin') {
        $('.form_content_right').css('display', 'block');
        $(".form_title_right").css("display", "block");
    }
};