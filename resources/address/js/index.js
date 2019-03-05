var render = function () {
    _pre_render()

    var event_template = $('#username-A').html();
    var according_to_the_street = $('#according_to_the_street').html();
    var user_information = $('#user_information').html();

    Mustache.parse(event_template);
    Mustache.parse(user_information);

    var user_list_section_template = $('#user_list_section_template').html(); $.each(data.names_by_letter, function() { $('#user_list').append(Mustache.render(user_list_section_template, this)); });
    Mustache.parse(according_to_the_street); $.each(data.according_to_the_street, function () { $('#according_to_the_street_cycle').append(Mustache.render(according_to_the_street, this)); });
    var alphabet = $('#alphabet').html(); $.each(data.letter_anchors, function () { $('#alphabet_cycle').append(Mustache.render(alphabet, this)); });
    var page_information = $('#page_information').html(); $.each(data.page_information, function () { $('#page_information_cycle').append(Mustache.render(page_information, this));});
    var function_button = $('#function_button').html(); $.each(data.function_button, function () { $('#function_button_cycle').append(Mustache.render(function_button, this)); });
    var category = $('#category').html(); $.each(data.address_book_categories, function () { $('#address').append(Mustache.render(category, this));});
    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });

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
    $('.address_book_click').click(function () {
        if (show) {
            $(this).text('Click here to list from A to Z')
            $('.address_book_letter').css('display', 'none')
            $('.a_z').css('display', 'block')
            $(".a_a").css("display", "none")
            show = false;

        } else {
            $(this).text('Click here to list by Street Name')
            $('.address_book_letter').css('display', 'block')
            $('.a_z').css('display', 'none')
            $(".a_a").css("display", "block")
            show = true;
        }
    })

    $('.user_desc, .a_z .user_desc').click(function () {
        var userId = this.getAttribute('data-id');
        var userData = data.user_data.find(function(e) {
            return e['id'] == userId
        });
        $('#user_information_cycle').html(Mustache.render(user_information, userData));
        $(".db").css("display", "block")
        $('.close').click(function () {
            $('.db').css("display", "none")
        })
    })
    selectName = function selectName(e){
        $(".my-li").remove();
        function srh(str){
           ///^[A-Z]+$/.test(str)?str.toLowerCase():
          let cache = []
          data.names_by_letter.map(function(items,key){
            items.names.map(function(val,index){
              if(val.name.indexOf(str)>-1){//全部转小写判断toLowerCase()
                cache.push(val.name)
              }
            })
          })
          return cache
        }
        if(e.value.length <= 0 || e.value == " "){
          return false
        }
        let resultArr = srh(e.value)
        for(var i=0;i<resultArr.length;i++){
          $(".search_ul").append("<li id=li"+i+">"+resultArr[i]+"</li>")
          $("#li"+i).attr("class",'my-li');
        }
      }
};
