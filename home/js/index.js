var render = function () {
    // Render page
    var event_template = $('#event_template').html();
    var featureList_template = $('#featureList_template').html()
    var date_template = $('#date_template').html()
    Mustache.parse(event_template);
    Mustache.parse(featureList_template);
    Mustache.parse(date_template);
    $.each(data.shortcuts, function () {
        $('#events_photo').append(Mustache.render(event_template, this));
    });
    $.each(data.featureList, function () {
        $('#featureList').append(Mustache.render(featureList_template, this));
    });
    $.each(data.featureList, function (index, item) {
        $('#featureList li').eq(index).find('p').hover(function () {
            $(this).css('background', `url(${item.active_img}) no-repeat  center 50px`)
        }, function () {
            $(this).css('background', `url(${item.img}) no-repeat  center 50px`)
        })
    })
    $.each(data.date, function () {
        $('#date').append(Mustache.render(date_template, this));
    });

    // Global post render
    _post_render();

    // Local post render
    $.getScript('js/swiper.min.js', function() {
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

    $('#calendar').calendar({
        ifSwitch: true, // 是否切换月份
        hoverDate: true, // hover是否显示当天信息
        backToday: true // 是否返回当天
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

    $('.main-switch-top a').click(function(){
        $(this).addClass('curr').siblings().removeClass('curr');
        var manin = $(this).index();
            $('.main-switch-item').hide();
            $('.main-switch-item').eq(manin).fadeIn();
    })

    // 时间
    function timebar() {
        $('.mas-tib').stop().animate({ 'width' : 350+'px' },6000).animate({ 'width' : 0 },0);
            $('.ms-nav-next').click();
    };

    function clickAdd() {
        $('#masterslider').delegate('.ms-nav-next', 'click', function () {
            i++;
            if (i > ileng) {
                i = 1;
            };
            $('.ban-len i').html(i);
        })
    };

    function clickReduce() {
        $('#masterslider').delegate('.ms-nav-prev', 'click', function () {
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

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://tfire.net/index.html"
    })

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
    let storage = window.localStorage;
    if (storage.getItem('username')) {
        $(".btns-language").click(function (event) {
            event.preventDefault();
        })
        var username = storage.getItem('username')
        $(".btns-language").text(username);
        $(".langOv").css("display", "block")
        $('.jump').click(function () {
            var arr = $(this).attr('data')
            if (arr) {
                // window.location.href = `http://tfire.net/${arr}`;
                window.location.href = `file:///C:/Users/Administrator/Documents/china-hoa/${arr}`;
            } else {
                window.location.href = "http://tfire.net/aboutus/aboutus.html"
            }
        })
    } else {
        $('.jump').click(function () {
            var _this = $(this)
            $('body').append(str);
            $('.login-button').click(function () {
                if ($('.login-int').val() === 'Test' && $('.login-int-a').val() === '1215' ||
                    $('.login-int').val() === 'admin' && $('.login-int-a').val() === '1215'
                ) {
                    var userValue = $('.login-int').val();
                    storage.setItem('username', userValue)
                    var hrefHtml = _this.attr('data')
                    // window.location.href = `http://tfire.net/${hrefHtml}`;
                    window.location.href = `file:///C:/Users/Administrator/Documents/china-hoa/${hrefHtml}`;
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
            $('.return').click(function () {
                $('.db').remove();
            })
        })
        $(".btns-language").click(function () {
            $('body').append(str);
            var _this = $(this);
            $('.login-button').click(function () {
                if ($('.login-int').val() === 'Test' && $('.login-int-a').val() === '1215' ||
                    $('.login-int').val() === 'admin' && $('.login-int-a').val() === '1215'
                ) {
                    var userValue = $('.login-int').val();
                    storage.setItem('username', userValue)
                    _this.text('Test');
                    $('.db').remove();
                    window.location.reload()
                } else if (!$('.login-int').val() && !$('.login-int-a').val()) {
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
            })
            $('.return').click(function () {
                $('.db').remove();
            })
        })
    }
};