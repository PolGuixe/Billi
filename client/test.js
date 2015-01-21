test = function(path){
  var temp = Meteor.call('OCRTesseract', path, function(err, data) { //TODO: search for a better callback?
  !err ? console.log(data) : console.log(err);
});
  console.log(temp);
}