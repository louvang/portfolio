import React, { useRef, useEffect } from 'react';
import Rellax from 'rellax';
import { ReactSVG } from 'react-svg';

import ContactIcon from '../assets/contact.svg';
import GithubIcon from '../assets/github.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import InstagramIcon from '../assets/instagram.svg';

function Header() {
  const rellax1 = useRef();
  const rellax2 = useRef();
  const rellax3 = useRef();

  useEffect(() => {
    new Rellax(rellax1.current, {
      speed: 5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax(rellax2.current, {
      speed: -3,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax(rellax3.current, {
      speed: -1,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  });

  return (
    <header>
      <div className="logo">
        <div className="whoAmI" ref={rellax2}>
          Lou Vang
        </div>
        <div className="whatAmI" ref={rellax3}>
          Fullstack Developer
        </div>
      </div>

      <nav className="genNav" ref={rellax1}>
        <ul>
          <li>
            <a href="mailto:louvangdev@gmail.com">Contact</a>
          </li>
          <li>
            <a href="https://github.com/louvang" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lou-vang-755813220/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/louvang_/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </nav>

      <nav className="teenyNav">
        <ul>
          <li>
            <a href="mailto:louvangdev@gmail.com">
              <ReactSVG src={ContactIcon} />
            </a>
          </li>
          <li>
            <a href="https://github.com/louvang" target="_blank" rel="noreferrer">
              <ReactSVG src={GithubIcon} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lou-vang-755813220/" target="_blank" rel="noreferrer">
              <ReactSVG src={LinkedInIcon} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/louvang_/" target="_blank" rel="noreferrer">
              <ReactSVG src={InstagramIcon} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
