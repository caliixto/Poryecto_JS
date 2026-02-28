

function Hora(){
let article__section = document.querySelector(".article__section");
let reloj = document.querySelector(".reloj");
let caja__reloj = document.querySelector(".caja__reloj");



let Fecha = new Date();

let hora = Fecha.getHours();
let minutos = Fecha.getMinutes().toString().padStart(2, "0");
let segundos = Fecha.getSeconds().toString().padStart(2, "0");

reloj.addEventListener("click", ()=>{
    setInterval(() => {
        Fecha = new Date();
        hora = Fecha.getHours();
        minutos = Fecha.getMinutes().toString().padStart(2, "0");
        segundos = Fecha.getSeconds().toString().padStart(2, "0");
        caja__reloj.innerHTML =`${hora}:${minutos}:${segundos}`;
        article__section.innerHTML = "";
        article__section.append(caja__reloj);
        caja__reloj.style.display = "block";
    }, 1000);
})

}

Hora();


