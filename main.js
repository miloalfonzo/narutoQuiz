function start(){
    document.getElementById("test").style.visibility = "visible";
    document.getElementById("boton").style.display = "none";
}

function check(){
    var preguno = document.test.preguno.value;
    var pregudos = document.test.pregudos.value;
    var pregutres = document.test.pregutres.value;
    var pregucuatro = document.test.pregucuatro.value;
    var pregucinco = document.test.pregucinco.value;
    var correct = 0;

    // Sí la respuesta corresponde al valor de la pregunta entonces la variable correct que comienza en cero irá aumentando en uno, que serán las respuestas correctas

    if (preguno == "Minato") {
        correct++;
    }
    if (pregudos == "Kakashi") {
        correct++;
    }
    if (pregutres == "Porque mató a su clan") {
        correct++;
    }
    if (pregucuatro == "Kurama") {
        correct++;
    }
    if (pregucinco == "Obito Uchiha") {
        correct++;
    }

    var mensajes = ["Tienes en claro tu camino ninja", "No esta mal, puedes mejorar", "Eres un desastre"];
    var imagenes = ["imagenes/Naruto.gif", "imagenes/Sasuke.gif", "imagenes/Sakura.gif"];

    var rango;

    // Sí tenes cierta cantidad de respuestas correctas entonces corresponderá un mensaje y una imagen distintos, que son pactados por el rango asignado del array correspondiente.
    if (correct <= 2 ) {
        rango = 2;
    }
    if (correct >= 3  && correct <= 4 ) {
        rango = 1;
    }
    if (correct >= 5 ) {
        rango = 0;
    }
    document.getElementById("mensaje").innerHTML = mensajes[rango];
    document.getElementById("imagenes").src = imagenes[rango];
    document.getElementById("numero_correcto").innerHTML = `Tenes ${correct} respuestas correctas`
    // El div con el chequeo de preguntas correctas será visible unicamente al clickear sobre el botón de ver resultados
    document.getElementById("luego_cargar").style.visibility = "visible";
    document.getElementById("test").style.display = "none";
    document.getElementById("header").style.display = "none";
}

