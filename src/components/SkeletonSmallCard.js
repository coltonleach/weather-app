import React from 'react'
import './styles/SmallCard.css'

const SkeletonSmallCard = () => {
  return (
    <div className='small-card' style={{padding: "0"}}>
      <div className='skeleton'></div>
    </div>
  )
}

export default SkeletonSmallCard