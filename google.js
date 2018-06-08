function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
gapi.load("auth2", function(){
	gapi.auth2.init();
});
function signOutUser() {
  firebase.auth().signOut()
  .then(function() {
    console.log("user successfully signed out");
    window.location.replace("index.html");
  })
  .catch(function(error) {
    console.log("error signing out");
  });
}

