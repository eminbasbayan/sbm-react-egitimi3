import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="position-fixed w-100 top-0 start-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Website
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link position-relative" href="#">
                  <i className="bi bi-cart"></i>

                  <span className="position-absolute top-4 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
