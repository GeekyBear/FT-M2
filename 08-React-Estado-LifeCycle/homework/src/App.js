import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx'

function App() {
  const [cities, setCities] = useState([])

  return (
    <div className="App">
      <Nav onSearch={ onSearch }/>
      <Cards cities={cities} onClose={ onClose }/>
    </div>
  );

  function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(c=>c.id != id))
  }
}

export default App;