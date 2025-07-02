import React from 'react'
import { LuWind, LuCloudy, LuThermometer } from 'react-icons/lu'


function WeatherDetails({ weather }) {
  return (
    <div className='weather__details'>
      <p className='weather__details-item'><LuWind /> {weather.wind}m/s</p>
      <p className='weather__details-item'><LuCloudy /> {weather.clouds}%</p>
      <p className='weather__details-item'><LuThermometer /> {weather.pressure}hPa</p>
    </div>
  )
}

export default WeatherDetails
