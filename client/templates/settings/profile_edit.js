Template.profileEdit.helpers({
  user: function () {
    return Meteor.user();
  }
});

AutoForm.hooks({
  'user-profile-edit': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
    },
    onError: function () {
      alert(error);
    }
  }
});