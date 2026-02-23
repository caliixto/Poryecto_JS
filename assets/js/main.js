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



})