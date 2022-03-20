import React from 'react'
import SearchBar from './components/SearchBar'
import SmallCard from './components/SmallCard'
import TodayCard from './components/TodayCard'
import './styles.css'

const App = () => {
  return (
    <div className='container'>
      <p className="location-name">Austin</p>
      <SearchBar />
      <TodayCard />
      <div className="small-card-container">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  )
}

export default App