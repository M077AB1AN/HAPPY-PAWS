const nombre=document.getElementById('txtNom');
const apellidoMaterno=document.getElementById('apellidoMaterno');
const apellidoPaterno=document.getElementById('apellidoPaterno');
const fecha=document.getAnimations('fecha');
const dni=document.getElementById('dni');
const direccion=document.getElementById('direccion');
const distrito=document.getElementById('distrito');
const telefono=document.getElementById('telefono');
const celular=document.getElementById('celular');
const Correo=document.getElementById('correo');
const ocupacion=document.getElementById('ocupacion');
const trabajo=document.getElementById('trabajo');
const enteraste=document.getElementById('enteraste');


const database = firebase.database();

btnContinuar.addEvenListener('click', (e) =>{
    e.preventDefault();

database.ref('/adopta').set({
    Nombre:nombre.value,
    ApellidoMaterno:apellidoMaterno.value,
    ApellidoPaterno:apellidoPaterno.value,
    Fecha:fecha.value,
    Dni:dni.value,
    Direccion:direccion.value,
    Distrito:distrito.value,
    Telefono:telefono.value,
    Celular:celular.value,
    Correo:Correo.value,
    Ocupacion:ocupacion.value,
    Trabajo:trabajo.value,
    Enteraste:enteraste.value
});
});