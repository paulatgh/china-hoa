var render = function() {
    _pre_render()

    $('#header').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_name_first').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_name_last').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_login').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_discard_login_info').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_birthday').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_employer').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_occupation').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_phone_home').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_phone_work').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_phone_cell').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_phone_other').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_email').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_name_first').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_name_last').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_birthday').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_employer').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_occupation').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_phone_work').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_phone_cell').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_email').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_primary_hidden').after(function() { return Mustache.render($(this).html(), data.profile); })
    $('#addresses_primary_address_1').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_primary_address_2').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_primary_city').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_primary_state').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_primary_zip').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_primary_lot').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_primary_subdivision').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_dependents').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_secondary_address_1').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_secondary_address_2').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_secondary_city').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_secondary_state').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_secondary_zip').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_secondary_lot').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#notes_moved_from').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#notes_move_in_date').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#notes_website').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#notes_computer').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#notes_internet').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#notes_hobbies').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#notes_interests').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#notes_organizations').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#notes_freeform').after(function() { return Mustache.render($(this).html(), data.profile); });
    
    $('#cancel-button').click(function() {
        window.location = `${data._metadata.root_url}/home`;
    })
    // Global post render
    _post_render();

    // Local post render

    // admin
    if (data._current_user && data._current_user.is_admin == true) {
        $('.buttona').css('display', 'none')
    }
    var username = data._current_user && data._current_user.display_name
    $(".btns-language").text(username);
    $('.logout').click(function() {
        //TODO: log out user
        logOutUser()
    })
    addAuthenticityTokenToForms();
}
