import './Footer.scss';
const Footer = ({ isLanding }) =>
  isLanding ? null : (
    <footer className="footer">
      <div className="footer__cta">
        <p className="footer__cta-msg">
          I love helping great people pursue their dream projects. Sound like
          you?
        </p>
        <a
          className="footer__cta-link"
          href="mailto:get@tonypettigrew.dev?subject=I need a website!"
        >
          Let's get started
        </a>
      </div>
      <ul className="footer__contact-links">
        <li>
          <a
            href="mailto:get@tonypettigrew.dev?subject=I need a website!"
            className="footer__contact-link"
          >
            <img src="/static/svg/mail-icon.svg" alt="email icon" />
            <span>Get@tonypettigrew.dev</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/NeverEnder4"
            className="footer__contact-link"
          >
            <img
              className="github-icon"
              src="/static/svg/git-icon.svg"
              alt="Github icon"
            />
            <span>On Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/NeverEnder_4"
            className="footer__contact-link"
          >
            <img src="/static/svg/twit-icon.svg" alt="Twitter icon" />
            <span>On Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tony-pettigrew-6b659455/"
            className="footer__contact-link"
          >
            <img src="/static/svg/linked-icon.svg" alt="Linkedin icon" />
            <span>On Linkedin</span>
          </a>
        </li>
      </ul>
    </footer>
  );

export default Footer;
