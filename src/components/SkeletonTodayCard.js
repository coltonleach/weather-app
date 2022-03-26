import React from 'react'
import Bgsun from '../svgComponents/Bgsun'
import './styles/TodayCard.css'

const SkeletonTodayCard = () => {
  return (
    <div className='today-card' style={{padding: '0'}}>
      <div className='skeleton' style={{borderRadius: '2rem'}}>
      </div>
      <Bgsun id='sun' />
    </div>
  )
}

export default SkeletonTodayCard