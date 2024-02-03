//tamano de la letra en variable

let tam = 18;

document.getElementById("aumentarParrafo").addEventListener("click", function(){
    tam++;
    document.getElementById("miParrafo").style.fontSize = tam + "px";
});

document.getElementById("disminuirParrafo").addEventListener("click", function(){
    tam--;
    document.getElementById("miParrafo").style.fontSize = tam + "px";
});

document.getElementById("alturaLinea").addEventListener("click", function(){
    tam--;
    document.getElementById("miParrafo").style.lineHeight = "30px";
});


//funcuon cambuo de cursor de imagen
document.getElementById("tamCursor").addEventListener("click", function(){
    const cursorImage = new Image();
    cursorImage.src = "/practicas/imagenes/cursor.png";
    cursorImage.onload = function(){
        document.body.style.cursor = `url(${cursorImage.src}) 14 14, auto`;
    };
});

document.getElementById("altoContraste").addEventListener("click", function(event){
    event.preventDefault();
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
});

document.getElementById("estadoNormal").addEventListener("click", function() {
    document.getElementById("miParrafo").style.fontsize = "large";
    document.getElementById("miParrafo").style.lineHeight = "70px";
    document.getElementById("miParrafo").style.lineHeight = "normal";
    document.body.style.cursor = "default";
    document.body.style.color = "#000";
    document.body.style.backgroundColor ="#fff";

});
