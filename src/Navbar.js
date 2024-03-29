import {Link} from 'react-router-dom';
import {auth} from './FirebaseConfig';

const Navbar = () => {
    const signOut = () => {
        auth.signOut();
    }

    return ( 
        <nav className="navbar">
            <h1>Nerds' Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">NewBlog</Link>
            </div>
            <button className="sign-out" onClick={signOut}>Sign Out</button>
        </nav>
     );
}
 
export default Navbar;
