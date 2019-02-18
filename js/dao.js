var render = function () {
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

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://127.0.0.1:8080/home/"
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