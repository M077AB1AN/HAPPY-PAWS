const nombre=document.getElementById('nombre');
const apellido=document.getElementById('apellido');
const lugar=document.getElementById('lugar');
const comentario=document.getElementById('comentario');
const numero=document.getElementById('numero');



const database = firebase.database();

btnEnviar.addEvenListener('click', (e) =>{
    e.preventDefault();

database.ref('/adopta').set({
    Nombre:nombre.value,
    Apellido:apellido.value,
    lugar:lugar.value,
    coemntario:comentario.value,
    numero:numero.value
    
});
});