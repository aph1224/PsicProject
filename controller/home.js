


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
        showHourDate();
        checkUser();
    } else {
        // Código si esta saliendo de la sesión
    }
});



// FUNCIÓN PARA VERIFICAR SI EL USUARIO ESTA EN LA BD
function checkUser() {
    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var uid = user.uid;

    var refer = database.ref("psic/" + uid);
    if (user !== null) {
        console.log("USER FULL");
        refer.on("value", function (snapshot) {
            var data = snapshot.val();
            if (data !== null) {
                console.log("DATA FULL");
            } else {
                console.log("DATA NULL");
                addUserUID();
            }
        });
    } else {
        console.log("USER NULL");
    }
}

// FUNCIÓN PARA AGREGAR EL UID DEL USUARIO A LA BD
function addUserUID() {
    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var email = user.email;
    var refer = database.ref("psic/" + uid + "/personalInfo/");
    var obj = {
        email: email
    };
    refer.update(obj);
    console.log("User added with email");
    console.log("Email --> " + email);
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
        if (hour === 0) {
            hour = 12;
        }
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