Template.layout.events({
  'click [data-action="edit"]': function(){
    Router.go('/expenseEdit')
  },
   'click [data-action="export"]': function(){
    console.log('export');
  }
});