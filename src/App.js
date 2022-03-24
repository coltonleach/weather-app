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
    </div>
    </>
  )
}

export default App