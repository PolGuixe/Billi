Template.editExpenseDetails.helpers({
  date: function(){
    var now = new Date().getTime();
    return Date(now).toString(); //TODO: Use moment or a datepicker
  },
  location: function(){
    var latLon = Geolocation.latLng();
    return 'Lat: ' + latLon.lat + ', Lon: ' + latLon.lng;
  },
  amount: function(){
    return '$10'
  }
});

Template.editExpenseDetails.events({
  'submit form':function(){
    Bills.insert()
  }
});
