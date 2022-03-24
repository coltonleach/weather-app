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

  //  searchbarStyle.backgroundColor = '#FC7174'
  //  todayCardStyles.backgroundColor = '#FC8862'
  //  todayCardStyles.color = '#EEF4ED'
  //  smallCardStyles.backgroundColor = '#FDBB63'
  //  smallCardStyles.color ='#EEF4ED'
  //  background: linear-gradient(180deg, #FF4448 0%, #F75947 23.44%, #FC8862 49.48%, #FCA26B 75%, #FDBB63 100%);
  //  background-blend-mode: hard-light;


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