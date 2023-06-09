import { Link } from "react-router-dom";

const Nav = () => {
    return (
       <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>                    
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
       </div>
    );
};

export default Nav;