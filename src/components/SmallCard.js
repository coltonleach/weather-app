import React from 'react'
import './styles/SmallCard.css'

const SmallCard = () => {
  return (
    <div className='small-card'>
      <p className='small-card-day'>Tonight</p>
      <p className='small-card-temp'>58<span className='degree'>°</span></p>
      <p className='small-card-high-low'>80<span className='degree'>°</span>/48<span className='degree'>°</span></p>
      <p className='small-card-weather'>Clear</p>
    </div>
  )
}

export default SmallCard