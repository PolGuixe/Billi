Template.profileShow.helpers({
  username: function () {
    var username;
    if (!!Meteor.user().profile) {
      username = Meteor.user().profile.firstName + ' ' + Meteor.user().profile.lastName;
    } else {
      username = Meteor.user().emails[0].address;
    }
    return username;
  },
  user: function(){
    return Meteor.user();
  }
});