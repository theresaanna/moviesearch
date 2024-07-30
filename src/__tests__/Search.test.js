import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import userEvent from '@testing-library/user-event';

import App from '../App.js';
import Search from '../components/Search.jsx';

import data from '../__mocks__/Search.json';
import initialData from '../__mocks__/MovieList.json';

describe('Search', () => {
	beforeEach(() => fetchMock.resetMocks());
	afterEach(cleanup);

	test('displays expected search results', async () => {
		const mockFetch = fetchMock.mockResolvedValue({status: 200, json: jest.fn(() => data)});
		const handleSearch = (ev) => {
			console.log(ev)
		}
		const { getByLabelText } = render(<App handleSearch={handleSearch} movies={initialData} />);
		const searchBox = getByLabelText('search-form');
		userEvent.type(searchBox, 'humble{enter}');
		expect(handleSearch).toHaveBeenCalled();
//		expect(await screen.findByText("Humble Maria")).toBeInTheDocument();


  });
});
