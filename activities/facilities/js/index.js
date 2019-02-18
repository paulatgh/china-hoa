var render = function () {
    var event_template = $('#event_template').html();
    Mustache.parse(event_template);
    $.each(data.facilities, function () {
        $('#calendar_events').append(Mustache.render(event_template, this));
    });

    // Global post render
    _post_render();

    // Local post render
    $.getScript('js/swiper.min.js', function() {
        //Carousel
		var swiper = new Swiper('.swiper-container', {
			spaceBetween: 30,
			centeredSlides: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});

    });
    // admin
    var storage = window.localStorage;
    if (storage.getItem('username') === 'admin') {
        $('.buttona').css('display', 'none')
    }

    var username = storage.getItem('username')
    $(".btns-language").text(username);

    $('.logout').click(function () {
        window.localStorage.setItem('username', '')
        window.location.href = "http://127.0.0.1:8080/home/"

    })
};