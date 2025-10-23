import MainContent from "./Components/MainContent/MainContent"
import SearchBar from "./Components/SearchBar/SearchBar"
import WeatherData from "./Components/WeatherData/WeatherData"


function App() {

  return (
    <div className='container'>
      <SearchBar />
      <MainContent />
      <WeatherData />
    </div>
  )
}

export default App
