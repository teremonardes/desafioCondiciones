// JAVASCRIP EJERCICIO 1
function borderojo() {
  //   document.querySelector(".imgcalico").style.border = "2px solid red";

  imagen = document.querySelector(".imgcalico");

  if (imagen.style.border == "2px solid red") {
    imagen.style.border = "none";
  } else {
    imagen.style.border = "none";

    imagen.style.border = "2px solid red";
  }
}

// JAVASCRIPT EJERCICIO 2

function suma() {
  var cantidad1 = document.querySelector(".cantstick1").value;
  var cantidad2 = document.querySelector(".cantstick2").value;
  var cantidad3 = document.querySelector(".cantstick3").value; 

  var total = Number(cantidad1) + Number(cantidad2) + Number(cantidad3);

  var respuesta = document.querySelector(".respuesta");

  if (total <= 10)  {
    respuesta.innerHTML = "Tienes "+total+" stickers"
  }

  else {
    respuesta.innerHTML = "No puedes llevar tantos stickers"
  }
}


// JAVASCRIPT EJERCICIO 3


