import '../styles/WeatherButton.scss'

function WeatherButton({ isCelsius, setIsCelsius }) {
  return (
   <button type='button' className='btn' onClick={() => setIsCelsius(!isCelsius)}>
   Change to {isCelsius ? 'Fahrenheit' : 'Celsius'}
 </button>
  )
}

export default WeatherButton