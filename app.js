const divfecha = document.getElementById ("date");
const dy = document.getElementById ("dy");
const dw = document.getElementById ("dw");
const dr = document.getElementById ("dr");

const bk = document.querySelector (".app");
const saludo = document.getElementById ("saludo");
const btn = document.getElementById ("btn");





fetch("http://worldtimeapi.org/api/ip")
.then(response => response.json())
.then(data => {
let resultado = data;
  console.log( resultado);
  dy.textContent = data.day_of_year;
  dw.textContent = data.day_of_week;

  dr.textContent = 365 -(data.day_of_year);

});


/*
url para copiar la estetica
https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM
info para data.
//https://www.javascripture.com/Date

*/


let fecha = new Date ();
let hora = fecha.getHours();
let dia = fecha.getDate();
let mes  = fecha.getMonth();
let año  = fecha.getFullYear();
let Semana = fecha.getDay();

const meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

divfecha.textContent = `${diasSemana[Semana-1]} ${dia} de ${meses[mes]} de ${año}`;



// reloj con intervalod de 1 segundo

setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("hora").innerHTML = date.toLocaleTimeString();
}



function cambiarFondo () {
  
  //horas dia de 6 a 18 muestra imagen de dia
  if (  hora > 6 && hora <  19 ){
    bk.style.backgroundImage = 'url("./imagenes/background.jpg")';
    saludo.textContent = "Buenos Días";
  } else {
    //Muestra la imagen de noche
    bk.style.backgroundImage = 'url("./imagenes/background_day.jpg")';
    saludo.textContent = "Buenas Noches";

  }
}

cambiarFondo ();
let valor = 1;


btn.addEventListener ("click", 
()=> {
valor == 1 ? (
  valor = 2 ,
  btn.style.background = "red" 
)
: (
  valor=1 ,
  btn.style.background = "blue" 


)

console.log(valor);
 // bk.style.backgroundImage = 'url("./imagenes/background_night.jpg")';
}
);