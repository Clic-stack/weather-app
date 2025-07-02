import { useRef, useState } from 'react'
import { apiKey } from './WeatherData'
import { baseUrl } from '../helpers/lib'
import '../styles/ErrorsInput.scss'

function ErrorsInput({ setSearch }) {
  const inputRef = useRef()
  const[error, setError] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    const value = inputRef.current.value.trim()
  
    if (!value) {
      setError('Please enter a valid City or Country')
      return
    }
  
    if (/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]/.test(value)) {
      setError('Please enter a valid name for City or Country, only letters and common writing symbols (no numbers or special characters)')
      return
    }
    
    
  
    if (value.length < 3) {
      setError('Please enter a complete name for City or Country.')
      return
    }
  
    if (value.length > 86) {
      setError('Sorry, the input exceeded the allowed number of characters. Try another locality.')
      return
    }
  
    fetch(`${baseUrl}q=${value}&appid=${apiKey}`)
  .then((response) => {
    if (!response.ok) {
      if (response.status === 404) {
        setError('Please check the name in English, Spanish or with any particular character and try again')
      }
      throw new Error('Response not OK')
    }
    return response.json();
  })
  .then((data) => {
    const normalizeText = (text) =>
      text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

    if (
      !data ||
      !data.name ||
      normalizeText(data.name) !== normalizeText(value)
    ) {
      setError('Please check the name in English, Spanish or with any particular character and try again')
      return
    }
    setSearch(value)
    setError(null)
  })
  .catch((error) => {
    console.error('[ERROR FETCHING DATA]', error)
  })

  
    inputRef.current.value = ''
  }
  

  return (
    <form className="search" onSubmit={handleSubmit}>
        <div className="container">
            <input 
            className="input"
            type="text"
            ref={inputRef}
            placeholder="Enter City or Country" 
            />
            <button className="search__btn">
                Search
            </button>
            {error && <p className="search__error">{error}</p>}
        </div>
    </form>
  )
}

export default ErrorsInput