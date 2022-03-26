import React from 'react'
import Wind from '../svgComponents/Wind'
import RainCloud from '../svgComponents/Raincloud'
import Bgsun from '../svgComponents/Bgsun'
import Bgmoon from '../svgComponents/Bgmoon'
import Sunrise from '../svgComponents/Sunrise'
import Sunset from '../svgComponents/Sunset'
import './styles/TodayCard.css'

const TodayCard = ({ sunLow, current, todayInfo }) => {

  const compassAngle = {
    transform: `rotate(${current.wind_degree}deg)`
  }

  return (
    <div className='today-card'>
      <p className='today-description'>{current.condition.text}</p>
      <div className='today-container'>
        <div className='today-left'>
          <p className='today-temp'>{Math.round(current.temp_f)}<span className="degree">°</span></p>
          <p className='high-low'>{Math.round(todayInfo.day.maxtemp_f)}<span className="degree">°</span>/{Math.round(todayInfo.day.mintemp_f)}<span className="degree">°</span></p>
          <div className='icons'>
            <div className='percipitation'>
              <RainCloud width="64"/>
              <p>{Math.round(todayInfo.day.daily_chance_of_rain)}%</p>
            </div>
            <div className='wind'>
              <Wind height='50px'/>
              <p>{current.wind_mph} mph</p>
            </div>
          </div>
        </div>
        <div className='today-right'>
          <p>Feels Like: {Math.round(current.feelslike_f)}°</p>
          <p>Wind Direction: <svg id="compass" style={compassAngle} width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polygon points="12 2 19 21 12 17 5 21 12 2"></polygon></svg></p>
          <p>Wind Gust: {current.gust_mph} mph</p>
          <p>Humidity: {current.humidity}%</p>
          <div className='sun-icons'>
            <div className='sunrise'>
              <Sunrise width="57" height="54"/>
              <p>{todayInfo.astro.sunrise.toLowerCase().replace(/^(0+)/g, '')}</p>
            </div>
            <div className='sunset'>
              <Sunset width="57" height="54"/>
              <p>{todayInfo.astro.sunset.toLowerCase().replace(/^(0+)/g, '')}</p>
            </div>
          </div>
        </div>
      </div>
      {current.is_day
        ? <Bgsun id={sunLow ? 'sun-low' : 'sun'} />
        : <Bgmoon id='moon'/>
      }
    </div>
  )
}

export default TodayCard