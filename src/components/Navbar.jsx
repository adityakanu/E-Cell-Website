import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <section id="navbar" className="font-Poppins">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">Events</Link>
          </li>

          <li>
            <Link to="/">Gallery</Link>
          </li>

          <li>
            <Link to="/">Our Team</Link>
          </li>

          <li>
            <Link to="/">Testimonials</Link>
          </li>

          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
