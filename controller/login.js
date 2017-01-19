

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC27OBexiGNeJttiBlCyJG784J_q16KrZ0",
    authDomain: "psic-7cb74.firebaseapp.com",
    databaseURL: "https://psic-7cb74.firebaseio.com",
    storageBucket: "psic-7cb74.appspot.com",
    messagingSenderId: "139855429923"
};
firebase.initializeApp(config);



// LogIn function
function logIn() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(user, pass).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}



// LOGIN WITH GOOGLE ACCOUNT
var provider = new firebase.auth.GoogleAuthProvider();

function logInGoogle() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}



// Session authentication
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // Código si está entrando a la sesión
        window.location = "home.html";
    } else {
        // Código si no entró a la sesión
    }
});