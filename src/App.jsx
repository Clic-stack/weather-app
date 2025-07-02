import { useEffect, useState } from 'react'
import './styles/App.scss'
import WeatherData, { apiKey } from './components/WeatherData'
import Loading from './components/Loading'
import WeatherTitle from './components/WeatherTitle'
import WeatherCity from './components/WeatherCity'
import WeatherContent from './components/WeatherContent'
import WeatherDetails from './components/WeatherDetails'
import WeatherButton from './components/WeatherButton'
import GetBackGroundImages from './components/GetBackGroundImages'
import { baseUrl } from './helpers/lib'
import './styles/Error.scss'
import ErrorsInput from './components/ErrorsInput'

function App() {
  const [coords, setCoords] = useState(null)
  const [weather, setWeather] = useState(null)
  const [weatherCode, setWeatherCode] = useState(null)
  const [isCelsius, setIsCelsius] = useState(true)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState('')
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  useEffect(() => {
    if (weatherCode) {
      const backgroundImage = GetBackGroundImages(weatherCode)
      document.body.style.backgroundImage = `url(${backgroundImage})`
    }
  }, [weatherCode])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
          setError(null)
        },
        (error) => {
          setError('Error getting geolocation: Please enable your location to get the weather data for your locality automatically')
          setLoading(false)
          setLocation(null)
          setWeather(null)
        }
      )
    } else {
      setError('Geolocation is not supported by this browser')
      setLoading(false)
      setLocation(null)
      setWeather(null)
    }
  }, [])
  
  useEffect(() => {
    if (search) {
      fetch(`${baseUrl}q=${search}&appid=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          setLocation(data)
          setError(null)
        })
        .catch((error) => {
          setError('Error fetching weather data: Please check your internet connection and try again ')
          setLocation(null)
          setWeather(null)
        })
    }
  }, [search])

  const temp = isCelsius ? (weather && weather.temperature + '°C') : (weather && weather.temperature * 9) / 5 + 32 + '°F'

  return (
    <>
      {loading && <Loading />}
      <div className={`weather ${loading ? 'hidden' : ''}`}>
        {error ? (
          <div className='error__message'>
            <p>{error}</p>
          </div>
        ) : (
          <>
        <ErrorsInput setSearch={setSearch} />
        <WeatherData 
          location={location || null} 
          setWeather={setWeather} 
          setWeatherCode={setWeatherCode} 
          coords={search ? null : coords} 
        />

        {weather && (
          <>
            <WeatherTitle />
            <WeatherCity city={weather.city} country={weather.country} />
            <WeatherContent weather={weather} temp={temp} />
            <WeatherDetails weather={weather} />
            <WeatherButton isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
          </>
          )}
          </>
        )}
      </div>
    </>
  );
}

export default App;