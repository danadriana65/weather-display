import "../styles/components/WeatherIcon.css";
import { getWeatherCodeData } from "../utilities/weather_codes";

export function WeatherIcon({weather=getWeatherCodeData(0,false),alt = false,}) {
  // console.log(weatherCode);
  // return;
  
  return (
    <div className={`weather-icon-container ${alt && "alt-background"}`}>
      <img src={weather.image} alt={weather.description} className="weather-icon" />
      <h3 className="weather-icon-description">{weather.description} </h3>
    </div>
  );
}
