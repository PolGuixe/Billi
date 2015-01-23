//Add general helpers here i.e. Cordova
UI.registerHelper('isCordova', function(){
  if (Meteor.isCordova){
    return true;
  }
});