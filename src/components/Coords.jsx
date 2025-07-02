import { useEffect } from 'react'

function Coords({ setCoords, setError }) {
    useEffect(() => {
        try {
          navigator.geolocation.getCurrentPosition(
            (res) => {
              setCoords({
                lat: res.coords.latitude,
                lon: res.coords.longitude,
              })
            },
            (err) => {
              console.log(err)
              setError(err.message)
            }
          )
        } catch (error) {
          console.log('[GEO API]', error)
        }
      }, [setCoords, setError])
    
      return null
}


export default Coords