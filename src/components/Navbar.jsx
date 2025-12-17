import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container">
        
        <a className="navbar-brand d-flex align-items-center fw-bold fs-3" href="/">
          <span className="me-2">𑣲†</span> G2G
        </a>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase small fw-semibold">
            <li className="nav-item">
              <a className="nav-link px-3" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#catalog">Catalog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#contact">Contact</a>
            </li>
          </ul>
          
          <div className="ms-lg-3 d-none d-lg-block">
             <button className="btn btn-outline-dark rounded-pill px-4 btn-sm">Cart (0)</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
