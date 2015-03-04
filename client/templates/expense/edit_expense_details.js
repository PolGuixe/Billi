Template.editExpenseDetails.helpers({
  field: function () {
    var allFields = UserSettings.findOne({
      belongsTo: Meteor.user()._id
    });
    var trueFields = [];
    
    allFields = allFields.importSettings;
    console.log(allFields);

    _.each(allFields, function (values, keys) {
      if (values)
        trueFields.push(keys);
    });
    
    console.log(trueFields);
    return trueFields;
  },
  date: function () {
    var now = new Date().getTime();
    return Date(now).toString(); //TODO: Use moment or a datepicker
  },
  location: function () {
    var latLon = Geolocation.latLng();
    return 'Lat: ' + latLon.lat + ', Lon: ' + latLon.lng;
  },
  amount: function () {
    return '$10';
  },
  image: function () {
    return Session.get('image');
  }
});

Template.editExpenseDetails.events({});

AutoForm.hooks({
  'expense-new-form': {
    onSuccess: function (operation, result, template) {
      Router.go('/expenses');
    },

    onError: function (operation, error, template) {
      alert(error);
    }
  }
});