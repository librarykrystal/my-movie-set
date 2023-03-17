import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import Add from '../Add/Add';


function App() {
  return (
    <div className="App">
      <h1 className="header">MY MOVIE SET</h1>

      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page BASE MODE - Upgraded version below */}
        {/* <Route path="/details" exact>
          <Details />
        </Route> */}

        {/* Details page with useParams upgrade */}
        <Route path="/details/:id" exact>
          <Details />
        </Route>

        {/* Add page */}
        <Route path="/add" exact>
          <Add />
        </Route>

        {/* Edit page — plan to re-use the add page for editing capability */}   
        {/* <Route path="/edit/:id" exact>
          <Add />
        </Route> */}

        {/* STRETCH TO-DO: Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
