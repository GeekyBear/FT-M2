import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={ styles.div }>
      <input type="text" className={ styles.text }/>
      <button className={ styles.button } onClick={() => props.onSearch('rosario')}>Agregar</button>
    </div>)
};