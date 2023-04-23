import React, { useState } from "react";
import logo from "./logo.svg";
import "./Navbar.css";
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
          <img src={logo} alt="logo" />
        </a>
        <div className="menu">
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <a
                href="#menu1"
                className={activeMenu === "menu1" ? "active" : ""}
                onClick={() => toggleMenu("menu1")}
              >
                menu1
              </a>
            </li>
            <li>
              <a
                href="#menu2"
                className={activeMenu === "menu2" ? "active" : ""}
                onClick={() => toggleMenu("menu2")}
              >
                menu2
              </a>
            </li>
            <li>
              <a
                href="#menu3"
                className={activeMenu === "menu3" ? "active" : ""}
                onClick={() => toggleMenu("menu3")}
              >
                menu3
              </a>
            </li>
            <li>
              <a
                href="#menu4"
                className={activeMenu === "menu4" ? "active" : ""}
                onClick={() => toggleMenu("menu4")}
              >
                menu4
              </a>
            </li>
            <li>
              <a
                href="#menu5"
                className={activeMenu === "menu5" ? "active" : ""}
                onClick={() => toggleMenu("menu5")}
              >
                menu5
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000/home/register"
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
                href="http://localhost:3000/home/login"
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
