import React from 'react'
import Bgsun from '../svgComponents/Bgsun'
import './styles/TodayCard.css'

const SkeletonTodayCard = () => {
  return (/*  Had to inline style these two in order for the loading animation to correctly display,
              that way i didn't have multiple copies of the same class with minor tweaks and avoid unnecessary utility classes */
    <div className='today-card' style={{padding: '0'}}>
      <div className='skeleton' style={{borderRadius: '2rem'}}>
      </div>
      <Bgsun id='sun' />
    </div>
  )
}

export default SkeletonTodayCard