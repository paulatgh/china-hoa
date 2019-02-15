var render = function () {
    var event_template = $('#event_template').html();
    var event_template2 = $('#event_template2').html();
    var event_template3 = $('#event_template3').html();
    var event_template4 = $('#event_template4').html();
    var event_template5 = $('#event_template5').html();

    Mustache.parse(event_template);
    $.each(data.CupertinoCityResources, function () {
        $('#calendar_events').append(Mustache.render(event_template, this));
        console.log(this.content)
    });
    Mustache.parse(event_template2);
    $.each(data.HelpfulAddresses, function () {
        $('#calendar_events2').append(Mustache.render(event_template2, this));
    });
    Mustache.parse(event_template3);
    $.each(data.UrbanResourceInformation, function () {
        $('#calendar_events3').append(Mustache.render(event_template3, this));
    });
    Mustache.parse(event_template4);
    $.each(data.NearbySchools, function () {
        $('#calendar_events4').append(Mustache.render(event_template4, this));
    });
    Mustache.parse(event_template5);
    $.each(data.Utilities, function () {
        $('#calendar_events5').append(Mustache.render(event_template5, this));
    });
};




// admin
var storage = window.localStorage;

var username = storage.getItem('username')
$(".btns-language").text(username);


$('.logout').click(function () {
    window.localStorage.setItem('username', '')
    window.location.href = "http://tfire.net/dao.html"

})




$(function () {
    var str =
        `<div class="db">
                <div class="login">
                    <h3 class="login-H3">De Anza Oaks HOA</h3>
                    <p class="return"><img src="img/Bounced.png" alt="Bounced"></p>
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
                window.location.href = `http://tfire.net/${arr}`;
            } else {
                window.location.href = "http://tfire.net/about.html";
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
                    window.location.href = `http://tfire.net/${hrefHtml}`;
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
})