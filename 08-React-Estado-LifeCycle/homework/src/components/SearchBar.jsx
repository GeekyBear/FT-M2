import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('')
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }} >
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={ e => setCity(e.target.value) }
        value = { city } //Su valor siempre tiene que estar vinculado a city. Si cambia city (estado), cambia el input (value)
      />
      <input className="button" type="submit" value="Agregar" />
    </form>
  );
}