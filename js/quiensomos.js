var banner = new Array(6);
//fotos
var fotos = new Array(6);

for (let novedad = 0; novedad < 6; novedad++) {
    fotos[novedad] = "imagenes/eventos/"+(novedad+ 1)+".jpg";
    banner[novedad] = "url(imagenes/banner/" + (novedad + 1) + ".png)";
}

window.onload=function()
{	
    m_carrusel()
    var nombre=document.getElementById("Quienes");
    nombre.innerHTML="Secciones";

    var inicio=document.getElementById("inicio");
    inicio.innerHTML="Inicio";

    document.body.style.backgroundColor = '#FAC67C';

    var unica=document.getElementById("unica");
    unica.style.width = "100%";
    unica.style.height = "auto";
    unica.style.backgroundColor = "white";
    unica.style.padding = "30px 50px";
    unica.style.justifyContent = "center";
    unica.style.alignItems = "center";
    unica.style.display = "flex";
}

function m_carrusel(){
    window.document["img_somos"].src = fotos[numerorandom(1, 6)-1];

    var cabecera=document.getElementById("cabecera");
    cabecera.style.backgroundImage = banner[numerorandom(1, 6)-1];

    setTimeout("m_carrusel()",3000);
}

function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }