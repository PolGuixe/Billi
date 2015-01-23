Template.headerCordova.events({
  'click .user':function(){
    Router.go('/setting');
  },
  'click .expenses':function(){
    Router.go('/expenses');
  }
});