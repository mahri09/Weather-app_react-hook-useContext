import React, { useContext, useState } from "react";
import WeatherContext from "../context/WeatherContext";

const AddCityButton = () => {
  const { addCity } = useContext(WeatherContext);

  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  // const submitCity = () =>{
  //   const temperature = Math.floor(Math.random()*50)
  //   addCity(name, temperature)
  // }

  const submitCity = () => {
    const apiKey = "24abbae97946ff434b03529e9ed56d46";
    fetch(
      `http://api.weatherstack.com/current?access_key=${apiKey}&query=${name}`
    )
      .then((response) => response.json())
      .then((data) => {
        addCity(name, data.current.temperature);
        setName("");
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <div className="add-city-form">
      <input onChange={handleChange} className="input" value={name} />
      <button onClick={submitCity} className="input">
        Add
      </button>
    </div>
  );
};

export default AddCityButton;
