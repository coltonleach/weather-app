import React from 'react'
import SearchBar from './components/SearchBar'
import SmallCard from './components/SmallCard'
import TodayCard from './components/TodayCard'

const App = () => {
  return (
    <div className='container'>
      <p className="city-name">Austin</p>
      <SearchBar />
      <TodayCard />
      <div className="forecast-container">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  )
}

export default App