import { useEffect, useState } from "react"
import MainContent from "./Components/MainContent/MainContent"
import SearchBar from "./Components/SearchBar/SearchBar"
import WeatherData from "./Components/WeatherData/WeatherData"


function App() {

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const [city, setCity] = useState("Bogotá");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  }

  useEffect(() => {
    if(city === "") return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`)
      .then(resp => resp.json())
      .then(data => {
        if(data.cod === "404"){
          alert("Ciudad no encontrada.");
          return;
        }
        setWeatherData(data);
      })
      .catch(error => console.log(error))
  }, [city])

  return (
    <div className='container'>
      <SearchBar onSearch={handleSearch} />
      <MainContent weatherData={weatherData} />
      <WeatherData weatherData={weatherData} />
    </div>
  )
}

export default App
