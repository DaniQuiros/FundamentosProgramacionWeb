window.onload = function() {
    document.getElementById("output-img").innerHTML = "<img src='img/logo.png' class='img-fluid rounded' alt='logo' />";
    document.getElementById("stadium").onchange = function(e) {
        let n = e.target.value;

        let imagen = "<img src='img/combo/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='estadio' />";
        let text = ["Ciudad: Al Rayyan - Capacidad: 60.000 espectadores",
            "Ciudad: Al Khor City - Capacidad: 60.000 espectadores",
            "Ciudad: Al Wakrah - Capacidad: 40.000 espectadores",
            "Ciudad: Al Doha - Capacidad: 40.000 espectadores",
            "Ciudad: Al Rayyan - Capacidad: 40.000 espectadores",
            "Ciudad: Al Doha - Capacidad: 45.416 espectadores",
            "Ciudad: Al Doha - Capacidad: 80.000 espectadores",
            "Ciudad: Al Doha - Capacidad: 40.000 espectadores"  
        ];
        
        document.getElementById("output-img").innerHTML = imagen;
        document.getElementById("output-text").innerHTML = text[n - 1];
    };
};

document.getElementById("btn-clean").onclick = function() {
    document.getElementById("output-img").innerHTML= "<img src= 'img/logo.png' class= 'img-fluid rounded' alt= 'logo'/>";
    document.getElementById("output-txt").innerHTML= "";
    document.getElementById("stadium").value = "";
};

