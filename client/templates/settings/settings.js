Template.settings.helpers({
  username: function () {
    var username;
    if (!!Meteor.user().profile) {
      if (!!Meteor.user().profile.firstName && !!Meteor.user().profile.lastName) {
        username = Meteor.user().profile.firstName + ' ' + Meteor.user().profile.lastName;
      } else {
        username = Meteor.user().emails[0].address;
      }
    } else {
      username = Meteor.user().emails[0].address;
    }
    return username;
  }
});

Template.settings.events({
  'click [data-action="logOut"]': function () {
    AccountsTemplates.logout();
    console.log('logOut');
  }
});