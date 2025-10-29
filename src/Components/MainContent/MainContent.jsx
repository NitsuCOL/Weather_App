import { useState, useEffect } from "react";
import "./MainContent.css";
import soleadoImg from "../../assets/weatherImg/sunnyImage.png";
import nubladoImg from "../../assets/weatherImg/Nublado.webp";
import brumaImage from "../../assets/weatherImg/brumaImage.png";
import electricRainImage from "../../assets/weatherImg/ElectricRainImage.png";
import rainImage from "../../assets/weatherImg/rainImage.png";
import snowyImage from "../../assets/weatherImg/snowyImage.png";

const getWeatherImage = (main) => {
  switch (main) {
    case "Clear": return soleadoImg;
    case "Clouds": return nubladoImg;
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado": return brumaImage;
    case "Thunderstorm": return electricRainImage;
    case "Rain":
    case "Drizzle": return rainImage;
    case "Snow": return snowyImage;
    default: return soleadoImg;
  }
};

const MainContent = ({ weatherData }) => {
  const [displayedData, setDisplayedData] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!weatherData) return;

    setAnimate(false);

    const timeout = setTimeout(() => {
      setDisplayedData(weatherData);
      setAnimate(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [weatherData]);

  if (!displayedData)
    return (
      <main className="main-content-ctn">
        <p className="no-data">Ingresa una ciudad para ver el clima</p>
      </main>
    );

  const formattedDate = new Intl.DateTimeFormat("es", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <main className={`main-content-ctn ${animate ? "animate" : ""}`}>
      <div className="info-main-ctn">
        <div className="location-info-ctn">
          <h2>{displayedData.sys.country}, {displayedData.name}</h2>
          <p>{formattedDate}</p>
        </div>
        <div className="weather-info-ctn">
          <h3>{displayedData.main.temp}°C</h3>
          <p style={{ textTransform: "capitalize" }}>
            {displayedData.weather[0].description}
          </p>
        </div>
      </div>
      <img src={getWeatherImage(displayedData.weather[0].main)} alt="Icono del clima" />
    </main>
  );
};

export default MainContent;
