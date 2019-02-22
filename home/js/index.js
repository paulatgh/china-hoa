var render = function() {
    _pre_render();
    // Render page
    var event_template = $('#event_template').html();
    var featureList_template = $('#featureList_template').html()
    var date_template = $('#date_template').html()
    Mustache.parse(event_template);
    Mustache.parse(featureList_template);
    Mustache.parse(date_template);
    $.each(data.shortcuts, function() {
        $('#events_photo').append(Mustache.render(event_template, this));
    });
    $.each(data.feature_list, function() {
        $('#featureList').append(Mustache.render(featureList_template, this));
    });
    $.each(data.feature_list, function(index, item) {
        $('#featureList li').eq(index).find('p').hover(function() {
            $(this).css('background', `url(${item.active_img}) no-repeat  center 50px`)
        }, function() {
            $(this).css('background', `url(${item.img}) no-repeat  center 50px`)
        })
    })
    $.each(data.events, function() {
        $('#date').append(Mustache.render(date_template, this));
    });

    var Reservables = $('#Reservables').html()
    $.each(data.amenities.filter(a => a.reservable), function() {
        $('#Reservables_cycle').append(Mustache.render(Reservables, this));
    });

    var BirDeyeView = $('#BirDeyeView').html()
    $.each(data.bir_deye_view, function() {
        $('#BirDeyeView_cycle').append(Mustache.render(BirDeyeView, this));
    });

    var Amenities = $('#Amenities').html()
    $.each(data.amenities, function() {
        $('#Amenities_cycle').append(Mustache.render(Amenities, this));
    });

    var CommunityNews = $('#CommunityNews').html()
    $.each(data.community_news, function() {
        $('#CommunityNews_cycle').append(Mustache.render(CommunityNews, this));
    });

    var Amenities_title = $('#Amenities_title').html()
    $.each(data.amenities_title, function() {
        $('#Amenities_title_cycle').append(Mustache.render(Amenities_title, this));
    });

    var banner_img = $('#banner_img').html()
    $.each(data.bannerImg, function() {
        $('#banner_img_cycle').append(Mustache.render(banner_img, this));
    });

    var provenance = $('#provenance').html()
    $.each(data.provenance, function() {
        $('#provenance_cycle').append(Mustache.render(provenance, this));
    });
    //calendar
    var calendar = $('#calendar_left').html();
    Mustache.parse(calendar);
    $.each(data.calendar, function() {
        $('#calendar_cycle').append(Mustache.render(calendar, this));
    });

    // Global post render
    _post_render();

    // Local post render
    $.getScript(`${data._metadata.assets_path}${data._metadata.page_path}/js/swiper.min.js`, function() {
        //Carousel
        var swiper = new Swiper('.swiper-container', {
            width: 412,
            spaceBetween: 23,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    });

    $.getScript(data._metadata.page_path + '/js/jalendar.js', function() {
        $(function() {
            $('#myId').jalendar({
                // customDay: '2017/12/01', // Format: Year/Month/Day
                // color: '#ed145a', // Unlimited Colors
                // lang: 'EN' // Format: English — 'EN', Türkçe — 'TR'
            });
        });
    });

    $('#calendar').calendar({
        ifSwitch: true, // Whether to switch the month
        hoverDate: true, // hover Whether to display the day information
        backToday: true // Whether to return to the day
    });

    var slider = new MasterSlider();
    slider.setup('masterslider', {
        width: 1920, // slider standard width
        height: 500, // slider standard height
        mouse: false,
        autoplay: false,
        loop: true,
        overPause: false,
        speed: 13
    });

    //banner
    MSScrollParallax.setup(slider, 60, 100, true);
    slider.control('arrows');
    var i = 1,
        ileng = $('.ms-slide').length;

    $('.main-switch-top a').click(function() {
        $(this).addClass('curr').siblings().removeClass('curr');
        var manin = $(this).index();
        $('.main-switch-item').hide();
        $('.main-switch-item').eq(manin).fadeIn();
    })

    // time
    function timebar() {
        $('.mas-tib').stop().animate({
            'width': 350 + 'px'
        }, 6000).animate({
            'width': 0
        }, 0);
        $('.ms-nav-next').click();
    };

    function clickAdd() {
        $('#masterslider').delegate('.ms-nav-next', 'click', function() {
            i++;
            if (i > ileng) {
                i = 1;
            };
            $('.ban-len i').html(i);
        })
    };

    function clickReduce() {
        $('#masterslider').delegate('.ms-nav-prev', 'click', function() {
            i--;
            if (i < 1) {
                i = ileng;
            };
            $('.ban-len i').html(i);
        })
    };

    setInterval(timebar, 6000);
    $('.ban-len span').html(ileng);
    clickReduce();
    clickAdd();

    var str =
        `<div class="db">
        <div class="login">
            <h3 class="login-H3">De Anza Oaks HOA</h3>
            <p class="return"><img src="/community/img/Bounced.png" alt="Bounced"></p>
            <input class="login-int" type="text" placeholder="Name"><br />
            <p class="username">Please enter your user name</p>
            <input class="login-int-a" type="password" placeholder="Password">
            <p class="userp">Please enter your password</p>
            <button class="login-button">Login</button>
            <div class="login-div">
                <p class="login-a">Forgot your Password?</p>
            </div>
        </div>
    </div>`;
    var username = data._current_user && data._current_user.display_name
    if (username) {
        $(".btns-language").click(function(event) {
            event.preventDefault();
        })
        $(".langOv").css("display", "block")
        $('.jump').click(function() {
            var arr = $(this).attr('data')
            if (arr) {
                window.location.href = `${data._metadata.root_url}/${arr}`;
            } else {
                window.location.href = `${data._metadata.root_url}/aboutus`;
            }
        })
    } else {
        $('.jump').click(function() {
            var _this = $(this)
            $('body').append(str);
            $('.login-button').click(function() {
                if (!!$('.login-int').val() && !!$('.login-int-a').val()) {
                    //TODO log in user
                    var email = $('.login-int').val();
                    var password = $('.login-int-a').val();

                    logInUser(email, password)
                } else {
                    if (!$('.login-int').val() && !$('.login-int-a').val()) {
                        $('.userp').css('display', 'block');
                        $('.username').css('display', 'block')
                        $('.login').css('height', '360')
                    } else if ($('.login-int').val() === 'Test' && $('.login-int-a').val() !==
                        '1215' || $('.login-int').val() === 'admin' && $('.login-int-a').val() !==
                        '1215') {
                        $('.username').css('display', 'none')
                        $('.userp').css('display', 'block')
                        $('.login').css('height', '330')
                    } else if ($('.login-int-a').val() === '1215' && $('.login-int').val() !==
                        'Test' || $('.login-int-a').val() === '1215' && $('.login-int').val() !==
                        'admin') {
                        $('.username').css('display', 'block');
                        $('.userp').css('display', 'none');
                        $('.login').css('height', '330')
                    } else if ($('.login-int').val() !== "Test" && $('.login-int-a').val() ===
                        " " || $('.login-int').val() !== "admin" && $('.login-int-a').val() ===
                        " ") {
                        $('.login').css('height', '360')
                    } else if ($('.login-int').val() !== "Test" && $('.login-int-a').val() !==
                        "1215" || $('.login-int').val() !== "admin" && $('.login-int-a').val() !==
                        "1215") {
                        $('.username').css('display', 'block');
                        $('.userp').css('display', 'block');
                        $('.login').css('height', '360')
                    } else if ($('.login-int').val() === " " && $('.login-int-a').val() !==
                        "1215") {
                        $('.login').css('height', '360')
                    } else {
                        if ($('.login-int').val() !== 'Test' || $('.login-int').val() !==
                            'admin') {
                            $('.username').css('display', 'block')
                            $('.login').css('height', '330')
                        } else if ($('.login-int-a').val() !== '1215') {
                            $('.userp').css('display', 'block')
                            $('.login').css('height', '330')
                        }
                    }
                }

            })
            $('.return').click(function() {
                $('.db').remove();
            })
        })
        $(".btns-language").click(function() {
            $('body').append(str);
            var _this = $(this);
            $('.login-button').click(function() {
                if (data._metadata.environment === 'dev') {
                    if (!!$('.login-int').val() && !!$('.login-int-a').val()) {
                        //   TODO: log in user
                        var email = $('.login-int').val();
                        var password = $('.login-int-a').val();
                        logInUser(email, password);
                    } else if (!$('.login-int').val() && !$('.login-int-a').val()) {
                        $('.userp').css('display', 'block');
                        $('.username').css('display', 'block')
                        $('.login').css('height', '360')
                    } else if ($('.login-int').val() === data._current_user && data._current_user.display_name && $('.login-int-a').val() !== data._current_user.password) {
                        $('.username').css('display', 'none')
                        $('.userp').css('display', 'block')
                        $('.login').css('height', '330')
                    } else if ($('.login-int-a').val() === data._current_user.password && $('.login-int').val() !== data._current_user && data._current_user.display_name) {
                        $('.username').css('display', 'block');
                        $('.userp').css('display', 'none');
                        $('.login').css('height', '330')
                    } else if ($('.login-int').val() !== data._current_user && data._current_user.display_name && $('.login-int-a').val() === " ") {
                        $('.login').css('height', '360')
                    } else if ($('.login-int').val() !== data._current_user && data._current_user.display_name && $('.login-int-a').val() !== data._current_user.password) {
                        $('.username').css('display', 'block');
                        $('.userp').css('display', 'block');
                        $('.login').css('height', '360')
                    } else if ($('.login-int').val() === " " && $('.login-int-a').val() !==
                        data._current_user.password) {
                        $('.login').css('height', '360')
                    } else {
                        if ($('.login-int').val() !== data._current_user && data._current_user.display_name) {
                            $('.username').css('display', 'block')
                            $('.login').css('height', '330')
                        } else if ($('.login-int-a').val() !== data._current_user.password) {
                            $('.userp').css('display', 'block')
                            $('.login').css('height', '330')
                        }
                    }
                } else {
                    var email = $('.login-int').val();
                    var password = $('.login-int-a').val();

                    submitDynamicForm(
                        data._metadata.root_url + '/session',
                        'POST',
                        [{
                                name: 'session_form[email]',
                                value: email
                            },
                            {
                                name: 'session_form[password]',
                                value: password
                            },
                        ]
                    );
                }
            })
            $('.return').click(function() {
                $('.db').remove();
            })
        })
    }
};
