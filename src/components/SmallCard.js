import React from 'react'
import Wind from '../svgComponents/Wind'
import RainCloud from '../svgComponents/Raincloud'
import SmallCardBG from './SmallCardBG'
import './styles/SmallCard.css'

const SmallCard = ({ forecast }) => {
  return (
    <div className='small-card'>
      <p className='small-card-day'>{forecast.date}</p>
      <p className='small-high-low'>{Math.round(forecast.day.maxtemp_f)}<span className="degree">°</span>/{Math.round(forecast.day.mintemp_f)}<span className="degree">°</span></p>
        <div className='icons'>
          <div className='percipitation'>
            <RainCloud height="30px"/>
            <p>{Math.round(forecast.day.daily_chance_of_rain)}%</p>
          </div>
          <div className='wind'>
            <Wind height='30px'/>
            <p>{Math.round(forecast.hour[12].wind_mph)} mph</p>
          </div>
        </div>
      <p className='small-card-weather'>{forecast.day.condition.text}</p>
      <SmallCardBG condition={forecast.day.condition.text} />
    </div>
  )
}

export default SmallCard