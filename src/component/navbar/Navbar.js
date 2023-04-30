import React, { useState } from "react";
import logo from "../../static/logo_long.png";
import "./Navbar.css";
import {BASE_URL} from '../../URL.js';
function Navbar() {
  const [activeMenu, setActiveMenu] = useState("menu1");
  const [clicked, setclicked] = useState(false);
  function toggleMenu(menu) {
    setActiveMenu(menu);
  }

  function updateClicked() {
    setclicked(!clicked);
  }



  return (
    <>
      <nav>
        <a href="#index">
          <img src={logo} alt="logo" className="logo"/>
        </a>
        <div className="menu">
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <a
                href="#header"
                className={activeMenu === "header" ? "active" : ""}
                onClick={() => toggleMenu("header")}
              >
                Home
              </a>
            </li>
            {/* <li>
              <a
                href="#menu2"
                className={activeMenu === "menu2" ? "active" : ""}
                onClick={() => toggleMenu("menu2")}
              >
                menu2
              </a>
            </li> */}
            <li>
              <a
                href="#overview"
                className={activeMenu === "overview" ? "active" : ""}
                onClick={() => toggleMenu("overview")}
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className={activeMenu === "FAQ" ? "active" : ""}
                onClick={() => toggleMenu("FAQ")}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className={activeMenu === "contact" ? "active" : ""}
                onClick={() => toggleMenu("contact")}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href={`${BASE_URL}register`}
                className={activeMenu === "joinus" ? "active" : ""}
                onClick={() => {
                  toggleMenu("joinus");
                }}
              >
                Join Us
              </a>
            </li>
            <li>
              <a
                href={`${BASE_URL}login`}
                className={activeMenu === "login" ? "active" : ""}
                onClick={() => toggleMenu("login")}
              >
                Log in
              </a>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={() => updateClicked()}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
