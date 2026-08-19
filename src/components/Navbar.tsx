import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>JobTrack</h2>

      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/applications">Applications</Link>
      </div>
    </nav>
  );
}

export default Navbar;