import { codes } from '../helpers/lib.js'

function GetBackGroundImages(code) {
    const backgrounds ={
        thunderstorm: '/public/images/thunderstorm.jpg',
        drizzle: '/public/images/drizle.jpg',
        rain: '/public/images/Rain.jpg',
        snow: '/public/images/Snow.jpg',
        atmosphere: '/public/images/atmosphere.jpg',
        clear: '/public/images/clear.jpg',
        clouds: '/public/images/clouds.jpg'
    }
    
    if (codes.thunderstorm.includes(code)) return backgrounds.thunderstorm
    if (codes.drizzle.includes(code)) return backgrounds.drizzle
    if (codes.rain.includes(code)) return backgrounds.rain
    if (codes.snow.includes(code)) return backgrounds.snow
    if (codes.atmosphere.includes(code)) return backgrounds.atmosphere
    if (codes.clear.includes(code)) return backgrounds.clear
    if (codes.clouds.includes(code)) return backgrounds.clouds

  return 'default.jpg'
}

export default GetBackGroundImages
