import './SearchBar.css'
import searchIcon from '../../assets/icons/searchIcon.svg'
import { useState } from 'react'

const SearchBar = ({ onSearch }) => {

  const [city, setCity] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if(city.trim() === "") return;
    onSearch(city);
    setCity("");
  }

  return (
    <div className='search-bar-ctn'>
        <form onSubmit={handlesubmit}>
            <img src={searchIcon} alt="Searcher Icon" />
            <input 
              type="text"
              placeholder='Buscar ciudad...'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
        </form>
    </div>
  )
}

export default SearchBar