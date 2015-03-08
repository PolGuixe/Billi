
Template.editExpenseDetails.rendered = function () {
  Session.set('city', 'Locating...');
  var findCity = function (latlng) {
      HTTP.get('https://maps.googleapis.com/maps/api/geocode/json?', {
        params: {
          latlng: latlng,
          result_type: 'locality',
          key: 'AIzaSyCrGqF9FvSp55HqvsMTq1ZRdCMjzAB4iQM'
        }
      }, function (error, result) {
        if (error) {
          console.log('Error!');
          console.log(error);
        } else {
          city = _.find(result.data.results[0], function (value, key) {
            if (key == 'formatted_address')
              return value;
          });
          Session.set('city',city);
        }
      });
    } // function to call when Geolocation is ready

  Tracker.autorun(function (computation) {
    if (Geolocation.latLng()) {
      var latLon = Geolocation.latLng();

      console.log(String(latLon.lat) + ',' + String(latLon.lng));
      findCity(String(latLon.lat) + ',' + String(latLon.lng));
      computation.stop();
    }
  });
};

Template.editExpenseDetails.helpers({
  field: function () {
    var allFields = UserSettings.findOne({
      belongsTo: Meteor.user()._id
    });
    var trueFields = [];

    allFields = allFields.importSettings;

    _.each(allFields, function (values, keys) {
      if (values)
        trueFields.push(keys);
    });

    return trueFields;
  },
  categories: function () {
    var allCategories = UserSettings.findOne({
      belongsTo: Meteor.user()._id
    });
    allCategories = allCategories.expenseCategories;

    var trueCategories = [];

    _.each(allCategories, function (values, keys) {
      if (values)
        trueCategories.push({
          value: keys,
          label: keys.charAt(0).toUpperCase() + keys.substring(1)
        });
    });
    return trueCategories;
  },
  date: function () {
    var now = new Date().getTime();
    return moment(now).format('YYYY-MM-DD') + 'T' + moment(now).format('hh:mm'); //TODO:add datepicker
  },
  location: function () {
    return Session.get('city');
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