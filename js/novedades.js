// eventos
var eventos = new Array(6);

for (let novedad = 0; novedad < 6; novedad++) {
    eventos[novedad] = "url('/imagenes/eventos/" + (novedad+ 1) + ".jpg')";
}

window.onload=function()
{	
    m_carrusel()
    var nombre=document.getElementById("Novedades");
    nombre.innerHTML="Novedades";

    document.body.style.backgroundColor = '#FAC67C';
}

function m_carrusel(){
    
    var nov=document.getElementById("nov");
    nov.style.background = eventos[numerorandom(1, 6)-1];
    //console.log(9);
    setTimeout("m_carrusel()",3000);
}


function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


// noticias
var noticias = new Array(6);

for (let novedad = 0; novedad < 6; novedad++) {
    noticias[novedad] = "url('/imagenes/noticias/" + (novedad+ 1) + ".jpg')";
}

window.onload=function()
{   
    m_carrusel()
    var nombre=document.getElementById("Novedades");
    nombre.innerHTML="Novedades";

    document.body.style.backgroundColor = '#FAC67C';
}

function m_carrusel(){
    
    var not=document.getElementById("not");
    not.style.background = noticias[numerorandom(1, 6)-1];
    //console.log(9);
    setTimeout("m_carrusel()",3000);
}


function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  
// concursos
var concursos = new Array(6);

for (let novedad = 0; novedad < 6; novedad++) {
    concursos[novedad] = "url('/imagenes/concursos/" + (novedad+ 1) + ".jpg')";
}

window.onload=function()
{   
    m_carrusel()
    var nombre=document.getElementById("Novedades");
    nombre.innerHTML="Novedades";

    document.body.style.backgroundColor = '#FAC67C';
}

function m_carrusel(){
    var conc=document.getElementById("conc");
    conc.style.background = concursos[numerorandom(1, 6)-1];
    //console.log(9);
    setTimeout("m_carrusel()",3000);
}


function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }