import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import SmallCard from './components/SmallCard'
import TodayCard from './components/TodayCard'
import SkeletonTodayCard from './components/SkeletonTodayCard'
import SkeletonSmallCard from './components/SkeletonSmallCard'
import './styles.css'

const App = () => {

  const [location, setLocation] = useState('Kiev')
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(true)
  const [time, setTime] = useState('midday')
  const [sunLow, setSunLow] = useState(false)

  const fetInfo = () => {
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${location}&days=3`)
    .then(res => {
      setCurrent(res.data.current)
      setForecast(res.data.forecast.forecastday)
      setLocation(res.data.location.name)
      setTimeout(()=> setLoading(false), 1000)
      const date = new Date(res.data.location.localtime + "Z")
      theme(date.getUTCHours())
    })
  }

  const theme = (hours) => {
    if(7 <= hours && hours < 9){ //sunrise
      document.documentElement.style.setProperty('--font-clr', '#EEF4ED')
      document.documentElement.style.setProperty('--search-bar-clr', '#FC7174')
      document.documentElement.style.setProperty('--today-card-clr', '#FC8862')
      document.documentElement.style.setProperty('--small-card-clr', '#FDBB63')
      document.documentElement.style.setProperty('--gradient-clr', 'linear-gradient(180deg, #FF8285 0%, #FEA983 23.44%, #FFF5B6 49.48%, #FFF7C8 75%, #FFF9B8 100%)')
      setSunLow(true)
      setTime('sunrise')
    }else if(9 <= hours && hours < 19){ //midday
      document.documentElement.style.setProperty('--font-clr', '#37342f')
      document.documentElement.style.setProperty('--search-bar-clr', '#bde8ff')
      document.documentElement.style.setProperty('--today-card-clr', '#94d8ff')
      document.documentElement.style.setProperty('--small-card-clr', '#5cc3ff')
      document.documentElement.style.setProperty('--gradient-clr', 'linear-gradient(180deg, hsl(202, 100%, 89%) 20.31%, hsl(202, 76%, 71%) 100%)')
      setSunLow(false)
      setTime('midday')
    }else if(19 <= hours && hours < 21){ //sunset
      document.documentElement.style.setProperty('--font-clr', '#EEF4ED')
      document.documentElement.style.setProperty('--search-bar-clr', '#355070')
      document.documentElement.style.setProperty('--today-card-clr', '#B56576')
      document.documentElement.style.setProperty('--small-card-clr', '#F19563')
      document.documentElement.style.setProperty('--gradient-clr', 'linear-gradient(180deg, #355070 0%, #6D597A 23.44%, #B56576 49.48%, #E56B6F 75%, #EAAC8B 100%)')
      setSunLow(true)
      setTime('sunset')
    }else { //midnight
      document.documentElement.style.setProperty('--font-clr', '#EEF4ED')
      document.documentElement.style.setProperty('--search-bar-clr', '#3B494F')
      document.documentElement.style.setProperty('--today-card-clr', '#2F393D')
      document.documentElement.style.setProperty('--small-card-clr', '#303337')
      document.documentElement.style.setProperty('--gradient-clr', 'linear-gradient(180deg, #5E548E 0%, #393752 61.46%, #1C192D 100%)')
      setTime('midnight')
    }
  }

  const handleSearchChange = (event) => {
    setLocation(event.target.value)
  }

  const searchLocation = (event) => {
    event.preventDefault()
    fetInfo()
  }

  useEffect(() => {
    fetInfo()
  }, [])
  
  return (<>
    <p className="location-name">{location}</p>
    <div className='container'>
      <SearchBar location={location} searchLocation={searchLocation} handleSearchChange={handleSearchChange}/>
      {loading //if loading == true: display SkeletonTodayCard, else: TodayCard
      ? <SkeletonTodayCard />
      : <TodayCard sunLow={sunLow} current={current} todayInfo={forecast[0]}/>}
      
      {loading
      ? <div className="small-card-container">
          <SkeletonSmallCard />
          <SkeletonSmallCard />
          <SkeletonSmallCard />
        </div>
      : <div className="small-card-container">
          {forecast.map(day => { //The api returns multiple days in a forecast object. For each day, return a SmallCard component with the respective data
            return <SmallCard key={day.date} forecast={day}/>
          })}
        </div>
      }
    </div>
    </>
  )
}

export default App