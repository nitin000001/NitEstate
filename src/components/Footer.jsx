import React from "react";
import { FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        {/* Copyright Notice */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} NitEstate. All rights reserved.
        </p>

        {/* Design & Development Credit */}
        <p className="text-sm md:text-base mt-1">
          Designed & Developed by <span className="text-orange-400 font-semibold">Nitin Maurya</span>
        </p>

        {/* Social Media Icons (Optional) */}
        <div className="flex justify-center gap-4 mt-3">
          <a href="#" className="hover:text-orange-400 transition">
            <i className="fab fa-facebook-f"><FaGithub /></i>
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            <i className="fab fa-twitter"><FaWhatsapp /></i>
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            <i className="fab fa-instagram"><FaInstagram /></i>
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
