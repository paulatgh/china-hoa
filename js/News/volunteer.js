var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.volunteer, function () {
        $('#calendar_events').append(Mustache.render(event_template, this));
    });
    var event_template2 = $('#event_template2').html();
    Mustache.parse(event_template2);
    $.each(data.volunteer2, function () {
        $('#calendar_events2').append(Mustache.render(event_template2, this));
    });

    var event_template3 = $('#event_template3').html();
    Mustache.parse(event_template3);
    $.each(data.volunteer3, function () {
        $('#calendar_events3').append(Mustache.render(event_template3, this));
    });


    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === 'admin') {
        $('.top-Add').css('display', 'block')
        $('.part').css('display', 'block')
        $('.part .part-a2').click(function () {
            deleteLog()
        })
    }
    var username = storage.getItem('username')
    $(".btns-language").text(username);


    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://tfire.net/dao.html";

    })

    $('.part-a1').click(function () {
        var val = $(this).parents('.part_1').find('.Volunteer_dec_title')
        val.each(function (index, item) {
            var value = $(item).text().trim();
            console.log($(item).text())
            var inp = `<input type="text" value="${value}"/>`;
            val.empty().append(inp)
        })
        var data = $(this).parent().prev().text();
        var str = `<div class="part_1">
        						<div class="Volunteer_dec_title" style="font-weight: 600;"><input value='${data}' type="text" class="edit_inp"/></div>
        						<div class="Volunteer_dec_title">
        							<h4><input value='${data}' type="text" class="edit_inp"/></h4>
        							<div>
        									<input value='${data}' type="text" class="edit_inp"/>
        							</div>
        						</div>
        						<div class="Volunteer_dec_title">
        							<h4><input value='${data}' type="text" class="edit_inp"/></h4>
        							<div><input value='${data}' type="text" class="edit_inp"/></div>
        						</div>
        						<div class="part">
        							<div class="part-a">
        								<a class="part-a1">Edit</a>
        								<a class="part-a2">Delete</a>
        							</div>
        						</div>
        <span class="save">Save Changes</span>
        					</div>`

        $('.save').click(function () {
            var val = $(this).prev().val()
            var valStr = ` 
                            <div class="Volunteer_dec_ title" style="font-weight: 600;">Architectural Committee</div>
                            <div class="Volunteer_dec_title">
                                <h4>Description:</h4>
                                <div>
                                    Help to manage the DAO website to keep it up to date and maximize timely
                                    communication within our community.
                                </div>
                            </div>
                            <div class="Volunteer_dec_title">
                                <h4>Contact:</h4>
                                <div>Dave Clark</div>
                            </div>

        <span class="save">Save Changes</span>
                            
                                <div class="part-a">
                                    <span class="part-a1">Edit</span>
                                    <span class="part-a2">Delete</span>                                    
                                </div>
                                `
            $(this).parent().empty().append(valStr)
            $('.part-a2').click(function () {
                deleteLog()
                $('.delete_button').click(function () {
                    console.log('1111')
                })
            })
        })

    })
}