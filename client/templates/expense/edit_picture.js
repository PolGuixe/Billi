Template.editPicture.helpers({
  image: function(){
    return Session.get('image');
  }
});

Template.editPicture.events({
  "click [data-action=scan]":function(){
    Router.go('/edit_expense_details');
  }
});