import React from "react";
// import "./WeatherForecast.css";

const WeatherIcon = (props) => {
  return (
    <div className="weather">
      <img src={props.img} alt={props.imgAlt} />
    </div>
  );
};

export default WeatherIcon;
