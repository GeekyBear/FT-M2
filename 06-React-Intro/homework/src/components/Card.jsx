import React from 'react';

export default function Card(props) {
  // acá va tu código
  return <div>
          <button onClick={props.onClose}>X</button>
          <h3>Name: {props.name}</h3>
          <div>
            <p>MIN</p>
            <p>{Math.floor(props.min/10)}</p>
          </div>
          <div>
            <p>MAX</p>
            <p>{Math.floor(props.max/10)}</p>
          </div>  
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}></img>
         </div>
};


//<img src='`http://openweathermap.org/img/wn/${img}@2x.png{props.img}`'>
/*
Este Componente va a recibir las siguientes props:
- **max**: Temperatura Máxima.
- **min**: Temperatura Mínima.
- **name**: Nombre de la ciudad.
- **img**: nombre de la imagen que se debe mostrar.
- **onClose**: recibe una función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.
*/