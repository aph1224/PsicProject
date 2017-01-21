
// FUNCIÓN PARA ABRIR Y CERRAR EL "SIDEBAR"
function openNav() {
    console.log("Open sidebar");
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("sidebarMenu").style.width = "350px";
}

function closeNav() {
    console.log("Close sidebar");
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("sidebarMenu").style.width = "0px";
}