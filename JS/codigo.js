console.log("Hola, aprendiendo a invocar código JS desde HTML")
const parrafo = document.querySelector("p")
const boton = document.querySelector("button")

boton.addEventListener("click", ()=> {
    console.log("Click");
})