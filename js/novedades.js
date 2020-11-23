
// eventos
var eventos = new Array(6);
<<<<<<< HEAD

for (let novedad = 0; novedad < 6; novedad++) {
    eventos[novedad] = "url('/imagenes/eventos/" + (novedad+ 1) + ".jpg')";

var Eventos = new Array(6);

for (let Novedades = 0; Novedades < 6; Novedades++) {
    Eventos[Novedades] = "url('/imagenes/eventos/" + (Novedades + 1) + ".jpg)";
>>>>>>> Stashed changes
}

window.onload=function()
{	
    m_carrusel()
<<<<<<< Updated upstream
    var nombre=document.getElementById("Novedades");
=======
    var nombre=document.getElementById("Novedad");
>>>>>>> Stashed changes
    nombre.innerHTML="Novedades";

    document.body.style.backgroundColor = '#FAC67C';
}

function m_carrusel(){
<<<<<<< Updated upstream
    
    var nov=document.getElementById("nov");
    nov.style.background = eventos[numerorandom(1, 6)-1];
    //console.log(9);
    setTimeout("m_carrusel()",3000);
}


function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


=======
>>>>>>> 09392364a621ebf5e694463332530ac3c42d89d3
// noticias
var noticias = new Array(6);
// concursos
var concursos = new Array(6);
//otros
for (let novedad = 0; novedad < 6; novedad++) {
    eventos[novedad] = "/imagenes/eventos/"+(novedad+ 1)+".jpg";
    noticias[novedad] = "/imagenes/noticias/" + (novedad+ 1) + ".jpg";
    concursos[novedad] = "/imagenes/concursos/" + (novedad+ 1) + ".jpg";
}

window.onload=function()
{	
    m_carrusel()
    var nombre=document.getElementById("Novedades");
    nombre.innerHTML="Novedades";
    document.body.style.backgroundColor = '#FAC67C';
}

function m_carrusel(){
<<<<<<< HEAD
    var conc=document.getElementById("conc");
    conc.style.background = concursos[numerorandom(1, 6)-1];
    //console.log(9);
=======
    // var cabecera=document.getElementById("Quienes");
    // cabecera.style.backgroundImage  = 'red';
    // //---
    var Eventos=document.getElementById("Eventos");
    Eventos.style.background = Eventos[numerorandom(1, 6)-1];
    console.log(9);
>>>>>>> Stashed changes
=======
    window.document["img_novedades"].src = eventos[numerorandom(1, 6)-1];
    window.document["img_noticias"].src = noticias[numerorandom(1, 6)-1];
    window.document["img_cursos"].src = concursos[numerorandom(1, 6)-1];
>>>>>>> 09392364a621ebf5e694463332530ac3c42d89d3
    setTimeout("m_carrusel()",3000);
}


function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
