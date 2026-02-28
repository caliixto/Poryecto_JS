window.addEventListener("load", ()=>{

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
      let btn = document.createElement("btn");
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

  function SobreMi(){
    let nav__sobremi = document.querySelector(".nav__sobremi");
    let sobre__mi = document.querySelectorAll(".sobre__mi");

    nav__sobremi.addEventListener("click", ()=>{
      sobre__mi.forEach(sobre =>{
        sobre.classList.toggle("sb_mi")
        
      })
    })
  }

  SobreMi();

  function Colores(){
    let color__green = document.querySelector(".color__green");
    let color__red = document.querySelector(".color__red");
    let color__blue = document.querySelector(".color__blue");
    let layout = document.querySelector(".layout")

    color__green.addEventListener("click", ()=>{
      layout.style.backgroundColor = "green";
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

    contact.addEventListener("click", function(){
      article.innerHTML = `
        <div class="section__contacto contacto">
            <h1 class="section__contacto-title">Contacto</h1>
            <form class="section__contacto-form">
                <label>Nombre</label><br>
                <input type="text" id="contacto_nombre"><br>

                <label>Apellidos</label><br>
                <input type="text" id="contacto_apellidos"><br>

                <label>Email</label><br>
                <input type="email" id="contacto_email"><br>

                <label>Sexo</label><br>
                <select id="contact__sex">
                    <option value="mujer">Mujer</option>
                    <option value="hombre" selected>Hombre</option>
                    <option value="otro" disabled>Otro</option>
                </select><br>

                <label>Fecha Nacimiento</label><br>
                <input type="text" id="contacto_nacimiento"><br>

                <label>Edad</label><br>
                <input type="number" id="contacto_edad">

                <button type="submit">Enviar</button>
            </form>
        </div>
    `;
      layout_menu.style.display = "none";
    });
}

mostrarContacto();

  



})