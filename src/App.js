import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import ViewBlog from './ViewBlog';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <ViewBlog />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
