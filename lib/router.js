Router.configure({
  layoutTemplate: 'layout',
  //waitOn:'' if we need to wait on something e.g. subscribing to a collection.
});

Router.route('/', {
  name: 'takePicture'
});

Router.route('/edit_picture', {
  name: 'editPicture',
  data: function () {
    return "data"; //This makes the {{>ionNavBackButton to work}}
  }
});

Router.route('/edit_expense_details', {
  name: 'editExpenseDetails',
  data: function () {
    return "data"; //This makes the {{>ionNavBackButton to work}}
  }
});

Router.route('/expenses', {
  name: 'expensesList'
});

//TODO: make this a map?
Router.route('expenseShow', {
  path: '/expense/:_id',
  name: 'expenseShow',
  data: function () {
    return {
      expense: Expenses.findOne({
        _id: this.params._id
      })
    };
  }
});


Router.route('/settings', {
  name: 'settings'
});

Router.route('/profile',{
  name: 'profile'
});

Router.route('/categories',{
  name: 'categories'
});

Router.route('/import_settings',{
  name: 'importSettings'
});

Router.route('/export_settings',{
  name: 'exportSettings'
});