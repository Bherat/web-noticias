var titulo = ["Accidente", "Tragedia"];



function randomImg() {
    return Math.floor((20 * Math.random()) + 1);
}

function html(directorio, titulo) {
    let html = "";
    html += '<section>';
    html += '<img src="'+ directorio + 'accidente ' + randomImg() + '.jpg' +'" alt="" width="250" height="250">';
    html += '<span>'+ titulo +'</span>';
    html += '</section>';
    return html;
}

function rellenarNoticias() {
    for (let i = 0; i < 50; i++) {
        document.getElementById("main").innerHTML += html("img/accidentes/", "Accidente en ...");;
    }
}





document.addEventListener("DOMContentLoaded", function() { 
    rellenarNoticias();
});