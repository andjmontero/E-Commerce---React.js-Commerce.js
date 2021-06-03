import React from "react";
import { FaShoppingCart } from "react-icons/fa";
function NavBar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 brand d-flex">
          <h1>BuzZ Melon</h1>
        </div>
        <div className="col-10 links ">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <FaShoppingCart className="cart-icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
