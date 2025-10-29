import "./MainContent.css";
import soleadoImg from "../../assets/weatherImg/sunnyImage.png";
import nubladoImg from "../../assets/weatherImg/Nublado.webp";
import brumaImage from "../../assets/weatherImg/brumaImage.png";
import electricRainImage from "../../assets/weatherImg/ElectricRainImage.png";
import rainImage from "../../assets/weatherImg/rainImage.png";
import snowyImage from "../../assets/weatherImg/snowyImage.png";

const getWeatherImage = (main) => {
  switch (main) {
    case "Clear":
      return soleadoImg;
    case "Clouds":
      return nubladoImg;
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return brumaImage;
    case "Thunderstorm":
      return electricRainImage;
    case "Rain":
    case "Drizzle":
      return rainImage;
    case "Snow":
      return snowyImage;
    default:
      return soleadoImg;
  }
};

const MainContent = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <main className="main-content-ctn">
        <p className="no-data">Ingresa una ciudad para ver el clima</p>
      </main>
    );
  }

  const formattedDate = new Intl.DateTimeFormat("es", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <main className="main-content-ctn">
      <div className="info-main-ctn">
        <div className="location-info-ctn">
          <h2>
            {weatherData.sys.country}, {weatherData.name}
          </h2>
          <p>{formattedDate}</p>
        </div>
        <div className="weather-info-ctn">
          <h3>{weatherData.main.temp}°C</h3>
          <p style={{ textTransform: "capitalize" }}>
            {weatherData.weather[0].description}
          </p>
        </div>
      </div>
      <img src={getWeatherImage(weatherData.weather[0].main)} alt="" />
    </main>
  );
};

export default MainContent;
