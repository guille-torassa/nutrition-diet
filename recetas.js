let esvisible = false;
function mostrarmenu () {
    if (esvisible==false) {
    document.getElementById("menu-principal").style.display="block";
    esvisible=true
} else   {
document.getElementById("menu-principal").style.display="none";
document.getElementById("menu-contactos").style.display="none"
esvisibleCon = false;
esvisible = false;
}
}

let esvisibleCon = false;
function mostrarcontacto () {
    if (esvisibleCon==false) {
    document.getElementById("menu-contactos").style.display="flex";
    esvisibleCon=true
} else   {
document.getElementById("menu-contactos").style.display="none"
esvisibleCon = false;
}
}