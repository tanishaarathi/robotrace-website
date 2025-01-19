import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page4.css';

// Page4
import Garlands from '../assets/page4/Garlands@.png'
import RankIcon from '../assets/page4/icon_rank_gold@.png'
import RocketDivider from '../assets/page4/rocket-icon-divider@.png'
import TextBox from '../assets/page4/Word_Bubble_Parts@.png'
import Robot from '../assets/page4/Page4_iRobot@.png'
import SubmitButton from '../assets/page4/Submit_BTN@.png'
import Edlogo from '../assets/page4/Page4_Company-Logo@.png'
import GameLogo from '../assets/page4/game-icon-COPY@.png'
import AppStore from '../assets/page4/iOS-download-button-COPY@.png'
import PlayStore from '../assets/page4/Android-Download-Button-COPY@.png'
import ESRBrating from '../assets/page4/ESRB-rating@.png'
import LeftArt from '../assets/page4/left-corner-art.png'
import RightArt from '../assets/page4/right-corner-art.png'

const Page4 = () => {
  return (
    <div className="container-fluid g-0 page4">
        <div className="topSection d-flex flex-column align-items-center justify-content-space">
            <div className="row-top">
                <div className="position-relative">
                    <img src={Garlands} className="garland1 img-fluid" alt="Left Garland" />
                    <p className="testimony1">A rocket-fueled<br />rampage!<br /><span className='author'>-WIRED</span></p>
                </div>

                <img src={RankIcon} className="rank-icon img-fluid" alt="Rank Icon" />

                <div className="position-relative">
                    <img src={Garlands} className="garland2 img-fluid" alt="Right Garland" />
                    <p className="testimony2">Humorous<br />and fun!<br /><span className='author'>-Indie Games Magazine</span></p>
                </div>
            </div>

        {/* Rocket Divider */}
        <img src={RocketDivider} className="rocket-divider img-fluid" alt="Rocket Divider" />
      </div>

      <div className="midSection justify-content-center align-items-center">
        <img src={TextBox} alt="Text Box" className="text-box img-fluid" />
        <h2 className="stay-connected">STAY CONNECTED!</h2>
        <p className="p4-content">
            Sign up for our mailing list to hear about the upcoming Multiplayer<br/> release this December and receive special passwords for secret tracks!
        </p>
        
        <div class="name-container">
          <label for="name" class="name-label">NAME</label>
          <input type="name" id="name" class="name-input" placeholder="" />
        </div>
        <div class="email-container">
          <label for="email" class="email-label">E-MAIL</label>
          <input type="email" id="email" class="email-input" placeholder="" />
        </div>
        <div class="image-button">
          <img src={SubmitButton} alt="Submit Button" class="submit-button" />
          <span class="button-text">SUBMIT</span>
        </div>

        <img src={Robot} alt='Robot' className='robot'/>
        <img src={LeftArt} alt='Left Corner art' className='left-corner-art' />
        <img src={RightArt} alt='Right Corner art' className='right-corner-art' />

      </div>

      <div className="footer">
        <a href="http://easleydunnproductions.com/temp_index.html" target="_blank" rel="noopener noreferrer">
          <img src={Edlogo} alt='Easley-Dunn logo' className='edlogo' />
        </a>
        <img src={GameLogo} alt='Easley-Dunn logo' className='game-logo' />
        <a href="https://apps.apple.com/ge/app/robot-race/id539184198#?platform=iphone" target="_blank" rel="noopener noreferrer">
          <img src={AppStore} alt='Easley-Dunn logo' className='app-store' />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.easleydunnproductions.robotrace&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" >
          <img src={PlayStore} alt='Easley-Dunn logo' className='play-store' />
        </a>
        <img src={ESRBrating} alt='Easley-Dunn logo' className='esrb-rating' />
        <p className='footer-content'>
          All Rights Reserved 2024 | Easley-Dunn Games |
          <a href='http://easleydunnproductions.com/ContactUs.html' className='contact-link'> Contact Us</a> | 
          <a href='https://easleydunnproductions.com/PrivacyPolicy.php' className='privacy-link'> Privacy Policy </a>
           | Website by Phred | Website Design by SpiderHandz</p>
      </div>
    </div>
  );
};

export default Page4;
