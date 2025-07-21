import React from "react";
// import "./src/App.css";
import "./WeatherForecast.css";

const WeatherData = (props) => {
  return (
    <div className="weather">
      <h2>{props.day}</h2>
      <p>
        <span>conditions: </span>
        {props.conditions}
      </p>
      <p>
        <span>time: </span>
        {props.time}
      </p>
    </div>
  );
};

export default WeatherData;
