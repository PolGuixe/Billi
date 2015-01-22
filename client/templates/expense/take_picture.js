Template.takePicture.events({
  "click .take-picture": function (){
    console.log("taking picture");
    MeteorCamera.getPicture(function (error, data) {
      if (!error) {
        Session.set('image', data);
        Router.go('/edit_picture');
      }
    });
  }
});

