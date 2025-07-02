import '../styles/WeatherContent.scss'

function WeatherContent({ weather, temp }) {
  return (
    <div className='weather__content'>
      <span className='weather__icon' role='img' aria-label={weather.description} aria-hidden>
        {weather.icon}
      </span>
      <div className='weather__info'>
        <h2 className='weather__info-item item--temp'>{temp}</h2>
        <h3 className='weather__info-item'>{weather.main}</h3>
        <p className='weather__info-item'>"{weather.description}"</p>
      </div>
    </div>
  );
}

export default WeatherContent
