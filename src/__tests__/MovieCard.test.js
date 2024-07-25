import React from 'react';
import { render, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import MovieCard from '../components/MovieCard.jsx';

import data from '../__mocks__/MovieCard.json';

describe('MovieCard', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  });

  test('renders all elements to card', async () => {
    const imdbid = {"imdbID": "tt8912936"};
    fetchMock.mockResolvedValue({status: 200, json: jest.fn(() => data)});
    const movieCard = render(<MovieCard movie={data} />)
    /* title */
    expect(await screen.findByText("DC League of Super-Pets")).toBeInTheDocument();
    /* year */
    expect(await screen.findByText("2022")).toBeInTheDocument();
    /* poster */
  });
});
