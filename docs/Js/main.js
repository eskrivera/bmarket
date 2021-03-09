const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const menu1 = document.querySelector('.menu');

console.log(imagenes)
console.log(imagenesLight)
console.log(contenedorLight)

imagenes.forEach(imagen =>{
        imagen.addEventListener('click', ()=>{
            aparecerImagen(imagen.getAttribute('src'))
        })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !==  imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        menu1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
        imagenesLight.src = imagen;
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        menu1.style.opacity = '0'
}

// menu


const menu = document.querySelector('.menu');
const menunav = document.querySelector('.menu-navegacion');



    menu.addEventListener('click', ()=>{
        menunav.classList.toggle("spread")
    })

    window.addEventListener('click', e=>{
        if(menunav.classList.contains('spread') && e.target != menunav  && e.target != menu){

            menunav.classList.toggle("spread")
        }

    })


        
//loader

window.onload = function(){
    var theLoader = document.getElementById('loader');

    theLoader.style.visibility = 'hidden';
    theLoader.style.opacity = '0';
}