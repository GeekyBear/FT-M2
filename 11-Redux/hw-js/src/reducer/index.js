const { INCREMENTO, DECREMENTO, INCREMENTOIMPAR, INCREMENTOASYNC } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

// ¡Tiene que devolver un nuevo estado!
function contador(state = initialState, action) {
  if(action.type === INCREMENTO){
    return{
      contador: state.contador + 1
    }
  }  

  if(action.type === INCREMENTOIMPAR){
    if(state.contador%2 === 1){
      return{
        contador: state.contador + 1
      }
    }    
  }
  
  if(action.type === INCREMENTOASYNC){
    return{
          contador: state.contador + 1
    }
  }

  if(action.type === DECREMENTO){
    return{
      contador: state.contador - 1
    }
  }

  return state
}

module.exports = contador;

/*
switch(action.type){
    case INCREMENTO:{
      contador: state.contador + 1
    }
    break;
    case DECREMENTO:{
      contador: state.contador - 1
    }
    break;
    default:
      return state
  }
*/