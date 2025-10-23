import './SearchBar.css'
import searchIcon from '../../assets/icons/searchIcon.svg'

const SearchBar = () => {
  return (
    <div className='search-bar-ctn'>
        <form>
            <img src={searchIcon} alt="Searcher Icon" />
            <input type="text" placeholder='Buscar ciudad...'/>
        </form>
    </div>
  )
}

export default SearchBar