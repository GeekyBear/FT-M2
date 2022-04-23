import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return    <div className={ styles.cardDiv }>
            <button  className={ styles.button } onClick={props.onClose}>X</button>
            <h3  className={ styles.h3 }>Name: {props.name}</h3>
                <div className={ styles.containerTemp }>
                  <div>
                    <p>Min</p>
                    <p>{Math.floor(props.min/10)}</p>
                  </div>
                  <div>
                    <p>Max</p>
                    <p>{Math.floor(props.max/10)}</p>
                  </div>  
                  <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}></img>
                  </div>
              </div>
  };