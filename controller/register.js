


// Initialize Firebase
var config = {
    apiKey: "AIzaSyC27OBexiGNeJttiBlCyJG784J_q16KrZ0",
    authDomain: "psic-7cb74.firebaseapp.com",
    databaseURL: "https://psic-7cb74.firebaseio.com",
    storageBucket: "psic-7cb74.appspot.com",
    messagingSenderId: "139855429923"
};
firebase.initializeApp(config);

/* Variable para inicializar el valor de número de usuario */
var x = 0;



// AUTENTICACIÓN DEL USUARIO
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // Código si está entrando a la sesión
    } else {
        // Código si esta saliendo de la sesión
    }
});



/* Manda llamar la función para registrar a un paciente */
function callRegisterUser() {
    console.log("Calling register...");

    var name = document.getElementById('inputName').value;
    var phone = document.getElementById('inputPhone').value;
    var email = document.getElementById('inputEmail').value;
    var birthday = document.getElementById('inputBirthday').value;
    var startDate = document.getElementById('inputStartDate').value;

    registerUser(name, phone, email, birthday, startDate);
}



/* Función para registrar a un paciente */
function registerUser(name, phone, email, birthday, startDate) {
    console.log("Recording...");
    
    x = x+1;

    var user = firebase.auth().currentUser;
    var uid = user.uid;

    firebase.database().ref("psic/" + uid + "/user" + x +"/").set({
        name: name,
        phone: phone,
        email: email,
        birthday: birthday,
        startDate: startDate
    });

    console.log("Registered");
    x++;
    
    document.getElementById('inputName').value = "";
    document.getElementById('inputPhone').value = "";
    document.getElementById('inputEmail').value = "";
    document.getElementById('inputBirthday').value = "";
}