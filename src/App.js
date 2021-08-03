import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import ViewBlog from './ViewBlog';
import GoogleSignIn from './GoogleSignIn';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound';
import {auth} from './FirebaseConfig';
import {useAuthState} from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="App">
        {user && <Navbar />}
        <div className="content">
          <Switch>
            <Route exact path="/">
              {user ? <Home /> : <GoogleSignIn />}
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
