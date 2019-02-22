import React from 'react';
import './index.scss';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="Footer">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FaGithubAlt />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </footer>
  );
}

export default Footer;
