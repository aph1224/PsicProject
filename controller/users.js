

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC27OBexiGNeJttiBlCyJG784J_q16KrZ0",
    authDomain: "psic-7cb74.firebaseapp.com",
    databaseURL: "https://psic-7cb74.firebaseio.com",
    storageBucket: "psic-7cb74.appspot.com",
    messagingSenderId: "139855429923"
};
firebase.initializeApp(config);
//var database = firebase.database();
//var user = firebase.auth().currentUser;
//var uid = user.uid;
//var name = user.displayName;
//var email = user.email;
//var photo = user.photoURL;



// AUTENTICACIÓN DEL USUARIO
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // Código si está entrando a la sesión
        loadData();
    } else {
        // Código si esta saliendo de la sesión
    }
});



function loadData() {
    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var name = user.displayName;
    var email = user.email;
    var photo = user.photoURL;
    console.log(uid);
    console.log(name);
    console.log(email);
    console.log(photo);
}