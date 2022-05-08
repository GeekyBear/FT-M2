const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, incrementoImpar, decremento, incrementoAsync } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.querySelector('#valor');
//console.log(valor)

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  let temp = store.getState().contador
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerText = temp
}

// Ejecutamos la funcion 'renderContador':
renderContador()

// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
// ¡Debe llamar a un callback! Cuando haya un cambio en los datos del estado de redux, ejecuta 
// renderContador... 
store.subscribe(renderContador)


// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

let btnMas = document.querySelector('#incremento')
// Apretar el boton ejecuta la action incremento
btnMas.onclick = () => store.dispatch(incremento()) // incremento() devuelve --> {type: 'INCREMENTO'}

let btnMenos = document.querySelector('#decremento')
btnMenos.onclick = () => store.dispatch(decremento())

let btnMasImpar = document.querySelector('#incrementoImpar')
btnMasImpar.onclick = () => store.dispatch(incrementoImpar())

let btnAsync = document.querySelector('#incrementoAsync')
btnAsync.onclick = () => {
  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  console.log('entre')
  delay(1000).then(() => {store.dispatch(incrementoAsync())});
}