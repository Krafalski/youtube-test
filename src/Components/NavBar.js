// DEPENDENCIES
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/">Youtube</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  );
}
