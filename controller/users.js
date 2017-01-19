

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC27OBexiGNeJttiBlCyJG784J_q16KrZ0",
    authDomain: "psic-7cb74.firebaseapp.com",
    databaseURL: "https://psic-7cb74.firebaseio.com",
    storageBucket: "psic-7cb74.appspot.com",
    messagingSenderId: "139855429923"
};
firebase.initializeApp(config);

console.log("Entrando...");

var userData = firebase.auth().currentUser;
//var userUid = userData.uid;
//var userName = userData.displayName;
console.log("Usuario --> " );

loadData();

function loadData() {
    //var query = firebase.database().ref(userUid).orderByKey();
    console.log(firebase.currentUser());
}