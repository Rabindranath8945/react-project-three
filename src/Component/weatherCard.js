import React, { useState, useEffect } from "react";

const WeatherCard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    sunset,
    country,
    speed,
    weathermood,
    name,
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState(<i className="fa-solid fa-cloud"></i>);

          break;
        case "Clear":
          setWeatherState(<i className="fa-solid fa-sun-haze"></i>);

          break;
        case "Smoke":
          setWeatherState(<i className="fa-solid fa-smog"></i>);

          break;
        case "Rain":
          setWeatherState(<i className="fa-light fa-cloud-rain"></i>);

          break;

        default:
          setWeatherState(<i className="fa-solid fa-sun-haze"></i>);
          break;
      }
    }
  }, [weathermood]);

  // Converting sunset time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="card-content">
        <div className="card-icon">
          <p>Dummy Icon</p>
          <p>{weatherState}</p>
        </div>
        <div className="card-icon">
          <p>{weathermood}</p>
        </div>
        <div className="card-temp">{temp}</div>
        <div className="card-city">
          {name}, {country}
        </div>
        <div className="card-date-time">
          <p>5/23/2023</p>
          <p>7:42 PM</p>
        </div>
        <div className="card-sunset">
          <p>Dummy Sunset Icon</p>
          <p>{timeStr}</p>
        </div>
        <div className="card-humidity">
          <p>Dummy Humidity Icon</p>
          <p>{humidity}</p>
        </div>
        <div className="card-pressure">
          <p>Dummy Pressure Icon</p>
          <p>{pressure}</p>
        </div>
        <div className="card-wind">
          <p>Dummy Wind Icon</p>
          <p>{speed}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
