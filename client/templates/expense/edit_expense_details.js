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
    console.log(moment(now).format('YYYY-MM-DD hh:mm'));
    return moment(now).format('YYYY-MM-DD') + 'T' + moment(now).format('hh:mm'); //TODO:add datepicker
  },
  categories: function () {
    var allCategories = UserSettings.findOne({
      belongsTo: Meteor.user()._id
    });
    allCategories = allCategories.expenseCategories;

    var trueCategories = [];

    _.each(allCategories, function (values, keys) {
      console.log(keys + ' :' + values);
      if (values)
        trueCategories.push({
          value: keys,
          label: keys.charAt(0).toUpperCase() + keys.substring(1)
        });
    });
    console.log(trueCategories);
    return trueCategories;
  },
  location: function () {
    //    var latLon = Geolocation.latLng();
    //    return 'Lat: ' + latLon.lat + ', Lon: ' + latLon.lng;
    return 'Barcelona';
  },
  amount: function () {
    return '$10';
  },
  image: function () {
    return Session.get('image');
  },
  isCategory: function (field) {
    return field === "category";
  },
  isDate: function (field) {
    return field === "date";
  },
  isLocation: function (field) {
    return field === "location";
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