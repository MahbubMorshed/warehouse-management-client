import React from "react";
import "./footer.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaArtstation } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="bg-dark">
      <div className="footer-menu">
        <a href="#">Home</a>
        <a href="#inventory">Inventory</a>
        <a href="#">Add Item</a>
        <a href="#">Manage Item</a>
        <a href="#">Blog</a>
        <a href="#">About</a>
      </div>
      <div>
        <p>
          <b>copy right &copy; {year} computer source</b>
        </p>
      </div>
      <div>
        <a className="footer-logo">Computer Source</a>
        <div className="footer-socials">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/mahbub-morshed/"
          >
            <AiOutlineLinkedin />
          </a>
          <a className="social-icon" href="https://www.artstation.com/mahbub">
            <FaArtstation />
          </a>
          <a className="social-icon" href="https://github.com/MahbubMorshed">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
