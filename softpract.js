function validar(){
let usuario=document.getElementById("usuario").value;
let clave=document.getElementById("clave").value;

if (usuario=="juli" && clave=="1234"){
    window.location.href="principalpract.html";
}else{
    alert("Usuario o clave invalidos");
}

}