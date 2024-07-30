import React from 'react';

const Search = (props) => {
	return (
		<form onSubmit={props.handleSearch}>
			<input aria-label="search-form" name="searchTerm" />
			<button type="submit">Search</button>
		</form>
	);
}

export default Search;
