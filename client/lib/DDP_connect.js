 remote = DDP.connect('http://localhost:3030/');
 Meteor.call = function () {
   return remote.call.apply(remote, arguments);
 };

 Accounts.connection = remote;
 Meteor.users = new Meteor.Collection('users', remote);
 remote.subscribe('users');

 var token = Accounts._storedLoginToken();
 if (token) {
   Meteor.loginWithToken(token, function (err) {
     // this is going to throw error if we logged out
     if (err) console.log(err);
     else console.log('loginWithToken');
   });
 }

 Expenses = new Meteor.Collection('expenses', remote);
 UserSettings = new Meteor.Collection('userSettings', remote);
 remote.subscribe('expenses'); //No need to send userId?????
 remote.subscribe('userSettings');


 UserSettings.attachSchema(BilliSchema.UserSettings);
 Expenses.attachSchema(BilliSchema.Expenses);
 Meteor.users.attachSchema(BilliSchema.User);