Settings = new Mongo.Collection('settings');

var Schema = {};

Schema.ExpenseCategories = new SimpleSchema({
  meals: {
    type: Boolean,
    label: 'Meals',
  },
  breakfast: {
    type: Boolean,
    label: 'Breakfast',
  },
  lunch: {
    type: Boolean,
    label: 'Lunch',
  },
  dinner: {
    type: Boolean,
    label: 'Dinner',
  },
  trip: {
    type: Boolean,
    label: 'Trip'
  }
});

//TODO add a schema for currencies

Schema.settings = new SimpleSchema({
  merchant: {
    type: Boolean,
    label: 'Merchant'
  },
  location: {
    type: Boolean,
    label: 'Location'
  },
  amount: {
    type: Boolean,
    label: 'Amount'
  },
  date: {
    type: Boolean,
    label: 'Date'
  },
  time: {
    type: Boolean,
    label: 'Time'
  },
  expenseCategories: {
    type: Schema.ExpenseCategories,
    optional: true
  }
});