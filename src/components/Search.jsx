import React from 'react';

const Search = (props) => {
	return (
		<form onSubmit={props.handleSearch}>
			<input name="searchTerm" />
			<button type="submit">Search</button>
		</form>
	);
}

export default Search;
