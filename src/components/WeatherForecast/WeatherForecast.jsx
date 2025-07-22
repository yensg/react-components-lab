import React from "react";
// import styles from "./WeatherForecast.module.css";
// import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

// module.css doesnt work? why it still showing flex?
// there's no way we can insert weatherIcon within weatherData?
// why we cant use rsc?

function WeatherForecast(props) {
  const weatherIcon = () => {
    return <WeatherIcon img={props.img} imgAlt={props.imgAlt} />;
  };
  const weatherData = () => {
    return (
      <WeatherData
        day={props.day}
        conditions={props.conditions}
        time={props.time}
      />
    );
  };

  return (
    <div className="weather">
      {weatherIcon()}
      {weatherData()}
    </div>
  );
}

export default WeatherForecast;

//why this function needs to be invoked but arrow function no need?

//   return (
//     <div className="weather">
//       <h2>{props.day}</h2>
//       <img src={props.img} alt={props.imgAlt} />
//       <p>
//         <span>conditions: </span>
//         {props.conditions}
//       </p>
//       <p>
//         <span>time: </span>
//         {props.time}
//       </p>
//     </div>
//   );
// }
