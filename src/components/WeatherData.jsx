import { useEffect } from 'react'
import axios from 'axios'
import { baseUrl, codes, icons } from '../helpers/lib'
import '../styles/WeatherData.scss'

export const apiKey = 'ff0c62129a820c0c03dec5cd2bf12045'

function WeatherData({ coords, setWeather, setWeatherCode, location }) {
  useEffect(() => {
    if (coords) {
      getWeatherData(coords)
    } else if (location && location.name) {
      getWeatherDataByLocation(location.name)
    }
  }, [coords, location])

  const getWeatherData = async ({ lat, lon }) => {
    try {
      const res = await axios.get(baseUrl + `lat=${lat}&lon=${lon}&appid=${apiKey}`)
      const codeId = res.data.weather[0].id
      const codesKeys = Object.keys(codes)

      setWeather({
        city: res.data.name,
        country: res.data.sys.country,
        temperature: Math.floor(res.data.main.temp - 273.15),
        main: res.data.weather[0].main,
        description: res.data.weather[0].description,
        clouds: res.data.clouds.all,
        wind: res.data.wind.speed,
        pressure: res.data.main.pressure,
        icon: icons[codesKeys.find((k) => codes[k].includes(codeId))]
      })

      setWeatherCode(codeId)
    } catch (error) {
      console.log('[WEATHER API]', error)
    }
  };

  const getWeatherDataByLocation = async (location) => {
    try {
      const res = await axios.get(`${baseUrl}q=${location}&appid=${apiKey}`)
      const codeId = res.data.weather[0].id
      const codesKeys = Object.keys(codes)

      setWeather({
        city: res.data.name,
        country: res.data.sys.country,
        temperature: Math.floor(res.data.main.temp - 273.15),
        main: res.data.weather[0].main,
        description: res.data.weather[0].description,
        clouds: res.data.clouds.all,
        wind: res.data.wind.speed,
        pressure: res.data.main.pressure,
        icon: icons[codesKeys.find((k) => codes[k].includes(codeId))]
      })

      setWeatherCode(codeId)
      
    } catch (error) {
      console.log('[WEATHER API]', error)
    }
  }

  return null
}

export default WeatherData
