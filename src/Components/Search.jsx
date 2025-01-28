import { useState } from "react";
import './Product/Product.css';


const Search = ({onSearch}) => {

    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {

        setQuery(event.target.value);

        onSearch(event.target.value);

    }

    return (

        <div className="search-bar">
        <img  src="../icons/search.png"className="search-icon"></img>
        <input
            type="text"
            placeholder="Search for product..."
            value={query}
            onChange={handleInputChange}
            className="form-control"
        />
    </div>

    )

}

export default Search;