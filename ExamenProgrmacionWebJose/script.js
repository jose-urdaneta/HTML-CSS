var generos = document.querySelectorAll(".divSubNav");
var secGenero = document.getElementById("h2subnav");
var rentar = document.querySelectorAll(".btnRentar");
var inicSesi = document.querySelector(".btnheader1");

/* Evento del Sub Navegador en el cual al seleccionar genero cambia 
 El titulo en la seccion inferior */

generos.forEach(function (genero) {
  genero.addEventListener("click", function () {
    secGenero.innerText = this.innerText;
  });
});

/*funcion del Evento Rentar el cual cambia el estado a No disponible
y estilo */

rentar.forEach(function (rento) {
  rento.addEventListener("click", function () {
    if (this.innerText == "Rentar") {
      this.innerText = "No Disponible";
      this.style.backgroundColor = "Red";
      this.style.color = "white";
    } else {
      this.innerText = "Rentar";
      this.style.backgroundColor = "lightblue";
      this.style.color = "black";
    }
  });
});

// Alerta de Inicio de Sesion

inicSesi.addEventListener("click", function () {
  alert("Inicio de Sesion Exitoso !");
});
