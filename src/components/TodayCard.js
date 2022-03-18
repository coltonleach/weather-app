import React from 'react'

const TodayCard = () => {
  return (
    <div className='today-card'>
      <p>Today - Clear</p>
      <div className='today-left'>
        <p>58°</p>
        <p>81°/46°</p>
        <div className='percipitation'>
        <p>0%</p>
        </div>
        <div className="wind">
          <p>5 mph</p>
        </div>
      </div>
      <div className='today-right'>
        <p>Allergy Forecast</p>
        <p>Grass: Low</p>
        <p>Tree: Low</p>
        <p>Ragweed: Low</p>
      </div>
    </div>
  )
}

export default TodayCard