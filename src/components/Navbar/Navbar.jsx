"use client";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });
  const showNavHandler = () => {
    setShowNav(!showNav);
  };
  return (
    <div className={`n-wrapper ${navStyle}`}>
      <div className="container">
        {/* desktop navbar */}
        <div className="n-container">
          <div className="n-left">
            <a href="#">دریافت سرمایه</a>
            <ul>
              <Link to="wwd-wrapper" spy={true} smooth={true}>
                <li>چه کار میکنیم</li>
              </Link>
              <Link to="hiw-wrapper" spy={true} smooth={true} offset={100}>
                <li>چگونه کار میکند</li>
              </Link>
              <Link to="wwi-wrapper" spy={true} smooth={true}>
                <li>روی چه کسی سرمایه گذاری میکنیم</li>
              </Link>
              <Link to="test-wrapper" spy={true} smooth={true} offset={100}>
                <li>رضایت مشتریان</li>
              </Link>
            </ul>
          </div>
          <div className="n-logo">BEHNAMDESIGN</div>
        </div>
      </div>
      {/* mobile and tablet navbar */}
      <div className="nm-container">
        <div onClick={showNavHandler}>
          {showNav ? <IoMdClose size={30} /> : <BiMenuAltRight size={30} />}
        </div>
        <div className="n-logo">BEHNAMDESIGN</div>
        {/* mobile menu */}
        <div
          className={
            showNav
              ? "mobile-menu show-mobile-menu"
              : "mobile-menu hidden-mobile-menu"
          }
        >
          <ul>
            <Link
              to="wwd-wrapper"
              spy={true}
              smooth={true}
              onClick={() => setShowNav(false)}
            >
              <li>چه کار میکنیم</li>
            </Link>
            <Link
              to="hiw-wrapper"
              spy={true}
              smooth={true}
              offset={100}
              onClick={() => setShowNav(false)}
            >
              <li>چگونه کار میکند</li>
            </Link>
            <Link
              to="wwi-wrapper"
              spy={true}
              smooth={true}
              onClick={() => setShowNav(false)}
            >
              <li>روی چه کسی سرمایه گذاری میکنیم</li>
            </Link>
            <Link
              to="test-wrapper"
              spy={true}
              smooth={true}
              offset={100}
              onClick={() => setShowNav(false)}
            >
              <li>رضایت مشتریان</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
