


// Initialize Firebase
var config = {
    apiKey: "AIzaSyC27OBexiGNeJttiBlCyJG784J_q16KrZ0",
    authDomain: "psic-7cb74.firebaseapp.com",
    databaseURL: "https://psic-7cb74.firebaseio.com",
    storageBucket: "psic-7cb74.appspot.com",
    messagingSenderId: "139855429923"
};
firebase.initializeApp(config);

console.log("Home...");

var user = firebase.auth().currentUser;

if (user !== null) {
    user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
    });
} else {
    console.log("user null...");
}




// FUNCIÓN PARA CERRAR SESIÓN
function logOut() {
    console.log("Logging out...");
    firebase.auth().signOut().then(function () {
        window.location = "login.html";
    }, function (error) {
        // An error happened.
    });
}



// AUTENTICACIÓN DEL USUARIO
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // Código si está entrando a la sesión
        console.log("Correct user --> ");
    } else {
        // Código si esta saliendo de la sesión
    }
});



// FUNCIÓN PARA TENER LA FECHA Y HORA ACTUAL
function showHourDate() {
    var meses = new Array(
            "Enero", "Febrero", "Marzo", "Abril",
            "Mayo", "Junio", "Julio", "Agosto",
            "Septiembre", "Octubre", "Noviembre", "Diciembre"
            );
    var diasSemana = new Array(
            "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
            );
    var fechaCompleta = new Date();
    var ampm;

    today = new Date();
    hour = today.getHours();
    minute = today.getMinutes();
    second = today.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);

    if (hour > 12) {
        hour = hour - 12;
        ampm = "pm";
    } else {
        ampm = "am";
    }

    var fechaCompleta = (diasSemana[fechaCompleta.getDay()] + " " + fechaCompleta.getDate() + " de " + meses[fechaCompleta.getMonth()] + " de " + fechaCompleta.getFullYear()).toString();
    var horaCompleta = (hour + ":" + minute + ":" + second + " " + ampm);

    document.getElementById('date').innerHTML = fechaCompleta;
    document.getElementById('hour').innerHTML = horaCompleta;

    t = setTimeout('showHourDate()', 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}



// PARA CARGAR LAS FUNCIONES AL INICIAR LA PÁGINA
window.onload = function () {
    showHourDate();
};