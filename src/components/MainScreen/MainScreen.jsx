import './MainScreen.scss';
import mainImage from "../../assets/images/img_hero.png";
import Button from '../Button/Button';


function MainScreen() {
    return (
      <div className="main-screen">
        <div className="main-screen__wrapper">
          <div className="main-screen__content">
            <h1>Game Design for Websites</h1>
            <div className="subtitle">
              Transforming Your Interface into an Engaging Game
            </div>
            <div className="main-screen__buttons">
              <Button
                lnk={"google.com"}
                title="COPY PROMO CODE"
                cls="bg-dark"
              />
              <Button
                lnk={"google.com"}
                title="Register Now"
                cls="bg-green"
              />
            </div>
          </div>

          <img src={mainImage} alt="Main Screen Image" />
        </div>
      </div>
    );
}

export default MainScreen