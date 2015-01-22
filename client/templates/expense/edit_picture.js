Template.editPicture.helpers({
  image: function(){
    return Session.get('image');
  }
});

Template.editPicture.events({
  "click .scan":function(){
    Router.go('/edit_expense_details');
  }
});