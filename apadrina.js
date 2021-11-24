const nombre=document.getElementById('nombre');
const apellido=document.getElementById('apellido');
const celular=document.getElementById('celular');
const Correo=document.getElementById('correo');
const mascota=document.getElementById('mascota');



const database = firebase.database();

btnEnviar.addEvenListener('click', (e) =>{
    e.preventDefault();

database.ref('/adopta').set({
    Nombre:nombre.value,
    Apellido:apellido.value,
    Celular:celular.value,
    Correo:Correo.value,
    mascota:mascota.value
    
});
});