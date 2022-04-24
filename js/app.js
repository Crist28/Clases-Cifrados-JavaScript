///////////////////Cifrar y decifrar una palabra///////////////////////////////////////

function encriptar(elemento){
    let palabra = document.getElementsByTagName("input")[0].value;
    let palabra_codificada = btoa(palabra);
    document.getElementById("resultado").innerHTML = palabra_codificada;
}
 
function desencriptar(elemento){
    let palabra = document.getElementsByTagName("input")[0].value;
    let palabra_descodificada = atob(palabra);
    document.getElementById("resultado").innerHTML = palabra_descodificada;
}





