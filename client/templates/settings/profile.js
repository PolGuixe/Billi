Template.profile.helpers({
  username: function () {
    var username;
    if (Meteor.user().username) {
      username = Meteor.user().username;
    } else {
      username = Meteor.user().emails[0].address;
    }
    return username;
  },
  user: function(){
    return Meteor.user();
  }
});