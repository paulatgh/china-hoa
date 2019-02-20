var render = function () {
	var subscribers_template = $('#subscribers_template').html();
	Mustache.parse(subscribers_template);
	$.each(data.subscribers, function () {
		$('#news_subscribers').append(Mustache.render(subscribers_template, this));
	});
	var content_title = $('#content_title').html();
	Mustache.parse(content_title);
	$.each(data.content, function () {
		$('#form_titles').append(Mustache.render(content_title, this));
	});
	var Logo = $('#Logo').html();
	$.each(data.Logo, function () {
		$('#Logo_cycle').append(Mustache.render(Logo, this));
	});

	// Global post render
	_post_render();

	// Local post render

	var storage = window.localStorage;
	if (storage.getItem('username') === data._current_user.display_name && data._current_user.is_admin == true) {
		$('.buttona').css('display', 'none')
	}

	var username = storage.getItem('username')
	$(".btns-language").text(username);

	$('.logout').click(function () {
		window.localStorage.setItem('username', '')
		window.location.href = "http://127.0.0.1:8080/home"
	})

}