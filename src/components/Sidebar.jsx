import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column align-items-center p-3">
      <ul className="cv-styles">
        <li>
          <Link to="/">
            <img src="/classic_cv.png" alt="Classic CV" />
          </Link>
        </li>
        <li>
          <Link to="/modern">
            <img src="/modern_cv.png" alt="Modern CV" />
          </Link>
        </li>
        <li>
          <Link to="/projects">
            {/* <img src="/projects.png" alt="Projects" /> */}
            <p style={{color:"white"}}>Projects</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar; 