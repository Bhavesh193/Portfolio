import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Bhavesh Choudhary</h4>
      <h4>Copyright &copy; 2024 Bhavesh</h4>
      <div className="footerLinks">
        <a href="https://github.com/Bhavesh193" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/bhaveshchoudhary2001/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:bhaveshchoudhary193@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://leetcode.com/u/Bhavesh193/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
