if (Expenses.find().count() === 0) {

  console.log('Fixture executed');

  var date = new Date();

  var expense = {};

  expense.createdBy = 'Pol';
  expense.merchant = 'McDonalds';
  expense.date = date;
  expense.location = 'Barcelona';
  expense.category = 'M&E';
  expense.amount = {};
  expense.amount.number = 20;
  expense.amount.currency = 'EUR';
  expense.tax = '20%';
  _.extend(expense, {
    paymentMethod: 'Card',
    picture: 'public/test_bill.jpg'
  });
  console.log(expense)

  Expenses.insert(expense);
  //
  //  Expenses.insert({
  //    createdBy: 'Pol',
  //    merchant: 'Bokoto',
  //    dateTime: '15/01/2015 12:00:00 GMT', //TODO: check meteor date package format
  //    location: [40.3234, 20.20202], //TODO: check lat&lon format
  //    category: 'Dinner',
  //    amount: '35',
  //    currency: 'GBP', //TODO: check standard currency naming
  //    tax: '20%',
  //    picture: '',
  //    OCRData: ''
  //  });
  //
  //  Expenses.insert({
  //    createdBy: 'Pol',
  //    merchant: 'NH Hotels',
  //    dateTime: '15/01/2015 18:00:00 GMT', //TODO: check meteor date package format
  //    location: [40.3234, 20.20202], //TODO: check lat&lon format
  //    category: 'Accomodation',
  //    amount: '80',
  //    currency: 'USD', //TODO: check standard currency naming
  //    tax: '20%',
  //    picture: '',
  //    OCRData: ''
  //  });

}