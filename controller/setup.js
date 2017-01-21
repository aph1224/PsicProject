

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC27OBexiGNeJttiBlCyJG784J_q16KrZ0",
    authDomain: "psic-7cb74.firebaseapp.com",
    databaseURL: "https://psic-7cb74.firebaseio.com",
    storageBucket: "psic-7cb74.appspot.com",
    messagingSenderId: "139855429923"
};
firebase.initializeApp(config);



/* User Auth */
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        showInfo();
    } else {
        // No user is signed in.
    }
});



/* Función para mostrar la información */
function showInfo() {
    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var refer = database.ref("psic/" + uid + "/personalInfo/");

    if (user !== null) {
        console.log("USER != NULL");
        refer.on("value", function (snapshot) {
            var data = snapshot.val();
            if (data !== null) {
                console.log("DATA != NULL");
                var name = (data.name === window.undefined) ? "" : data.name;
                var phone = (data.phone === window.undefined) ? "" : data.phone;
                var email = user.email;
                var specialty = (data.specialty === window.undefined) ? "" : data.specialty;
                var birthday = (data.birthday === window.undefined) ? "" : data.birthday;

                document.getElementById('inputName').value = name;
                document.getElementById('inputPhone').value = phone;
                document.getElementById('inputEmail').value = email;
                document.getElementById('inputSpecialty').value = specialty;
                document.getElementById('inputBirthday').value = birthday;
            } else {
                console.log("DATA NULL");
            }
        });
    } else {
        alert("Ocurrió un error... recarga la página");
    }
}



/* Mandar llamar la función de actualizar datos */
function callUpdateInfo() {
    console.log("Calling updating...");

    var name = document.getElementById('inputName').value;
    var phone = document.getElementById('inputPhone').value;
    var specialty = document.getElementById('inputSpecialty').value;
    var birthday = document.getElementById('inputBirthday').value;

    updateInfo(name, phone, specialty, birthday);
}



/* Función para agregar/actualizar los datos del psic */
function updateInfo(name, phone, specialty, birthday) {
    console.log("Updating...");
    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var refer = database.ref("psic/" + uid + "/personalInfo/");

    refer.update({
        name: name,
        phone: phone,
        specialty: specialty,
        birthday: birthday
    });
    console.log("Updated");
}



/* Función para eliminar los datos registrados por un psic */
function deleteUserInfo() {
    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var refer = database.ref("psic/" + uid).remove();

    deleteUser();
}



/* Función para eliminar el usuario de un psic */
function deleteUser() {
    var user = firebase.auth().currentUser;
    user.delete().then(function () {
        // User deleted.
        alert("Los datos han sido borrados.");
        window.location = "../index.php";
    }, function (error) {
        // An error happened.
        alert("Error al eliminar la cuenta.\nPor favor vuelve a iniciar sesión para que puedas eliminarla.");
    });
}



/* Función para el Toodle */
function toggle() {
    var x = document.getElementById('toggle');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}



/* Función única para cerrar el toggle */
function closeToggle() {
    var x = document.getElementById('toggle');
    x.style.display = 'none';
}