 remote = DDP.connect('http://localhost:3030/');
 Meteor.call = function () {
   return remote.call.apply(remote, arguments);
 };

 Accounts.connection = remote;
 Meteor.users = new Meteor.Collection('users', remote);
 remote.subscribe('users');

 Expenses = new Meteor.Collection('expenses', remote);
 UserSettings = new Meteor.Collection('userSettings', remote);
 remote.subscribe('expenses', Meteor.userId()); //No need to send userId?????
 remote.subscribe('userSettings', Meteor.userId());

var Schema = {};

Schema.ExpenseCategories = new SimpleSchema({
  meals: {
    type: Boolean,
    label: 'Meals',
    defaultValue: true,
  },
  breakfast: {
    type: Boolean,
    label: 'Breakfast',
    defaultValue: false
  },
  lunch: {
    type: Boolean,
    label: 'Lunch',
    defaultValue: false
  },
  dinner: {
    type: Boolean,
    label: 'Dinner',
    defaultValue: false
  },
  trip: {
    type: Boolean,
    label: 'Trip',
    defaultValue: true
  },
  fuel: {
    type: Boolean,
    label: 'Fuel',
    defaultValue: true
  }
});

Schema.ImportSettings = new SimpleSchema({
  merchant: {
    type: Boolean,
    label: 'Merchant',
    defaultValue: true
  },
  location: {
    type: Boolean,
    label: 'Location',
    defaultValue: true
  },
  amount: {
    type: Boolean,
    label: 'Amount',
    defaultValue: true
  },
  date: {
    type: Boolean,
    label: 'Date',
    defaultValue: true
  },
  tax: {
    type: Boolean,
    label: 'Tax',
    defaultValue: true
  },
  category: {
    type: Boolean,
    label: 'Category',
    defaultValue: true
  },
  paymentMethod: {
    type: Boolean,
    label: 'Payment Method',
    defaultValue: true
  }
 
//  currency: {
//    type: String,
//    label: 'Currency',
//    defaultValue: 'EUR',
//    autoform: {
//      options: [
//        {
//          value: 'USD',
//          label: '$'
//        },
//        {
//          value: 'EUR',
//          label: '€'
//        },
//        {
//          value: 'GBP',
//          label: '£'
//        }
//    ]
//    }
//  }
});


Schema.Settings = new SimpleSchema({
  belongsTo: {
    type: String
  },
  importSettings: {
    type: Schema.ImportSettings,
    label: 'Customize your import settings',
    optional: true
  },
  expenseCategories: {
    type: Schema.ExpenseCategories,
    label: 'Select the expense categories',
    optional: true
  }
});

UserSettings.attachSchema(Schema.Settings);



Expenses.attachSchema(new SimpleSchema({
  merchant: {
    type: String,
    optional: true,
    label: 'Merchant',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Merchant'
    },
    max: 200
  },
  date: {
    type: Date, //Change it to a datetime picker
    optional: true,
    label: 'Date',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Date and Time'
    }
  },
  location: {
    type: String,
    optional: true,
    label: 'Location',
    optional: true,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Location'
    },
    max: 400
  },
  amount: {
    type: Object,
    optional: true,
  },
  'amount.number': {
    type: Number,
    decimal: true,
    optional: true,
    label: 'Amount',
    autoform: {
      'label-type': 'placeholder',
      placeholder: 'amount'
    },
  },
  'amount.currency': {
    type: String,
    optional: true,
    label: 'Currency',
    autoform: {
      options: [
        {
          value: 'USD',
          label: '$'
        },
        {
          value: 'EUR',
          label: '€'
        },
        {
          value: 'GBP',
          label: '£'
        }
      ]
    }
  },
  tax: {
    type: String,
    optional: true,
    label: 'Tax',
    autoform: {
      options: [
        {
          value: '20%',
          label: '20%'
        },
        {
          value: '10%',
          label: '10%'
        },
        {
          value: '5%',
          label: '5%'
        }
    ]
    }
  },
  category: {
    type: String,
    optional: true,
    label: 'Category',
    autoform: {
      options: [
        {
          value: 'M&E',
          label: 'Meals and Entertainment'
        },
        {
          value: 'Hotel',
          label: 'Hotel'
        },
        {
          value: 'Fuel',
          label: 'Fuel'
        },
        {
          value: 'Trip',
          label: 'Trip'
        }
      ]
    }
  },
  paymentMethod: {
    type: String,
    optional: true,
    label: 'Payment Method',
    autoform: {
      options: [
        {
          value: 'Card',
          label: 'Card'
        },
        {
          value: 'Cash',
          label: 'Cash'
        }
      ],
      type: 'select-radio'
    }
  },
  image:{
     type: String,
    optional: true
  },
  createdBy: {
    type: String,
    autoValue: function () {
      if (this.isInsert) {
        if(this.isSet){
          return;
        }else{
         return Meteor.userId(); //TODO: try this.userId -- it is recommended
        }
      } else {
        this.unset();
      }
    }
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else {
        this.unset();
      }
    }
  }
}));
