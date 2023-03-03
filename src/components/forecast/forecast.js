import React from "react";

import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
// import 'swiper/css/scrollbar';
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className="accordion">
      <label className="title">Daily Forecast</label>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
       
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet swiper-pagination-bullet-active`,
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {data.list.splice(0, 7).map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="daily-item">
              <img
                src={`icons/${item.weather[0].icon}.png`}
                className="icon-small"
                alt="weather"
              />
              <label className="day">{forecastDays[idx]}</label>
              <label className="description">
                {item.weather[0].description}
              </label>
              <label className="min-max">
                {Math.round(item.main.temp_max)}°C /
                {Math.round(item.main.temp_min)}°C
              </label>
            </div>

            <div className="daily-details-grid">
              <div className="daily-details-grid-item">
                <label>Pressure:</label>
                <label>{item.main.pressure}</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Humidity:</label>
                <label>{item.main.humidity}</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Clouds:</label>
                <label>{item.clouds.all}%</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Wind speed:</label>
                <label>{item.wind.speed} m/s</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Sea level:</label>
                <label>{item.main.sea_level}m</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Feels like:</label>
                <label>{item.main.feels_like}°C</label>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Forecast;
