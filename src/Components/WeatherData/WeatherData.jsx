import './WeatherData.css'
import waterIcon from '../../assets/icons/waterIcon.svg'
import windIcon from '../../assets/icons/windIcon.svg'
import pressureIcon from '../../assets/icons/pressureIcon.svg'
import uvRayIcon from '../../assets/icons/uvRayIcon.svg'
import sunIcon from '../../assets/icons/sunIcon.svg'
import thermometerIcon from '../../assets/icons/thermometerIcon.svg'

const WeatherData = () => {
  return (
    <section className='weather-data-ctn'>
      <div className='data-card'>
        <h4><img src={waterIcon} alt="Icono de una gota de agua" /> Humedad</h4>
        <hr />
        <p>
          60%
        </p>
      </div>
      <div className='data-card'>
        <h4><img src={windIcon} alt="Icono del viento" /> Viento</h4>
        <hr />
        <p>
          60%
        </p>
      </div>
      <div className='data-card'>
        <h4><img src={pressureIcon} alt="Icono de la presion" /> Presión</h4>
        <hr />
        <p>
          60%
        </p>
      </div>
      <div className='data-card'>
        <h4><img src={uvRayIcon} alt="Icono de los rayos UV" /> UV</h4>
        <hr />
        <p>
          60%
        </p>
      </div>
      <div className='data-card'>
        <h4><img src={sunIcon} alt="Icono del sol" /> Amanecer</h4>
        <hr />
        <p>
          60%
        </p>
      </div>
      <div className='data-card'>
        <h4><img src={thermometerIcon} alt="Icono de un termometro" /> Sensación</h4>
        <hr />
        <p>
          60%
        </p>
      </div>
    </section>
  )
}

export default WeatherData