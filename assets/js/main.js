window.addEventListener("load", ()=>{
  let intervaloReloj = null;

  let left__arrow  = document.querySelector(".left__arrow");
  let right__arrow = document.querySelector(".right__arrow");
  var imagen__actual = 0;
  let lista__imagenes = document.querySelectorAll(".img__list");

  left__arrow.addEventListener("click", ()=>{
    imagen__actual--;
    if(imagen__actual < 0){
      imagen__actual = lista__imagenes.length - 1;
    }
    Mostar();

  });

  right__arrow.addEventListener("click", ()=>{
    imagen__actual++;
    if(imagen__actual >= lista__imagenes.length ){
         imagen__actual = 0;
    }
     Mostar();
  });


  function Mostar(){
    lista__imagenes.forEach((img, index) =>{
    img.style.display = "none";
          
     if (index ==imagen__actual){
      img.style.display = "block";
      }
    });
  }

  const Articulos = [
    {
      titulo:"Articulo 1",
      fecha:"Publicado el 7 de Marzo del 2024",
      descripcion:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam voluptatum non aut natus laudantium, autem sit laborum tenetur reiciendis magni corporis error quae earum quidem odio fugit officiis repudiandae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam voluptatum non aut natus laudantium, autem sit laborum tenetur reiciendis magni corporis error quae earum quidem odio fugit officiis repudiandae?"
    },
    {
      titulo:"Articulo 2",
      fecha:"Publicado el 13 de Marzo del 2024",
      descripcion:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam voluptatum non aut natus laudantium, autem sit laborum tenetur reiciendis magni corporis error quae earum quidem odio fugit officiis repudiandae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam voluptatum non aut natus laudantium, autem sit laborum tenetur reiciendis magni corporis error quae earum quidem odio fugit officiis repudiandae?"
    },
    {
      titulo:"Articulo 3",
      fecha:"Publicado el 23 de Marzo del 2024",
      descripcion:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam voluptatum non aut natus laudantium, autem sit laborum tenetur reiciendis magni corporis error quae earum quidem odio fugit officiis repudiandae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam voluptatum non aut natus laudantium, autem sit laborum tenetur reiciendis magni corporis error quae earum quidem odio fugit officiis repudiandae?"
    },

  ]

  function MostrarArticulos(){
    let article__section = document.querySelector(".article__section");

    Articulos.forEach(articulo => {
      let ar = document.createElement("article");
      ar.classList.add("clase__article");
      let h2 = document.createElement("h2");
      h2.classList.add("article__section__h2");
      let fe = document.createElement("P");
      fe.classList.add("article__fecha");
      let desc = document.createElement("p");
      desc.classList.add("description");
      let btn = document.createElement("button");
      btn.innerText = "Leer Mas";
      btn.classList.add("article__btn");

      h2.append(articulo.titulo);
      fe.append(articulo.fecha);
      desc.append(articulo.descripcion);
      ar.append(h2);
      ar.append(fe);
      ar.append(desc)
      ar.append(btn);
      article__section.append(ar);
    });
  }

  MostrarArticulos();


  const btnUp = document.querySelector(".footer__link");

  btnUp.addEventListener("click", function(e) {
    e.preventDefault(); // evita que haga el salto brusco
      
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  });


    function Login(){
      let login__btn = document.querySelector(".login__btn");
      let nombre = document.querySelector("#nombre");
      let email = document.querySelector("#email");
      let contra = document.querySelector("#contra");
      login__btn.addEventListener("click", (e)=>{
        e.preventDefault();
        let n = nombre.value;
        let em = email.value;
        let c = contra.value;
        
        const Usuario = {
          nombre:n,
          email:em,
          contra:c
        }
        localStorage.setItem("usua", JSON.stringify(Usuario));

        nombre.value = "";
        email.value = "";
        contra.value = "";
      })

      let UsuarioGuardado = JSON.parse(localStorage.getItem("usua"));
      let texto = document.createElement("p");
      texto.classList.add("text__form");
      let formulario = document.querySelector(".datos__form");
      let mensaje = document.querySelector(".mensaje");

        if(UsuarioGuardado){
          formulario.style.display = "none";
          texto.textContent = "Me llamo " + UsuarioGuardado.nombre + " y existo en el LocalStorage";
          mensaje.appendChild(texto);
          
        }

  }
  Login();

  function Colores(){
    let color__green = document.querySelector(".color__green");
    let color__red = document.querySelector(".color__red");
    let color__blue = document.querySelector(".color__blue");
    let layout = document.querySelector(".layout")

    color__green.addEventListener("click", ()=>{
      layout.style.backgroundColor = "green";
      document.body.style.backgroundImage = "url('../img/hojas.jpg')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
    });

    color__red.addEventListener("click", ()=>{
      layout.style.backgroundColor = "red";
    });

    color__blue.addEventListener("click", ()=>{
      layout.style.backgroundColor = "blue";
    });
  }

  Colores();

  function mostrarContacto() {
    let article = document.querySelector(".article__section");


    let contact = document.querySelector(".contact");
    let layout_menu = document.querySelector(".layout_menu");

    contact.addEventListener("click", function(e){
      e.preventDefault();
      clearInterval(intervaloReloj);
      article.innerHTML = `
        <div class="section__contacto contacto">
            <h1 class="section__contacto-title">Contacto</h1>
            <form class="section__contacto-form">
                <label>Nombre</label><br>
                <input type="text" id="contacto_nombre"><br><br>

                <label>Apellidos</label><br>
                <input type="text" id="contacto_apellidos"><br><br>

                <label>Email</label><br>
                <input type="email" id="contacto_email"><br><br>

                <label>Sexo</label><br>
                <select id="contact__sex">
                    <option value="mujer">Mujer</option>
                    <option value="hombre" selected>Hombre</option>
                    <option value="otro" disabled>Otro</option>
                </select><br><br>

                <label>Fecha Nacimiento</label><br>
                <input type="text" id="contacto_nacimiento"><br><br>

                <label>Edad</label><br>
                <input type="number" id="contacto_edad">

                <button type="submit">Enviar</button>
            </form>
        </div>
    `;
  layout_menu.style.display = "none";

  let form = document.querySelector(".section__contacto-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document.querySelector("#contacto_nombre").value;
    let apellidos = document.querySelector("#contacto_apellidos").value;
    let email = document.querySelector("#contacto_email").value;
    let contacto_nacimiento = document.querySelector("#contacto_nacimiento").value;
    let contacto_edad = document.querySelector("#contacto_edad").value;
    let edadNum = Number(contacto_edad); 
    
    if(nombre === ""){
      alert("El nombre es obligatorio");
      return;
    }
    else if(apellidos === ""){
      alert("Los apellidos son obligatorios");
      return;
    }
    else if(email === ""){
      alert("El email es obligatorio");
      return;
    }
    else if(contacto_nacimiento === ""){
      alert("La fecha de nacimiento es obligatorio");
      return;
    }
    else if(contacto_edad === ""){
    alert("La edad es obligatoria");
    return;
  }
    else if(edadNum < 0 || edadNum > 100){
        alert("La edad no puede ser ni menor a 0 ni mayor a 100");
        return;
    }
  else{
      alert("formulario enviado correctamente");
    }

    form.reset();

  }); 
    

  });
}

mostrarContacto();


function MostrarSobreMi(){
  let article = document.querySelector(".article__section");
  let nav__sobremi = document.querySelector(".nav__sobremi");
  let layout_menu = document.querySelector(".layout_menu");


  nav__sobremi.addEventListener("click", function(e){
    e.preventDefault();
      article.innerHTML = `
        <h2 class="acordeon__h2">Sobre Mi</h2>

            <article class="section__acordeon acordeon">

                <div class="acordeon__item">
                    <button class="acordeon__title acordeon__text__somos">Quiénes somos?</button>
                    <div class="acordeon__content content__somos">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eos eum molestias magnam maxime rem laudantium voluptates aliquid,</p>
                    </div>
                </div>

                <div class="acordeon__item">
                    <button class="acordeon__title acordeon__text__somos">Nuestros servicios</button>
                    <div class="acordeon__content content__servivios">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eos eum molestias magnam maxime rem laudantium voluptates aliquid,</p>
                    </div>
                </div>

                <div class="acordeon__item">
                    <button class="acordeon__title acordeon__text__somos">Nuestros clientes</button>
                    <div class="acordeon__content content__clientes">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eos eum molestias magnam maxime rem laudantium voluptates aliquid,</p>
                    </div>
                </div>

            </article>
    `;
      layout_menu.style.display = "none";

      SobreMi();
    });


}

MostrarSobreMi();


function SobreMi(){

    let acordeon__title = document.querySelectorAll(".acordeon__title");

    acordeon__title.forEach(boton => {
      boton.addEventListener("click", ()=>{
        boton.nextElementSibling.classList.toggle("active");
         console.log(acordeon__title.length);
      })
    })
}

let inicio = document.querySelector(".inicio");

inicio.addEventListener("click",(e)=>{
  e.preventDefault();
  window.location.href = "../index.html";
});

function Hora(){

let article = document.querySelector(".article__section");
let reloj = document.querySelector(".reloj");
let layout_menu = document.querySelector(".layout_menu");

reloj.addEventListener("click", (e)=>{
    e.preventDefault();

    clearInterval(intervaloReloj);

    article.innerHTML = ""; // limpia el contenido
    layout_menu.style.display = "none";

    let caja = document.createElement("div");
    caja.classList.add("caja__reloj");
    article.style.display = "flex";
    article.style.justifyContent = "center";
    article.style.alignItems = "center";
    article.style.minHeight = "400px"; // altura mínima, ajustar según necesidad
    article.style.flexDirection = "column";

    article.appendChild(caja);

    intervaloReloj = setInterval(()=>{

        let fecha = new Date();

        let hora = fecha.getHours();
        let minutos = fecha.getMinutes().toString().padStart(2,"0");
        let segundos = fecha.getSeconds().toString().padStart(2,"0");

        caja.innerHTML = `${hora}:${minutos}:${segundos}`;
        caja.style.display = "block";


    },1000);

});
}

Hora();

})