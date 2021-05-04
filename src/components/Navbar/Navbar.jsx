/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import '../../js/main';

const Navbar = () => {
  const { navbar } = useContext(PortfolioContext);

  (function (html) {

    html.className = `${html.className.replace(/\bno-js\b/g, '')} js `;
    
    /* Move header menu
     * -------------------------------------------------- */
    const ssMoveHeader = function () {
      const hdr = document.querySelector('.s-header');
      const hero = document.querySelector('#hero');
      let triggerHeight;

      if (!(hdr && hero)) return;

      setTimeout(function () {
        triggerHeight = hero.offsetHeight - 170;
      }, 300);

      window.addEventListener('scroll', function () {
        const loc = window.scrollY;

        if (loc > triggerHeight) {
          hdr.classList.add('sticky');
        } else {
          hdr.classList.remove('sticky');
        }

        if (loc > triggerHeight + 20) {
          hdr.classList.add('offset');
        } else {
          hdr.classList.remove('offset');
        }

        if (loc > triggerHeight + 150) {
          hdr.classList.add('scrolling');
        } else {
          hdr.classList.remove('scrolling');
        }
      });
    }; // end ssMoveHeader

    /* Mobile Menu
     * ---------------------------------------------------- */
    const ssMobileMenu = function () {
      const toggleButton = document.querySelector('.s-header__menu-toggle');
      const headerNavWrap = document.querySelector('.s-header__nav-wrap');
      const siteBody = document.querySelector('body');

      if (!(toggleButton && headerNavWrap)) return;

      toggleButton.addEventListener('click', function (event) {
        event.preventDefault();
        toggleButton.classList.toggle('is-clicked');
        siteBody.classList.toggle('menu-is-open');
      });

      headerNavWrap.querySelectorAll('.s-header__nav a').forEach(function (link) {
        link.addEventListener('click', function (evt) {
          // at 800px and below
          if (window.matchMedia('(max-width: 800px)').matches) {
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
          }
        });
      });

      window.addEventListener('resize', function () {
        // above 800px
        if (window.matchMedia('(min-width: 801px)').matches) {
          if (siteBody.classList.contains('menu-is-open'))
            siteBody.classList.remove('menu-is-open');
          if (toggleButton.classList.contains('is-clicked'))
            toggleButton.classList.remove('is-clicked');
        }
      });
    }; // end ssMobileMenu

    /* Highlight active menu link on pagescroll
     * ------------------------------------------------------ */
    const ssScrollSpy = function () {
      const sections = document.querySelectorAll('.target-section');

      // Add an event listener listening for scroll
      window.addEventListener('scroll', navHighlight);

      function navHighlight() {
        // Get current scroll position
        const scrollY = window.pageYOffset;

        // Loop through sections to get height(including padding and border),
        // top and ID values for each
        sections.forEach(function (current) {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50;
          const sectionId = current.getAttribute('id');

          /* If our current scroll position enters the space where current section
           * on screen is, add .current class to parent element(li) of the thecorresponding
           * navigation link, else remove it. To know which link is active, we use
           * sectionId variable we are getting while looping through sections as
           * an selector
           */
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
              .querySelector(`.s-header__nav a[href*=${sectionId}]`)
              .parentNode.classList.add('current');
          } else {
            document
              .querySelector(`.s-header__nav a[href*=${sectionId}]`)
              .parentNode.classList.remove('current');
          }
        });
      }
    }; // end ssScrollSpy

    /* Swiper
     * ------------------------------------------------------ */
    const ssSwiper = function () {
      const mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          // when window width is >= 401px
          401: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 801px
          801: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        },
      });
    }; // end ssSwiper

    /* initialize
     * ------------------------------------------------------ */
    (function ssInit() {
      ssMoveHeader();
      ssMobileMenu();
      ssScrollSpy();
      ssSwiper();
    })();
  })(document.documentElement);


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
                  Projects
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

export default Navbar;
