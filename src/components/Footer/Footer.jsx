import './Footer.scss';
import mainLogo from '../../assets/images/main-logo.svg';
function FooterItem ({title, lnk}) {
    return (
      <li className="footer__item">
        <a href={lnk} className="footer__link">
          {title}
        </a>
      </li>
    );
}
function Footer() {
    return (
      <footer className="footer">
        <div className="footer__logo-container">
          <a href="/" className="logo">
            <img src={mainLogo} alt="Heaven Flow Logo" />
            <span>Heaven Flow</span>
          </a>
        </div>
        <div className="footer__info-container container">
          <ul className="footer__list">
            <FooterItem title="Introduction" lnk={"google.com"} />
            <FooterItem title="Gamification Benefits" lnk={"google.com"} />
            <FooterItem title="Webinar Registration" lnk={"google.com"} />
            <FooterItem title="Case Studies" lnk={"google.com"} />
            <FooterItem title="faq" lnk={"google.com"} />
          </ul>
          <div className="footer__copyright-container">
            <p className="footer__copyright-text">
              © 2025 TechSphere Innovations Ltd. All rights reserved.
            </p>
            <p className="footer__copyright-text">
              The company is registered in the United Kingdom, registration
              number: 43003-85845-73. Business license No. 987654321,
              issued on 15.03.2023. Personal data processing license No.
              112233445, issued on 20.04.2023.
            </p>
          </div>
        </div>
      </footer>
    );
}

export default Footer