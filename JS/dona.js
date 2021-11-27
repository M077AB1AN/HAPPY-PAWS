const txtNom=document.getElementById('txtNom');
const txtDis=document.getElementById('txtdis');
const txtDni=document.getElementById('txtdni');
const txtCor=document.getAnimations('txtcor');
const txtCcor=document.getElementById('txtccor');

const database = firebase.database();

btnEnviar.addEvenListener('click', (e) =>{
    e.preventDefault();

database.ref('/dona').set({
    Nombre:txtNom.value,
    Distrito:txtDis.value,
    Dni:txtDni.value,
    Correo:txtCor.value,
    Ccorreo:txtCcor.value
});
});
