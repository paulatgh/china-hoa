var render = function() {
    _pre_render()
    $('#members_primary_name_first').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_name_last').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_login').after(function() { return Mustache.render($(this).html(), data.profile); });
    if (data.profile.members.primary.discard_login_info === true) { $('#members_primary_discard_login_info').prop('checked', true); }
    $('#members_primary_birthday').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_employer').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_occupation').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_phone_home_number').after(function() { return Mustache.render($(this).html(), data.profile); });
    if (data.profile.members.primary.phone.home.hidden === true) { $('#members_primary_phone_home_hidden').prop('checked', true); }
    $('#members_primary_phone_work_number').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_phone_cell_number').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_phone_other_number').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_primary_email_address').after(function() { return Mustache.render($(this).html(), data.profile); });
    if (data.profile.members.primary.email.hidden === true) { $('#members_primary_email_hidden').prop('checked', true); }
    $('#members_secondary_name_first').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_name_last').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_birthday').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_employer').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_occupation').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_phone_work_number').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_phone_cell_number').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#members_secondary_email_address').after(function() { return Mustache.render($(this).html(), data.profile); });
    if (data.profile.addresses.primary.hidden === true) { $('#addresses_primary_hidden').prop('checked', true); }
    $('#addresses_primary_address_1').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_primary_address_2').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_primary_city').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_primary_state').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_primary_zip').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_primary_lot').after(function() { return Mustache.render($(this).html(), data.profile); });
    $('#addresses_primary_subdivision').after(function() { return Mustache.render($(this).html(), data.profile); });
    // $('#members_secondary_').after(function() { return Mustache.render($(this).html(), data.profile); });
    // $('#addresses_primary_').after(function() { return Mustache.render($(this).html(), data.profile); });
    // $('#members_secondary_').after(function() { return Mustache.render($(this).html(), data.profile); });
    // $('#members_secondary_').after(function() { return Mustache.render($(this).html(), data.profile); });
    // $('#members_secondary_').after(function() { return Mustache.render($(this).html(), data.profile); });
    // $('#members_secondary_').after(function() { return Mustache.render($(this).html(), data.profile); });
    // $('#members_secondary_').after(function() { return Mustache.render($(this).html(), data.profile); });

    var Logo = $('#Logo').html();
    $.each(data.Logo, function() {
        $('#Logo_cycle').append(Mustache.render(Logo, this));
    });

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
}
