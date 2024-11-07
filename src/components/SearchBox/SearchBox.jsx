import css from './SearchBox.module.css';

const SearchBox = ({valueFilter, setFilter}) => {
 return (<div className={css.searchContainer}>
	<p className={css.searchText}>Find contacts by name</p>
	<input className={css.searchInput} type="text" name="searchInput" value={valueFilter} onChange={(e) => setFilter(e.target.value)}></input>
 </div>)
}

export default SearchBox;