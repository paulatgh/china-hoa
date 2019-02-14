var render = function() {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.date, function() {
        $('#calendar_events').append(Mustache.render(event_template, this));
    });
};

$(function () {
    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === 'admin') {
        $(".Add-top").css("display", "block")
        $(".top-right").css("display", "block")
        $(".right-b").click(function () {
            deleteLog()
        })
    } else {
        var str =
            `<li class="tips">
                <ul>
                    <li><a href="#" class="Yes">Yes</a></li>
                    <li><a href="#" class="No">No</a></li>
                    <li><a href="#" class="Maybe">Maybe</a></li>
                    <li><a class="Notes">Notes</a></li>
                </ul>					
            </li>`;
        $('.calendar-right ul').mouseenter(function () {
            $(this).append(str)
            $('.Yes').hover(function () {
                $(this).addClass('tips_hover_yes')
            }, function () {
                $(this).removeClass('tips_hover_yes')
            })
            $('.No').hover(function () {
                $(this).addClass('tips_hover_no')
            }, function () {
                $(this).removeClass('tips_hover_no')
            })
            $('.Maybe').hover(function () {
                $(this).addClass('tips_hover_maybe')
            }, function () {
                $(this).removeClass('tips_hover_maybe')
            })
            $('.Notes').hover(function () {
                $(this).addClass('tips_hover_notes')
            }, function () {
                $(this).removeClass('tips_hover_notes')
            })
            $('.Notes').click(function (e) {
                $('.db1').show();
                return false;
            })
            $('.return').click(function () {
                $('.db1').hide();
            })
            return false;
        })
        $('.calendar-right ul').mouseleave(function () {
            $('.tips').remove()
        })

    }

    var username = storage.getItem('username')
    $(".btns-language").text(username);
    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://tfire.net/index.html"
    })
})