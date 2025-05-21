import './Header.scss'
import mainLogo from '../../assets/images/main-logo.svg'
import LanguageDropdown from './LanguageDropdown'
import Button from '../Button/Button'

function Header() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <a href="/" className="logo">
            <img src={mainLogo} alt="Heaven Flow Logo" />
            <span>Heaven Flow</span>
          </a>
          <div className="header__links-container">
            <Button lnk={"google.com"} title="Register Now" cls="bg-green button__thin" />
            <LanguageDropdown />
          </div>
        </div>
      </header>
    );
}

export default Header