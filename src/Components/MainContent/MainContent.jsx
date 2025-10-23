import './MainContent.css'
import NubladoImg from '../../assets/weatherImg/Nublado.webp'

const MainContent = () => {
  return (
    <main className='main-content-ctn'>
        <div className="info-main-ctn">
            <div className="location-info-ctn">
                <h2>Madrid, España</h2>
                <p>
                    Miercoles, 15 de Mayo de 2024, 14:30
                </p>
            </div>
            <div className="weather-info-ctn">
                <h3>28°C</h3>
                <p>
                    Soleado con algunas nubes
                </p>
            </div>
        </div>
        <img src={NubladoImg} alt="Imagen que representa el clima nublado" />
    </main>
  )
}

export default MainContent