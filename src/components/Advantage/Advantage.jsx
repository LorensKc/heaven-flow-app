import './Advantage.scss';
import GreenIcon from '../../assets/images/ico-green.svg';
import RedIcon from '../../assets/images/ico-red.svg';

function Advantage() {
    return (
        <div className="advantage">
            <div className="advantage__block advantage__block--green">
                <ul className="advantage__list">
                    <li className="advantage__item">
                        <img className="advantage-icon" src={GreenIcon} alt="advantage-icon-green" />
                        <span>How game elements (points, achievements, levels).</span>
                    </li>
                    <li className="advantage__item">
                        <img className="advantage-icon" src={GreenIcon} alt="advantage-icon-green" />
                        <span>Game design principles that can be applied.</span>
                    </li>
                    <li className="advantage__item">
                        <img className="advantage-icon" src={GreenIcon} alt="advantage-icon-green" />
                        <span>How to make navigation and interaction with the site more intuitive and engaging.</span>
                    </li>
                    <li className="advantage__item">
                        <img className="advantage-icon" src={GreenIcon} alt="advantage-icon-green" />
                        <span>Examples of successful websites using game design.</span>
                    </li>
                </ul>
            </div>

            <div className="advantage__block advantage__block--red">
                <ul className="advantage__list">
                    <li className="advantage__item">
                        <img className="advantage-icon" src={RedIcon} alt="advantage-icon-red" />
                        <span>Engagement: Gamification helps users feel like part of the process, motivating them to interact with the site for longer.</span>
                    </li>
                    <li className="advantage__item">
                        <img className="advantage-icon" src={RedIcon} alt="advantage-icon-red" />
                        <span>Increased Engagement: Game mechanics like achievements and points encourage interest.</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Advantage