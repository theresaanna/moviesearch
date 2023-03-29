import { act, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import MovieList from '../components/MovieList.js'

test('has a heading', () => {
  const {asFragment, getByText} = render(<MovieList/>);
  expect(getByText('Movie List')).toBeInTheDocument();
});
