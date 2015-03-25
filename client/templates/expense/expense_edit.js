Template.expenseEdit.helpers({
  expense: function () {
    var template = Template.instance();
    return Expenses.findOne({_id: template.data.id});
  }
});

AutoForm.hooks({
  'expense-edit-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
    },

    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
