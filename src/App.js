import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import SmallCard from './components/SmallCard'
import TodayCard from './components/TodayCard'
import './styles.css'

const App = () => {

  // sunrise background: linear-gradient(180deg, #FF8285 0%, #FEA983 23.44%, #FFF5B6 49.48%, #FFF7C8 75%, #FFF9B8 100%)
  // midday background: linear-gradient(180deg, #C9EBFF 20.31%, #7CC4ED 100%)
  // sunset background: linear-gradient(180deg, #355070 0%, #6D597A 23.44%, #B56576 49.48%, #E56B6F 75%, #EAAC8B 100%)
  // midnight background: linear-gradient(180deg, #5E548E 0%, #393752 61.46%, #1C192D 100%)


  const [location, setLocation] = useState('New York')
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(true)
  const [styles, setStyles] = useState([
    {
      searchbarStyle: {
        backgroundColor: '#bde8ff',
      },
      todayCardStyles: {
        backgroundColor: '#94d8ff',
        color: '#37342f',
      },
      smallCardStyles: {
        backgroundColor: '#5cc3ff',
        color: '#37342f',
      }
    }
  ])
  const [time, setTime] = useState('sunset')

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

      if(time === 'sunrise'){
        setStyles({
          ...styles,
          searchbarStyle: {
            backgroundColor: '#FC7174',
          },
          todayCardStyles: {
            backgroundColor: '#FC8862',
            color: '#EEF4ED',
          },
          smallCardStyles: {
            backgroundColor: '#FDBB63',
            color: '#EEF4ED',
          }
        })
      }
  }

  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${location}&days=3`)
    .then(res => {
      console.log(res.data)
      setCurrent(res.data.current)
      setForecast(res.data.forecast.forecastday)
      setLocation(res.data.location.name)
      setLoading(false)
      const date = new Date(res.data.location.localtime + "Z")
      console.log(date.getUTCHours())
      setStyles({
        ...styles,
        searchbarStyle: {
          backgroundColor: '#bde8ff',
          color: '#37342f',
        },
        todayCardStyles: {
          backgroundColor: '#94d8ff',
          color: '#37342f',
        },
        smallCardStyles: {
          backgroundColor: '#5cc3ff',
          color: '#37342f',
        }
      })

      if(time === 'sunrise'){
        setStyles({
          ...styles,
          searchbarStyle: {
            backgroundColor: '#FC7174',
            color: '#EEF4ED',
          },
          todayCardStyles: {
            backgroundColor: '#FC8862',
            color: '#EEF4ED',
          },
          smallCardStyles: {
            backgroundColor: '#FDBB63',
            color: '#EEF4ED',
          }
        })
      }else if(time === 'sunset'){
        setStyles({
          ...styles,
          searchbarStyle: {
            backgroundColor: '#355070',
            color: '#EEF4ED',
          },
          todayCardStyles: {
            backgroundColor: '#B56576',
            color: '#EEF4ED',
          },
          smallCardStyles: {
            backgroundColor: '#F19563',
            color: '#EEF4ED',
          }
        })
      }else if(time === 'midnight'){
        setStyles({
          ...styles,
          searchbarStyle: {
            backgroundColor: '#3B494F',
            color: '#EEF4ED',
          },
          todayCardStyles: {
            backgroundColor: '#2F393D',
            color: '#EEF4ED',
          },
          smallCardStyles: {
            backgroundColor: '#303337',
            color: '#EEF4ED',
          }
        })
      }
    })
  }, [])
  
  return (<>
    <p className="location-name">{location}</p>
    <div className='container'>
      <SearchBar style={styles.searchbarStyle} location={location} searchLocation={searchLocation} handleSearchChange={handleSearchChange}/>
      {loading
      ? <div>aaa</div>
      : <TodayCard style={styles.todayCardStyles} current={current} todayInfo={forecast[0]}/>}
      
      {loading
      ? <div>bbb</div>
      : <div className="small-card-container">
          {forecast.map(day => {
            return <SmallCard style={styles.smallCardStyles} forecast={day}/>
          })}
        </div>
      }
    </div>
    </>
  )
}

export default App