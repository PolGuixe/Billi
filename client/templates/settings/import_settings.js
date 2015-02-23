Template.importSettings.helpers({
  user: function(){
    return UserSettings.findOne({belongsTo: Meteor.user()._id});
  }
});