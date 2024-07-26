import "../styles/components/Forecast.css";

export function Forecast({item}) {
  return (
    <div className={"forecast-item"}>
    <img
     src={item.weatherCode.image}
     alt={item.weatherCode.description}
     className="forecast-icon"/>
      <h1 className="temperature">{item.temperature}</h1>
      <p className="time">
        {item.hour}:
      </p>
      </div>
    </div>
  );
}
