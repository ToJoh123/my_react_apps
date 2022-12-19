export default function SearchBar({ search }) { 
    return (
      
        <div className="search-bar">
            {/* <input
                type="text"
                placeholder="Search..."
                onChange={e => search(e.target.value)}
            /> */}
        		<label for="category">Category:</label>
				<select name="category" id="category">
					<option value="all">All</option>
					<option value="jewelry">Jewelry</option>
					<option value="electronics">Electronics</option>
					<option value="women's clothing">women's clothing</option>
				</select>

        </div>
    )
  }