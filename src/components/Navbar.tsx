import React from "react";
import { Link } from "react-router-dom";

const Navbar: any = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Genapi
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/generate" className="nav-link" aria-current="page">
                  Generate
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/apis" className="nav-link" aria-current="page">
                  APIs
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/documentation" className="dropdown-item">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link to="/questions" className="dropdown-item">
                      Q&A
                    </Link>
                  </li>
                  <li>
                    <Link to="/reports" className="dropdown-item">
                      Report a bug
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
