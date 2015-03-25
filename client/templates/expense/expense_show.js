Template.expenseShow.helpers({
  //TODO: apply DRY
  categoryIcon: function(){
    var category = this.category;
    //TODO add array with the right icons.
    return "icon ion ion-wineglass";
  },
  dateWithFormat: function () {
    var d = this.date;
    return moment(d).format('DD MMMM, hh:mm');
  },
  currencySymbol: function () {
    //TODO define this array as global to be reused. 
    var currencies = {
      EUR: '€',
      USD: '$',
      GBP: '£'
    }
    return currencies[this.amount.currency];
  }
});