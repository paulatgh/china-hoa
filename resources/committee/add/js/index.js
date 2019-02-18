var render = function () {
    var Logo = $('#Logo').html();
    $.each(data.Logo, function () {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });
    var CommitteeAdd = $('#CommitteeAdd').html();
    Mustache.parse(CommitteeAdd);
    $('#CommitteeAdd').after(Mustache.render(CommitteeAdd, data.TheTitle[0]));

    ClassicEditor
    .create(document.querySelector('#editor'))
    .catch(error => {
        console.error(error);
    });

    // Global post render
    _post_render();

    // Local post render

  
      
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

