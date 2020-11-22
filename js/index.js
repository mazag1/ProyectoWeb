var banner = new Array(5);

for (let index = 0; index < 5; index++) {
    banner[index] = "/imagenes/banner/" + (index + 1) + ".jpg";
}

window.onload=function()
{	
    m_carrusel()
    var nombre=document.getElementById("Quienes");
    nombre.innerHTML="Quienes Somos";
    
    document.body.style.backgroundColor = '#FAC67C';
}

function m_carrusel(){
    // contador = numerorandom(1, 6);
    // //---
    // var cabecera=document.getElementById("Quienes");
    // cabecera.style.backgroundImage  = 'red';
    // //---
    var cabecera=document.getElementById("cabecera");
    cabecera.style.background = "url('/imagenes/banner/encabe.jpg')";
    console.log(9);
    setTimeout("m_carrusel()",3000);
}


function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }