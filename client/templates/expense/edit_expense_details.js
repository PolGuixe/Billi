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
  'submit form':function(e){
     e.preventDefault();
    
    var expense = {
      userId: this.userId,
//      author: user.username,
      submitted: new Date(),
      amount: $(e.target).find('[name=amount]').val(),
      date: $(e.target).find('[name=date]').val(), //TODO: use a date object.
      location: $(e.target).find('[name=location]').val(),
      paymentMethod: $(e.target).find('[name=method]').val(),
      category: $(e.target).find('[name=category]').val()
    };
    
    Expenses.insert(expense);
    
    Router.go('/expenses');
  }
});
