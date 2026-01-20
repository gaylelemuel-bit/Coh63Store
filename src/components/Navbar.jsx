import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from '../State/GlobalContext';
import { IconUserCircle,IconShoppingCart } from '@tabler/icons-react';
import "./Navbar.css"; 

function Navbar() {

  const user = useContext(GlobalContext).user
  const cart =useContext(GlobalContext).cart

  function getTotalItems(){
    let sum = 0

    for(let i=0; i< cart.length; i++){
      sum = sum + cart[i].quantity
    }

    return sum
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container">
        
        <a className="navbar-brand d-flex align-items-center fw-bold fs-3" href="/">
          <span className="me-2">𑣲†</span> Enduo Apparel
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
              <Link className="nav-link px-3" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to={"/catalog"}>Catalog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to={"/about"}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to={"/contact"}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to={"/admin"}>Admin</Link>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <div><IconUserCircle stroke={2} color={'royalblue'} />{user.name}</div>
          </div>
          <div className="ms-lg-3 d-none d-lg-block">
             <Link className="btn btn-outline-dark rounded-pill px-4 btn-sm" to={"/cart"}><IconShoppingCart stroke={2} />Cart {getTotalItems()}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
