var banner = new Array(6);

for (let index = 0; index < 6; index++) {
    banner[index] = "url('/imagenes/banner/" + (index + 1) + ".png')";
}

window.onload=function()
{	
    m_carrusel()
    var nombre=document.getElementById("Quienes");
    nombre.innerHTML="Quienes Somos";

    document.body.style.backgroundColor = '#FAC67C';
}

function m_carrusel(){
    // var cabecera=document.getElementById("Quienes");
    // cabecera.style.backgroundImage  = 'red';
    // //---
    var cabecera=document.getElementById("cabecera");
    cabecera.style.background = banner[numerorandom(1, 6)-1];
    console.log(9);
    setTimeout("m_carrusel()",3000);
}


function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }