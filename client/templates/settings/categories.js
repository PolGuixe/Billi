Template.categories.helpers({
  user: function(){
    return UserSettings.findOne({belongsTo: Meteor.user()._id});
  }
});

AutoForm.hooks({
  'user-categories-form': {
    onSuccess: function (operation, result, template) {
      Router.go('/settings');
    },

    onError: function (operation, error, template) {
      alert(error);
    }
  }
});