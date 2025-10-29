import { useEffect, useState } from "react";
import './WeatherData.css';
import waterIcon from '../../assets/icons/waterIcon.svg';
import windIcon from '../../assets/icons/windIcon.svg';
import pressureIcon from '../../assets/icons/pressureIcon.svg';
import sunIcon from '../../assets/icons/sunIcon.svg';
import thermometerIcon from '../../assets/icons/thermometerIcon.svg';

const WeatherData = ({ weatherData }) => {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!weatherData) return;

    setAnimate(false);

    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [weatherData]);

  if (!weatherData) return null;

  const { humidity, pressure, feels_like } = weatherData.main;
  const windSpeed = weatherData.wind.speed;
  const sunrise = new Date(weatherData.sys.sunrise * 1000);

  const formatTime = (date) =>
    new Intl.DateTimeFormat("es-CO", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    }).format(date);

  return (
    <section className="weather-data-ctn">
      <div className="data-card">
        <h4><img src={waterIcon} alt="" /> Humedad</h4>
        <hr />
        <p className={animate ? "animate" : ""}>
          {humidity}%
        </p>
      </div>

      <div className="data-card">
        <h4><img src={windIcon} alt="" /> Viento</h4>
        <hr />
        <p className={animate ? "animate" : ""}>
          {windSpeed} m/s
        </p>
      </div>

      <div className="data-card">
        <h4><img src={pressureIcon} alt="" /> Presión</h4>
        <hr />
        <p className={animate ? "animate" : ""}>
          {pressure} hPa
        </p>
      </div>

      <div className="data-card">
        <h4><img src={sunIcon} alt="" /> Amanecer</h4>
        <hr />
        <p className={animate ? "animate" : ""}>
          {formatTime(sunrise)}
        </p>
      </div>

      <div className="data-card">
        <h4><img src={thermometerIcon} alt="" /> Sensación</h4>
        <hr />
        <p className={animate ? "animate" : ""}>
          {Math.round(feels_like)}°C
        </p>
      </div>
    </section>
  );
};

export default WeatherData;
