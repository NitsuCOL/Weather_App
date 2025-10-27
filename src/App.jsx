import MainContent from "./Components/MainContent/MainContent"
import SearchBar from "./Components/SearchBar/SearchBar"
import WeatherData from "./Components/WeatherData/WeatherData"


function App() {

  // const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  return (
    <div className='container'>
      <SearchBar />
      <MainContent />
      <WeatherData />
    </div>
  )
}

export default App
