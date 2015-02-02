Template.expenseEdit.helpers({
  expense: function(event, template){
    return Expenses.findOne({_id: template.data.id});
  }
});