import React, { useState, useEffect } from "react";
import WeatherCard from "./weatherCard";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("Haldia");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=add04c3084c59eda3d48a18b1bb4902c`;

      const res = await fetch(url);
      const data = await res.json();
      // Object destructuring
      const { temp, humidity, pressure } = data.main;
      const { sunset, country } = data.sys;
      const { speed } = data.wind;
      const { main: weathermood } = data.weather[0];
      const { name } = data;

      const myNewWeatherUpdateInfo = {
        temp,
        humidity,
        pressure,
        sunset,
        country,
        speed,
        weathermood,
        name,
      };
      setTempInfo(myNewWeatherUpdateInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div
      className="main-div"
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <div className="card">
        <div className="card-input">
          <input
            type="text"
            placeholder="Enter your city name"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button onClick={getWeatherInfo}>Search</button>
        </div>
        {/* Show Temp Card */}

        <WeatherCard tempInfo={tempInfo} />
      </div>
    </div>
  );
};

export default Temp;
