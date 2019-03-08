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
                color: '#6AA666', // Unlimited Colors
                // lang: 'EN' // Format: English — 'EN', Türkçe — 'TR'
            });
        });
    });

    displayEventActions();

    if (data._current_user && data._current_user.is_admin == true) {
        $(".action-buttons-top").css("display", "block")
    }

    addAuthenticityTokenToForms();
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
    $(elem).mouseenter(function() {
        var eventId = elem.getAttribute('data-event-id');
        var actionUrl = `${data._metadata.root_url}/activities/events/rsvp?id=${eventId}`;
        $(this).children('.tips').show();
        var actionElems = $(this).children('.tips').children('ul').children('li');
        $('.rsvp-yes').hover(function() {
            $(this).addClass('tips_hover_yes')
        }, function() {
            $(this).removeClass('tips_hover_yes')
        })
        actionElems.children('.rsvp-yes').click(function() {
            submitRsvpAction(actionUrl, 'yes')
        });
        $('.rsvp-no').hover(function() {
            $(this).addClass('tips_hover_no')
        }, function() {
            $(this).removeClass('tips_hover_no')
        })
        actionElems.children('.rsvp-no').click(function() {
            submitRsvpAction(actionUrl, 'no')
        });
        $('.rsvp-maybe').hover(function() {
            $(this).addClass('tips_hover_maybe')
        }, function() {
            $(this).removeClass('tips_hover_maybe')
        })
        actionElems.children('.rsvp-maybe').click(function() {
            submitRsvpAction(actionUrl, 'maybe')
        });
        $('.rsvp-notes').hover(function() {
            $(this).addClass('tips_hover_notes')
        }, function() {
            $(this).removeClass('tips_hover_notes')
        })
        $('.rsvp-notes').click(function(e) {
            $('#rsvp_notes_form')[0].setAttribute('action', actionUrl);
            $('.db1').show();
            return false;
        })
        $('.return').click(function() {
            $('.db1').hide();
        })
        return false;
    })
    $(elem).mouseleave(function() {
        $(this).children('.tips').hide();
    })
};

var submitRsvpAction = function(actionUrl, status) {
    submitDynamicForm(
        actionUrl,
        'POST',
        [{
            name: 'status',
            value: status,
        }]
    )
};
