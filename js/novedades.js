// eventos
var eventos = new Array(6);
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
    window.document["img_novedades"].src = eventos[numerorandom(1, 6)-1];
    window.document["img_noticias"].src = noticias[numerorandom(1, 6)-1];
    window.document["img_cursos"].src = concursos[numerorandom(1, 6)-1];
    setTimeout("m_carrusel()",3000);
}


function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
