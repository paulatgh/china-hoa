   var render = function () {
       var content_template = $('#bodya').html();
       Mustache.parse(content_template);
       $('#bodya').after(Mustache.render(content_template, data));

       // admin
       var storage = window.localStorage;
       if (storage.getItem('username') === 'admin') {
           $('.buttona').css('display', 'none')
       }
       var username = storage.getItem('username')
       $(".btns-language").text(username);


       $('.logout').click(function () {
           window.localStorage.setItem('username', '')
           window.location.href = "http://tfire.net/index.html"
       })
   };