import React from 'react'
import Search from '../svgComponents/Search'
import './styles/SearchBar.css'

const SearchBar = ({ location, searchLocation, handleSearchChange }) => {

  return (
    <form onSubmit={searchLocation} className="container-search">
      <input className='search-bar' placeholder='Search Location' value={location} onChange={handleSearchChange}></input>
      <Search onClick={searchLocation} width="26" height="26"/>
    </form>
  )
}

export default SearchBar