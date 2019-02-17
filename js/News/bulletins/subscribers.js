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

}