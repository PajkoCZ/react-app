import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
       <section>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li></li>
            <li></li>
        </ul>
       </section>
    )
}

export default Navbar;