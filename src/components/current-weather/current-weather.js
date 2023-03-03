import React from "react";
import "./current-weather.css";

const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
const current_date = new Date(Date.now()).toLocaleString().split(',')[0] ;
const day = new Date().getDay();
const current_day = daylist[day];
const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="title">
        <p>{current_date + ', ' + current_day}</p>
        <p className="city">{data.city}</p>
        <p className="weather-description">{data.weather[0].description}</p>
      </div>
      <div className="top">
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
      </div>
      <div className="bottom">
        <div className="details">
          <div className="parameter-row">
            <span id="center" className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
