import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import SmallCard from './components/SmallCard'
import TodayCard from './components/TodayCard'
import './styles.css'

const App = () => {
  const [location, setLocation] = useState('New York')
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setLocation(event.target.value)
  }

  const searchLocation = (event) => {
    event.preventDefault()
    axios
      .get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${location}&days=3`)
      .then(res => {
        console.log(res.data)
        setCurrent(res.data.current)
        setForecast(res.data.forecast.forecastday)
        setLocation(res.data.location.name)
      })
  }

  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${location}&days=3`)
    .then(res => {
      console.log(res.data)
      setCurrent(res.data.current)
      setForecast(res.data.forecast.forecastday)
      setLocation(res.data.location.name)
      setLoading(false)
    })
  }, [])
  
  return (<>
    <p className="location-name">{location}</p>
    <div className='container'>
      <SearchBar location={location} searchLocation={searchLocation} handleSearchChange={handleSearchChange}/>
      {loading
      ? <div>aaa</div>
      : <TodayCard current={current} todayInfo={forecast[0]}/>}
      
      {loading
      ? <div>bbb</div>
      : <div className="small-card-container">
          {forecast.map(day => {
            return <SmallCard forecast={day}/>
          })}
        </div>
      }
      {
      loading
      ? null
      : current.is_day
        ? <svg id="sun" width="868" height="901" viewBox="0 0 868 901" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="368" cy="401" r="500" fill="#FFED90" fill-opacity="0.1"/>
            <circle cx="368" cy="401" r="369.863" fill="#FFED90" fill-opacity="0.15"/>
            <circle cx="368" cy="401" r="260.274" fill="#FFED90" fill-opacity="0.45"/>
            <circle cx="368" cy="401" r="158.904" fill="#FFED91" fill-opacity="0.6"/>
          </svg>
        : <svg id="moon" width="840" height="840" viewBox="0 0 840 840" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="420" cy="420" r="420" fill="#F1F0FF" fill-opacity="0.06"/>
            <circle cx="420" cy="420" r="310.685" fill="#F1F0FF" fill-opacity="0.15"/>
            <circle cx="420" cy="420" r="218.63" fill="#F1F0FF" fill-opacity="0.35"/>
            <circle cx="420" cy="420" r="133.479" fill="#F1F0FF" fill-opacity="0.65"/>
          </svg>
      }
    </div>
    </>
  )
}

export default App