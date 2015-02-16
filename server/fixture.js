if (Expenses.find().count() === 0) {

  console.log('Fixture executed');

  var date = new Date();
  
  Expenses.insert({
    createdBy: 'Pol',
    merchant: 'McDonalds',
    date: date, //TODO: check meteor date package format
    location: 'Barcelona', //TODO: check lat&lon format
    category: 'M&E',
    amount: {
      number: 20,
      currency: 'EUR'
    },
    tax: '20%',
    paymentMethod: 'Card',
    picture: 'public/test_bill.jpg'
  });
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