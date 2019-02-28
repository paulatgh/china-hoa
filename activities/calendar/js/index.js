var render = function() {
    _pre_render();
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.events, function() {
        $('#calendar_events').append(Mustache.render(event_template, this));
    });
    $("#breadcrumbs").after(function() {
        return Mustache.render($(this).html(), data);
    });
    var calendar = $('#calendar_left').html();
    Mustache.parse(calendar);
    $.each(data.events, function() {
        $('#calendar_cycle').append(Mustache.render(calendar, this));
    });

    $('#action_buttons_template').after(function() {
        return Mustache.render($(this).html(), data);
    });

    // Global post render
    _post_render();

    // Local post render

    $('#calendar').calendar({
        ifSwitch: true, // Whether to switch the month
        hoverDate: true, // hover Whether to display the day information
        backToday: true // Whether to return to the day
    });

    $.getScript(`${data._metadata.assets_path}${data._metadata.page_path}/js/jalendar.js`, function() {
        $(function() {
            $('#myId').jalendar({
                // customDay: '2017/12/01', // Format: Year/Month/Day
                // color: '#ed145a', // Unlimited Colors
                // lang: 'EN' // Format: English — 'EN', Türkçe — 'TR'
            });
        });
    });

    displayEventActions();

    if (data._current_user && data._current_user.is_admin == true) {
        $(".action-buttons-top").css("display", "block")
    }
};

var displayEventActions = function() {
    $('.event-row').each(function() {
        eventType = this.getAttribute('data-event-type');
        isAdmin = data._current_user && data._current_user.is_admin;
        if (eventType == 'event' && !isAdmin) {
            // show the RSVP actions for all events
            displayRsvp(this);
        } else {
            // show the edit/delete panel if available
            $(this).children(".top-right").css("display", "block")
        }
    });

    // handle event editing by redirecting to edit link
    $(".right-a").click(function() {
        window.location = this.getAttribute('data-link');
        return;
    });

    // handle event deletion
    $(".right-b").click(function() {
        if ($('#calendar_events .saveChange').length) {
            return false;
        }
        var index = Number($(this).parents('ul').attr('data'))
        var self = this;
        delete_element(data, index, $(this).parents('ul'), function() {
            submitDynamicForm(self.getAttribute('data-link'), 'POST');
        })
    });
};

var displayRsvp = function(elem) {
    var tipsHtml =
        `<li class="tips">
            <ul>
            <li><a href="#" class="Yes">Yes</a></li>
            <li><a href="#" class="No">No</a></li>
            <li><a href="#" class="Maybe">Maybe</a></li>
            <li><a class="Notes">Notes</a></li>
            </ul>
        </li>`;
    $(elem).mouseenter(function() {
        $(this).append(tipsHtml)
        $('.Yes').hover(function() {
            $(this).addClass('tips_hover_yes')
        }, function() {
            $(this).removeClass('tips_hover_yes')
        })
        $('.No').hover(function() {
            $(this).addClass('tips_hover_no')
        }, function() {
            $(this).removeClass('tips_hover_no')
        })
        $('.Maybe').hover(function() {
            $(this).addClass('tips_hover_maybe')
        }, function() {
            $(this).removeClass('tips_hover_maybe')
        })
        $('.Notes').hover(function() {
            $(this).addClass('tips_hover_notes')
        }, function() {
            $(this).removeClass('tips_hover_notes')
        })
        $('.Notes').click(function(e) {
            $('.db1').show();
            return false;
        })
        $('.return').click(function() {
            $('.db1').hide();
        })
        return false;
    })
    $(elem).mouseleave(function() {
        $('.tips').remove()
    })
};
