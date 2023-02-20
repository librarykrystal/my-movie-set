import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';

function App() {
  return (
    <div className="App">
      <h1 className="header">THE MOVIES SAGA</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        {/* <Route path="/details" exact>
          <Details />
        </Route> */}

        {/* Details page */}
        <Route path="/details/:id" exact>
          <Details />
        </Route>

        {/* STRETCH TO-DO: Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
