
console.log('vinculado')

const botonSumar = document.getElementById('boton-sumar')
// console.log('boton sumar', botonSumar)
const botonRestar = document.getElementById('boton-restar')
const cantidad = document.getElementById('cantidad')

let acum = 0

botonSumar.addEventListener('click' , e => {
    // console.log('diste click', e.target)

    let suma = acum++
    // console.log(suma)

    cantidad.textContent = suma + 1

})

botonRestar.addEventListener('click' , e => {

    let restar =  acum--
    cantidad.textContent = restar - 1
})