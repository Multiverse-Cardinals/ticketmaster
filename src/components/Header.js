import React from "react";
import { NavLink, Link } from "react-router-dom";
import { SearchBar } from "./GetEvents";

const Header = () => {
  return (
    <nav id="navbar" class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Ticketmaster
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Concerts <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Sports <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Arts & Theater <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Family
                </a>
                <a class="dropdown-item" href="#">
                  Deals
                </a>
                <a class="dropdown-item" href="#">
                  Entertainment Guides
                </a>
              </div>
            </li>
            <div class="divider"></div>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Sign In <span class="sr-only">(current)</span>
              </a>
            </li>{" "}
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Sell <span class="sr-only">(current)</span>
              </a>
            </li>{" "}
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Gift Cards <span class="sr-only">(current)</span>
              </a>
            </li>{" "}
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Help <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Header;
