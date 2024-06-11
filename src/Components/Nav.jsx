import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-0 py-3">
      <div className="container-xl">
        {/* <!-- Logo --> */}
        <a className="navbar-brand" >
          <img
            src="https://preview.webpixels.io/web/img/logos/clever-light.svg"
            className="h-4"
            alt="..."
          />
        </a>
        {/* <!-- Navbar toggle --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Collapse --> */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {/* <!-- Nav --> */}
          <div className="navbar-nav mx-lg-auto">
            <a className="nav-item nav-link active" aria-current="page">
              Home
            </a>
            <a className="nav-item nav-link">
              About Us
            </a>
            <a className="nav-item nav-link" >
              Services
            </a>
            <a className="nav-item nav-link" >
              Contact Us
            </a>
          </div>
          {/* <!-- Right navigation --> */}
          {/* <!-- Action --> */}
          <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
            <a className="btn btn-warning w-full w-lg-auto fw-semibold">
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
