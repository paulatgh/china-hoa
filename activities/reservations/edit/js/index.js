var render = function() {
  _pre_render();
  $("#breadcrumbs").after(function() {
      return Mustache.render($(this).html(), data);
  });
  $('#edit-reservation-body').after(function() { return Mustache.render($(this).html(), data.event) });

  $('#cancel-button').click(function() {
      window.location = `${data._metadata.root_url}/activities/calendar`;
  })

  // Global post render
  _post_render();

  // Local post render

  addAuthenticityTokenToForms();
}
