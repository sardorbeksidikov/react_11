import { useRef } from "react";
import "./Header.scss";
import Logo from "../../assets/images/home/logo (5).svg";

import { IoMdContact } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FcLikePlaceholder } from "react-icons/fc";
import { SlBasket } from "react-icons/sl";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div>
            <img src={Logo} alt="" />
          </div>
          <nav className="nav" ref={navRef}>
            <Link to={"/"}>
              <a href="/#">Home</a>
            </Link>
            <Link to={"/shop"}>
              <a href="/#">Shop</a>
            </Link>
            <Link to={"/about"}>
              <a href="/#">About</a>
            </Link>
            <Link to={'/contact'}>
              <a href="#">Contact</a>
            </Link>

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <div className="nav-icons">
            <button className="nav-icons__btn">
              <IoMdContact />
            </button>

            <button className="nav-icons__btn">
              <CiSearch />
            </button>
            <button className="nav-icons__btn">
              <FcLikePlaceholder />
            </button>
            <button className="nav-icons__btn">
              <SlBasket />
            </button>
          </div>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
