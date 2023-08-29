/*cuando hago CLICK .button .nav TOGGLE 'activo'*/ 
const button = document.querySelector('.button-menu');
const nav = document.querySelector('.nav-bar');

button.addEventListener('click', ()=> {
    nav.classList.toggle('activo')
})