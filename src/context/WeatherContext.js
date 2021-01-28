import {createContext} from 'react';

const addCity = (name, temperature)=>{ }

const onDelete = (id)=>{ }

const WeatherContext = createContext({
  cities: [],
  addCity:addCity,
  remove:onDelete,
});


export default WeatherContext;