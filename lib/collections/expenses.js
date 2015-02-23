Expenses = new Mongo.Collection('expenses');



Expenses.attachSchema(new SimpleSchema({
  merchant: {
    type: String,
    label: 'Merchant',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Merchant'
    },
    max: 200
  },
  date: {
    type: Date, //Change it to a datetime picker
    label: 'Date',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Date and Time'
    }   
  },
  location: {
    type: String,
    label: 'Location',
    optional: true,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Location'
    },
    max: 400
  },
  amount: {
    type: Object
  },
  'amount.number': {
    type: Number,
    label: 'Amount',
    autoform: {
      'label-type': 'placeholder',
      placeholder: 'amount'
    },
  },
  'amount.currency': {
    type: String,
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
  createdBy: {
    type: String,
    autoValue: function () {
      if (this.isSet) {
        return;
      }
      if (this.isInsert) {
        return Meteor.userId();
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

