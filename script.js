/* buscador */
const buscar = document.getElementById("buscar");
const elementos = document.querySelectorAll(".busqueda");
buscar.addEventListener("keyup", function(){
    let texto = buscar.value.toLowerCase();
    elementos.forEach(function(item){
        let contenido = item.textContent.toLowerCase();
        if(contenido.includes(texto)){
            item.style.display = "";
        }else{
            item.style.display = "none";
        }
    });
});
/* formulario */
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let numero = document.getElementById("numero").value.trim();
    let comentario = document.getElementById("comentario").value.trim();
    if(nombre === ""){
        alert("Ingrese su nombre");
        return;
    }
    if(email === ""){
        alert("Ingrese su email");
        return;
    }
    if(numero === ""){
        alert("Ingrese su número telefónico");
        return;
    }
    if(comentario === ""){
        alert("Ingrese un comentario");
        return;
    }
    alert("Mensaje enviado correctamente");
    formulario.reset();

});