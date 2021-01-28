import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const CityList = () => {
  const { cities, remove } = useContext(WeatherContext);

  return (
    <table className="city-list">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city, index) => (
          <tr key={city.id}>
            <td>{city.name}</td>
            <td>{city.temperature}</td>
            <td>
              <button
                onClick={(e) => remove(city.id)}
                name={index}
                className="input"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CityList;
