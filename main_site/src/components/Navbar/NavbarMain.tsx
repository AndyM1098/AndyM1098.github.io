import NavbarLinks from "./NavbarLinks";

// src/components/Navbar/Navbar.tsx
function Navbar() {
  return (
    <div className="pt-3">
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">

          {/* Insert image instead of name?*/}

          <NavbarLinks to="/" label="Andrew Mueller" />
          
          {/* This makes it phone friendly, gotta figure out how....
              A mystery for another day!
          */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <NavbarLinks to="/" label="Homepage" />
              <NavbarLinks to="/resume" label="Resume" />
              <NavbarLinks to="/projects" label="Projects" />
              <NavbarLinks to="/about" label="About" />
              <NavbarLinks to="/contact" label="Contact Me" />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
