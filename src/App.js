import Header from './components/Header'
import LeftNav from './components/LeftNav'
import MovieList from './components/MovieList'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <LeftNav/>
      <MovieList/>
    </div>
  );
}

export default App;
