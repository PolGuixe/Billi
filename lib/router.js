Router.configure({
  layoutTemplate: 'layout',
  //waitOn:'' if we need to wait on something e.g. subscribing to a collection.
});

Router.route('/', {
  name: 'takePicture'
});

Router.route('/edit_picture', {
  name: 'editPicture', 
  data: function(){
    return "data"; //This makes the {{>ionNavBackButton to work}}
  }
});

Router.route('/edit_expense_details', {
  name: 'editExpenseDetails'
});

Router.route('/expenses', {
  name: 'expensesList'
});

Router.route('/settings', {
  name: 'settings'
});
