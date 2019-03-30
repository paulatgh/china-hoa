var render = function () {
    _pre_render()

    var event_template = $('#username-A').html();
    var user_information = $('#user_information').html();

    Mustache.parse(event_template);
    Mustache.parse(user_information);

    var user_list_section_template = $('#user_list_section_template').html();
    $.each(data.names_by_letter, function() { $('#user_list').append(Mustache.render(user_list_section_template, this)); });
    var alphabet = $('#alphabet').html(); $.each(data.letter_anchors, function () { $('#alphabet_cycle').append(Mustache.render(alphabet, this)); });
    var page_information = $('#page_information').html(); $.each(data.page_information, function () { $('#page_information_cycle').append(Mustache.render(page_information, this));});
    var function_button = $('#function_button').html(); $.each(data.function_button, function () { $('#function_button_cycle').append(Mustache.render(function_button, this)); });
    // var category = $('#category').html(); $.each(data.address_book_categories, function () { $('#address').append(Mustache.render(category, this));});
    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });
    var street_name = $('#street_name').html();$.each(data.street_name, function() { $('#user_list').append(Mustache.render(street_name, this));});
    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.choose-right').css('margin-top', '50px')
        $('.announcements_add').css('display', 'block')
        $('.announcements_permission').css('display', 'block')
    }

    var show = true;
    $('.address_book_click').click(function() {
        if (show) {
            $(this).text('Click here to list from A to Z')
            // $('.address_book_letter').css('display', 'none')
            $(".events_photo").css("display", "none")
            $(".street_name_ul").css("display", "block")
            $(".search_input_a").css("display", "none")
            $(".street_input_b").css("display", "block")
            $('.a_z').css('display', 'block')
            $(".a_a").css("display", "none")
            $(".search_img_b").css("display","block")
            $(".search_img").css("display","none")
            show = false;
        } else {
            $(this).text('Click here to list by Street Name')
            // $('.address_book_letter').css('display', 'block')
            $(".events_photo").css("display", "block")
            $(".street_name_ul").css("display", "none")
            $(".search_input_a").css("display", "block")
            $(".street_input_b").css("display", "none")
            $('.a_z').css('display', 'none')
            $(".a_a").css("display", "block")
            $(".search_img_b").css("display","none")
            $(".search_img").css("display","block")
            show = true;
        }
    })
    $('.user_desc, .a_z .user_desc').click(function() {
        var userId = this.getAttribute('data-id');
        var userData = data.user_data.find(function(e) {
            return e['id'] == userId
        });

        $('#user_information_cycle').html(Mustache.render(user_information, userData));
        $("#ex1").modal({
            closeClass: 'close',
            closeText: ''
        });
    })
// data-id
    var search_name = data.names_by_letter;
    $('.search_img').click(function(e){
        var search_content = $('.search_input').val().toLowerCase();
        search_name.map(function(items, key) {
            items.names.map(function(val, index) {
                if(val.name.toLowerCase().indexOf(search_content) > -1){
                    location.href = '#au-'+ val.id
                }
            })
        })
    })

    var street_name = data.street_name;
    $('.search_img_b').click(function(e){
        var search_content = $('.street_input').val().toLowerCase();
        street_name.map(function(val,items, key) {
            if(val.title.toLowerCase() == search_content){
                location.href  = '#su-'+ val.id
            }
        })
    })

    selectName = function(e) {
        $(".my-li").remove();
        function srh(str) {
            const sL = str.toLowerCase()
            let cache = []
            data.names_by_letter.map(function(items, key) {
                items.names.map(function(val, index) {
                    if (val.name.toLowerCase().indexOf(sL) > -1) {
                        cache.push(val.name)
                    }
                })
            })
            return cache
        }
        if (e.value.length <= 0 || e.value == " ") {
            return false
        }
        let resultArr = srh(e.value)
        for (var i = 0; i < resultArr.length; i++) {
            $(".search_ul").append("<li id=li" + i + ">" + resultArr[i] + "</li>")
            $("#li" + i).attr("class", 'my-li');
        }
        $('.my-li').on('click', function() {
            var val = $(this).text()
            $(".search_input").val(val)
            $(".my-li").css("display", "none")
            return
        })
        $(".my-li").mouseenter(function() {
            $(".my-li").css("display", "block")
            return
        })
        $(".my-li").mouseleave(function() {
            $(".my-li").css("display", "none")
            return
        })
    }

    streetName = function(e) {
        $(".my-li").remove();
        $(".my-li-a").remove();

        function srh(str) {
            ///^[A-Z]+$/.test(str)?str.toLowerCase():
            const sL = str.toLowerCase()
            let cache = []
            data.street_name.map(function(items, key) {
                if (items.title.toLowerCase().indexOf(sL) > -1) {
                    cache.push(items.title)
                }
            })
            return cache
        }
        if (e.value.length <= 0 || e.value == " ") {
            return false
        }
        let resultArr = srh(e.value)
        for (var i = 0; i < resultArr.length; i++) {
            $(".search_ul_a").append("<li id=li" + i + ">" + resultArr[i] + "</li>")
            $("#li" + i).attr("class", 'my-li-a');
        }
        $('.my-li-a').on('click', function() {
            var val = $(this).text()
            $(".street_input").val(val)
          $(".my-li-a").css("display", "none")
            return
        })
        $(".my-li-a").mouseenter(function() {
          $(".my-li-a").css("display", "block")
          return
        })
        $(".my-li-a").mouseleave(function() {
            $(".my-li-a").css("display", "none")
            return
        })
    }

};
