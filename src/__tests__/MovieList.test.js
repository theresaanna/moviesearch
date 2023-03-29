import React from 'react';
import { render, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import MovieList from '../components/MovieList.jsx';

import data from '../__mocks__/MovieList.json';

describe('MovieList', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  });

  test('renders movie cards', async () => {
    fetchMock.mockResolvedValue({status: 200, json: jest.fn(() => data)});
    const movieList = render(<MovieList/>)
    expect(await screen.findByText("Super 8")).toBeInTheDocument();
    const containers = movieList.getAllByTestId("movie-card");
    expect(containers.length).toBe(10);
  });
});
