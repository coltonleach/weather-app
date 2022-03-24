import React from 'react'
import Sun from '../svgComponents/Sun'
import Rain from '../svgComponents/Rain'
import Cloudysun from '../svgComponents/Cloudysun'
import Snowcloud from '../svgComponents/Snowcloud'
import Cloudy from '../svgComponents/Cloudy'

const SmallCardBG = ({ condition }) => {
  if(condition.includes('rain')){
    return <Rain id='small-bg' width='180px'/>
  } else if(condition.includes('Partly cloudy')){
    return <Cloudysun id='small-bg' width='180px'/>
  } else if(condition.includes('snow')){
    return <Snowcloud id='small-bg' width='180px'/>
  } else if(condition.includes('Overcast')){
    return <Cloudy id='small-bg' width='180px'/>
  }

  return <Sun id='small-bg' height='180px'/>
}

export default SmallCardBG