let busquedaBtn = document.querySelector('#busqueda-btn');
let busquedaFormulario = document.querySelector('.header .busqueda-formulario');

busquedaBtn.onclick = () =>{
   busquedaBtn.classList.toggle('fa-times');
   busquedaFormulario.classList.toggle('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navegacion');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
   busquedaBtn.classList.remove('fa-times');
   busquedaFormulario.classList.remove('active');
}

window.onscroll = () =>{
   busquedaBtn.classList.remove('fa-times');
   busquedaFormulario.classList.remove('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}