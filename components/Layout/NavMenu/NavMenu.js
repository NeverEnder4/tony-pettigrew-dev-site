import Link from 'next/link';

import './NavMenu.scss';

const NavMenu = ({ isOpen, handleToggleMenu, pathname }) => {
  const menuOpenClass = isOpen ? 'nav-menu--open' : '';

  const activeClass = isOpen ? 'active' : '';

  const handleClickOnSamePageLink = e => {
    if (e.currentTarget.getAttribute('href') === pathname) handleToggleMenu(e);
  };

  return (
    <div className={`nav-menu ${menuOpenClass}`}>
      <nav className="nav-menu__links-container">
        <ul className="nav-menu__nav-links">
          <li className={`nav-menu__item nav-menu__item--about ${activeClass}`}>
            <Link href="/about">
              <a
                onClick={handleClickOnSamePageLink}
                className="nav-menu__nav-link"
              >
                About
                <span className="mask">
                  <span>About</span>
                </span>
                <span className="mask">
                  <span>About</span>
                </span>
              </a>
            </Link>
          </li>
          <li className={`nav-menu__item  nav-menu__item--work ${activeClass}`}>
            <Link href="/work">
              <a
                onClick={handleClickOnSamePageLink}
                className="nav-menu__nav-link"
              >
                Work
                <span className="mask">
                  <span>Work</span>
                </span>
                <span className="mask">
                  <span>Work</span>
                </span>
              </a>
            </Link>
          </li>
          <li
            className={`nav-menu__item nav-menu__item--contact ${activeClass}`}
          >
            <a
              href="mailto:get@tonypettigrew.dev?subject=I need a website!"
              className="nav-menu__nav-link"
            >
              Email
              <span className="mask">
                <span>Email</span>
              </span>
              <span className="mask">
                <span>Email</span>
              </span>
            </a>
          </li>
        </ul>
        <ul className={`nav-menu__social-links ${activeClass}`}>
          <li>
            <a
              href="mailto:get@tonypettigrew.dev?subject=I need a website!"
              className="nav-menu__social-link"
            >
              <img src="/static/svg/mail-icon.svg" alt="email icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/NeverEnder4"
              className="nav-menu__social-link"
            >
              <img src="/static/svg/git-icon.svg" alt="github icon" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/NeverEnder_4"
              className="nav-menu__social-link"
            >
              <img src="/static/svg/twit-icon.svg" alt="twitter icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tony-pettigrew-6b659455/"
              className="nav-menu__social-link"
            >
              <img src="/static/svg/linked-icon.svg" alt="linkdin icon" />
            </a>
          </li>
        </ul>
        <img
          tabIndex="1"
          className="nav-menu__close-button"
          src="/static/svg/arrow-right.svg"
          alt="menu exit button"
          onClick={handleToggleMenu}
          onKeyUp={handleToggleMenu}
        />
      </nav>

      <div className="nav-menu__img-display">
        <svg
          className="nav-menu__logo"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={`nav-menu__logo-circle ${activeClass}`}
            cx="26"
            cy="26"
            r="24"
            stroke="#14B0B0"
            strokeWidth="4"
          />
          <path
            className={`nav-menu__logo-letter ${activeClass}`}
            d="M24.52 14.92C24.52 14.92 23.8133 14.9067 22.4 14.88C18.6667 14.88 16.8 15.9733 16.8 18.16C16.8 19.6533 17.56 20.5467 19.08 20.84C20.0933 21.0267 20.6 21.56 20.6 22.44C20.6 22.92 20.4267 23.3067 20.08 23.6C19.76 23.8667 19.32 24 18.76 24C17.5867 24 16.6 23.5067 15.8 22.52C15 21.5067 14.6 20.36 14.6 19.08C14.6 14.4667 18.5467 12.16 26.44 12.16H34.52C34.9467 12.16 35.32 12.3067 35.64 12.6C35.9867 12.8667 36.16 13.24 36.16 13.72C36.16 14.2 35.9867 14.5867 35.64 14.88C35.32 15.1467 34.9467 15.28 34.52 15.28L28.32 15.08C28.1067 19.6667 28 23.32 28 26.04C28 28.7333 28.0533 31.3467 28.16 33.88C28.2933 36.4133 28.36 37.8933 28.36 38.32C28.36 38.7467 28.1733 39.1733 27.8 39.6C27.4533 40.0267 27 40.24 26.44 40.24C25.88 40.24 25.4133 40.0267 25.04 39.6C24.6933 39.1733 24.52 38.7467 24.52 38.32C24.52 37.8933 24.5733 36.4133 24.68 33.88C24.8133 31.3467 24.88 28.84 24.88 26.36C24.88 23.88 24.76 20.0667 24.52 14.92Z"
            fill="#EFEFEF"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavMenu;
