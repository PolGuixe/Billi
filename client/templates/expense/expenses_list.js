Template.expensesList.helpers({
  expenses: function(){
    return Expenses.find();
  }
});
