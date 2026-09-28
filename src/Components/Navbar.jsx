import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <h1>This is Navbar page</h1>

        <div>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="service">service</Link>
        <Link to="contact">contact</Link>
        </div>

        </>
    );
}
export default Navbar;