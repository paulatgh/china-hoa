var render = function() {
    _pre_render();

    var regularMembers = data.members.filter(function(member){ return member.roles && !member.roles.includes('admin') })
      .map(function(member){
        var proposedRoles = member.roles.slice(0);
        proposedRoles.push('admin');
        member.proposed_admin_roles = proposedRoles;
        return member;
    })
    .sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    var adminMembers = data.members
      .filter(function(member){ return member.roles && member.roles.includes('admin') })
      .map(function(member){
          member.is_removable = data._current_user.id != member.user_id;
          member.is_demotable = data._current_user.id != member.user_id;
          member.proposed_non_admin_roles = member.roles.filter(function(role){ return role != 'admin'});
          if (member.proposed_admin_roles == undefined || member.proposed_admin_roles.length == 0) {
            member.proposed_non_admin_roles = ['member'];
          }

          return member;
      })
      .sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }

        // names must be equal
        return 0;
      });

    $('#header').after(function() { return Mustache.render($(this).html(), data); });
    $('#members').after(function() { return Mustache.render($(this).html(), { members: regularMembers, _metadata: data._metadata }); });
    $('#admins').after(function() { return Mustache.render($(this).html(), { admins: adminMembers, _metadata: data._metadata }); });

    // Global post render
    _post_render();

    // Local post render

    $("#breadcrumbs").after(function() { return Mustache.render($(this).html(), data); });

    addAuthenticityTokenToForms();
}
