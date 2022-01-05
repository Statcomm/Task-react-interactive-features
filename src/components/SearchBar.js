
// Styling


const SearchBar = ({setQuery}) => {

 return <input className="searchBar" placeholder="Search for a cookie name"
 onChange={(event) => setQuery(event.target.value)}/>
  ;
};

export default SearchBar;
