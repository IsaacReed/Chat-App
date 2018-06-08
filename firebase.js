// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC-TboUSZEOJExecr5WsTl3rh6hpKwAnqQ",
    authDomain: "chat-app-78a2c.firebaseapp.com",
    databaseURL: "https://chat-app-78a2c.firebaseio.com",
    projectId: "chat-app-78a2c",
    storageBucket: "chat-app-78a2c.appspot.com",
    messagingSenderId: "576770306956"
  };
  firebase.initializeApp(config);

function myFunction() {
    var x = document.getElementById("notsignedin");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

