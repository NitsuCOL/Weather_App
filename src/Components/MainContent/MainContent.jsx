import "./MainContent.css";
import NubladoImg from "../../assets/weatherImg/Nublado.webp";

const MainContent = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <main className="main-content-ctn">
        <p className="no-data">Ingresa una ciudad para ver el clima</p>
      </main>
    );
  }

  const date = new Date();
  const formattedDate = new Intl.DateTimeFormat("es-CO", {
    weekday: "long", // día de la semana
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

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
          <p style={{ textTransform: "capitalize" }}>{weatherData.weather[0].description}</p>
        </div>
      </div>
      <img src={NubladoImg} alt="" />
    </main>
  );
};

export default MainContent;
