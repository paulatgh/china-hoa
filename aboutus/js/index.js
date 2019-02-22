var render = function () {
  _pre_render();

  $('#community_title').after(function() { return Mustache.render($(this).html(), data.content); });
  $('#content_body').after(function() { return Mustache.render($(this).html(), data.content); });
  $('#content_img').after(function() { return Mustache.render($(this).html(), data.content); });

  // Global post render
  _post_render();

  // Local post render

  // admin
  var username = data._current_user && data._current_user.display_name
  $(".btns-language").text(username);
  $('.logout').click(function () {
    //TODO: log out user
    logOutUser()
  })
  var str = `<div class="db">
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
  if (username) {
    $(".btns-language").click(function (event) {
      event.preventDefault();
    })
    $(".btns-language").text(username);
    $(".langOv").css("display", "block")
    $('.jump').click(function () {
      var arr = $(this).attr('data')
      if (arr) {
        window.location.href = `http://tfire.net/${arr}`;
      } else {
        window.location.href = "http://tfire.net/aboutus/aboutus.html";
      }
    })
  } else {
    $(".btns-language").text('Login')
    $('.jump').click(function () {
      var _this = $(this)
      $('body').append(str);
      $('.login-button').click(function () {
        if (!!$('.login-int').val() && !!$('.login-int-a').val()) {
          //TODO: log in user
          var email = $('.login-int').val();
          var password = $('.login-int-a').val();

          logInUser(email, password)
        } else {
          if (!$('.login-int').val() && !$('.login-int-a').val()) {
            $('.userp').css('display', 'block');
            $('.username').css('display', 'block')
            $('.login').css('height', '360')
          } else if ($('.login-int').val() === 'Test' && $('.login-int-a').val() !== '1215' || $('.login-int').val() === 'admin' && $('.login-int-a').val() !== '1215') {
            $('.username').css('display', 'none')
            $('.userp').css('display', 'block')
            $('.login').css('height', '330')
          } else if ($('.login-int-a').val() === '1215' && $('.login-int').val() !== 'Test' || $('.login-int-a').val() === '1215' && $('.login-int').val() !== 'admin') {
            $('.username').css('display', 'block');
            $('.userp').css('display', 'none');
            $('.login').css('height', '330')
          } else if ($('.login-int').val() !== "Test" && $('.login-int-a').val() === " " || $('.login-int').val() !== "admin" && $('.login-int-a').val() === " ") {
            $('.login').css('height', '360')
          } else if ($('.login-int').val() !== "Test" && $('.login-int-a').val() !== "1215" || $('.login-int').val() !== "admin" && $('.login-int-a').val() !== "1215") {
            $('.username').css('display', 'block');
            $('.userp').css('display', 'block');
            $('.login').css('height', '360')
          } else if ($('.login-int').val() === " " && $('.login-int-a').val() !== "1215") {
            $('.login').css('height', '360')
          } else {
            if ($('.login-int').val() !== 'Test' || $('.login-int').val() !== 'admin') {
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
        if (data._metadata.environment === 'dev') {
          if (!!$('.login-int').val() && !!$('.login-int-a').val()) {
            //TODO: log in user
            var email = $('.login-int').val();
            var password = $('.login-int-a').val();

            logInUser(email, password)
          } else if (!$('.login-int').val() && !$('.login-int-a').val()) {
            $('.userp').css('display', 'block');
            $('.username').css('display', 'block')
            $('.login').css('height', '360')
          } else if ($('.login-int').val() === data._current_user && data._current_user.display_name) {
            $('.username').css('display', 'none')
            $('.userp').css('display', 'block')
            $('.login').css('height', '330')
          } else if ($('.login-int-a').val() === data._current_user.password && $('.login-int').val() !== data._current_user && data._current_user.display_name) {
            $('.username').css('display', 'block');
            $('.userp').css('display', 'none');
            $('.login').css('height', '330')
          } else if ($('.login-int').val() !== data._current_user && data._current_user.display_name && $('.login-int-a').val() === " ") {
            $('.login').css('height', '360')
          } else if ($('.login-int').val() !== data._current_user && data._current_user.display_name) {
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
            }
          }
        } else {
          var email = $('.login-int').val();
          var password = $('.login-int-a').val();

          submitDynamicForm(
            '/hoa/session',
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
      $('.return').click(function () {
        $('.db').remove();
      })
    })
  }
};