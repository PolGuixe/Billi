Template.categories.helpers({
  user: function () {
    return UserSettings.findOne({
      belongsTo: Meteor.user()._id
    });
  }
});

AutoForm.hooks({
  'user-categories-form': {
    onSuccess: function (operation, result, template) {
      //TODO: Temporal solution for going back instead of forward
      $('[data-nav-container]').addClass('nav-view-direction-back');
      $('[data-navbar-container]').addClass('nav-bar-direction-back');
      //
      Router.go('/settings');
    },

    onError: function (operation, error, template) {
      alert(error);
    }
  }
});