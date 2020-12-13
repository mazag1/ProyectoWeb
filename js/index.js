var banner = new Array(6);

for (let index = 0; index < 6; index++) {
    banner[index] = "url(imagenes/banner/" + (index + 1) + ".png)";
}

window.onload=function()
{	
    m_carrusel();

    musicfondo = $("#fondomusic");
    musicfondo[0].play();

    var nombre=document.getElementById("Quienes");
    nombre.innerHTML="Quienes Somos";

    var inicio=document.getElementById("inicio");
    inicio.innerHTML="Inicio";
    
    //UNICA
    var unica=document.getElementById("unica");
    unica.style.width = "100%";
    unica.style.height = "auto";
    unica.style.backgroundColor = "white";
    unica.style.padding = "30px 50px";
    unica.style.justifyContent = "center";
    unica.style.alignItems = "center";
    unica.style.display = "flex";

    document.body.style.backgroundColor = '#FAC67C';
}

function m_carrusel(){
    // var cabecera=document.getElementById("Quienes");
    // cabecera.style.backgroundImage  = 'red';
    // //---
    var cabecera=document.getElementById("cabecera");
    cabecera.style.backgroundImage = banner[numerorandom(1, 6)-1];
    //console.log(9);
    setTimeout("m_carrusel()",3000);
}


function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }