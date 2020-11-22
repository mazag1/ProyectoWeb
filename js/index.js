var arreglo = new Array(5);

for (let index = 0; index < 5; index++) {
     arreglo[index] = "img/" + (index + 1) + ".jpg";
}

window.onload=function()
{	
    var nombre=document.getElementById("Quienes");
    nombre.innerHTML="Quienes Somos";
    
    var cabecera=document.getElementById("cabecera");
    cabecera.style.background = "url('/imagenes/banner/encabe.jpg')";
    //m_carrusel()

}

function m_carrusel(){
    contador = numerorandom(1, 6);
    //---
    var cabecera=document.getElementById("Quienes");
    cabecera.style.backgroundImage  = 'red';
    //---
    setTimeout("m_carrusel()",3000);
}


function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }