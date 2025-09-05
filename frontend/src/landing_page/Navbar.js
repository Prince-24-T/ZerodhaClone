import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <a class="navbar-brand" href="/home">
          <img src="/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link style={{ textDecoration: "none" }} to="/signup">
                  <span class="nav-link active" aria-current="page" href="#">
                    Signup
                  </span>
                </Link>

                {/* <a class="nav-link active" aria-current="page" href="#">
                  Signup
                </a> */}
              </li>
              <li class="nav-item">
                <Link style={{ textDecoration: "none" }} to="/about">
                  <span class="nav-link active" href="#">
                    About
                  </span>
                </Link>
              </li>
              <li class="nav-item">
                <Link style={{ textDecoration: "none" }} to="/product">
                  <span class="nav-link active" href="#">
                    Product
                  </span>
                </Link>
              </li>
              <li class="nav-item">
                <Link style={{ textDecoration: "none" }} to="/pricing">
                  <span class="nav-link active" href="#">
                    Pricing
                  </span>
                </Link>
              </li>
              <li class="nav-item">
                <Link style={{ textDecoration: "none" }} to="/support">
                  <span class="nav-link active" href="#">
                    Support
                  </span>
                </Link>
              </li>

              <li class="nav-item">
                <Link style={{ textDecoration: "none" }} to="/login">
                  <span class="nav-link active" href="#">
                    login
                  </span>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
