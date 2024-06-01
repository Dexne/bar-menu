// capturar los elementos a controlar
const menuToggle = document.querySelector('.menuToggle');// menu hamburgesa
const navigation = document.querySelector('.navigation');//botones

// Función para alternar la clase 'open' en el contenedor de la navegación
menuToggle.onclick=function(){
    navigation.classList.toggle('open');
}

const list = document.querySelectorAll('.list');
// funcion para activar el enlace clicado y desactivar los demás
function activarLink(){
    // remover la clase 'active' de todos los elementos de la lista
    list.forEach((item) =>
        item.classList.remove('active')
    );
    // agregar la clase 'active' al elemento clicados
    this.classList.add('active');
}

// agregar el evento de clic a cada elemento de la lista
list.forEach((item) => 
    item.addEventListener('click',activarLink)
);