if (Bills.find().count() === 0) {

  console.log('Fixture executed');

  Bills.insert({
    createdBy: 'Pol',
    dateTime: '15/01/2015 10:00:00 GMT', //TODO: check meteor date package format
    location: [40.3234,20.20202], //TODO: check lat&lon format
    category: 'Lunch',
    amount: '20',
    currency: 'EUR', //TODO: check standard currency naming
    tax: '20%',
    picture: '',
    OCRData: ''
  });

  Bills.insert({
    createdBy: 'Pol',
    dateTime: '15/01/2015 12:00:00 GMT', //TODO: check meteor date package format
    location: [40.3234,20.20202], //TODO: check lat&lon format
    category: 'Dinner',
    amount: '35',
    currency: 'GBP', //TODO: check standard currency naming
    tax: '20%',
    picture: '',
    OCRData: ''
  });

  Bills.insert({
    createdBy: 'Pol',
    dateTime: '15/01/2015 18:00:00 GMT', //TODO: check meteor date package format
    location: [40.3234,20.20202], //TODO: check lat&lon format
    category: 'Accomodation',
    amount: '80',
    currency: 'USD', //TODO: check standard currency naming
    tax: '20%',
    picture: '',
    OCRData: ''
  });

}