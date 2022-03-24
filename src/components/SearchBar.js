import React from 'react'
import Search from '../svgComponents/Search'
import './styles/SearchBar.css'

const SearchBar = ({ style, location, searchLocation, handleSearchChange }) => {

  return (
    <form onSubmit={searchLocation} className="container-search">
      <input style={style} className='search-bar' placeholder='Search Location' value={location} onChange={handleSearchChange}></input>
      <Search width="26" height="26"/>
      
    </form>
  )
}

export default SearchBar