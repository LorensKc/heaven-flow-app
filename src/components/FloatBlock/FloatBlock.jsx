import './FloatBlock.scss';
import Button from '../Button/Button';
import floatArrow from "../../assets/images/float-arrow.svg";

function FloatBlock() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

    return (
      <div className="float-block">
        <div className="float-block__container">
          <div className="float-block__title">
            Join us and become<br className="breakpoint" /> a GAME DESIGN MASTER!
          </div>
          <Button lnk={"https://google.com"} title="Register Now" cls="bg-green button__float-thin" />
        </div>

        <a href="#" onClick={scrollToTop} className="float-block__button-float">
          <img src={floatArrow} alt="Float Block Image"  className="float-block__arrow"/>
        </a>
      </div>
    );
}

export default FloatBlock