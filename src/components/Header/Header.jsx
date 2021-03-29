/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { header } = useContext(PortfolioContext);

  return (
    <header className="s-header">
      <Container>
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <li className="current">
                <Link to="hero" smooth duration={1000} className="center">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth duration={1000} className="center">
                  About
                </Link>
              </li>
              <li>
                <Link to="projects" smooth duration={1000} className="center">
                  Home
                </Link>
              </li>
              <li>
                <Link to="contact" smooth duration={1000} className="center">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <a className="s-header__menu-toggle" href="#0" title="Menu">
          <span className="s-header__menu-icon" />
        </a>
      </Container>
    </header>
  );
};

export default Header;
