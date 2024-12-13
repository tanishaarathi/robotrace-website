import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page2.css';

// Page2
import TopImg from '../assets/page2/Page2_Movie_Top@.png'
import MiddleImg from '../assets/page2/Page2_Movie_Middle@.png'
import BottomImg from '../assets/page2/Page2_Movie_Bottom@.png'
import TopText from '../assets/page2/Page2_TextBlock_Upper@.png'
import MiddleText from '../assets/page2/Page2_TextBlock_Middle@.png'
import BottomText from '../assets/page2/Page2_TextBlock_Lower@.png'

const Page2 = () => {
  return (
    <div className="container-fluid g-0 page2">
        <div className='row d-flex justify-content-center p-3 g-0'>
            <img
                src={TopImg}
                alt="Movie Top"
                className='col-6 d-flex justify-content-center align-items-center'
            />
            {/* <img
                src={TopText}
                alt="Top Text"
                className='col-6 d-flex justify-content-center align-items-center p-3'
            /> */}
            <div className='col-6 d-flex flex-column justify-content-center align-items-center p-3'>
                <p className='headings'>Compete with Friends in Multiplayer Mode</p>
                <p className='content'>Battle across dynamic maps and take down your opponents with weapons, speed, and strategy in this action-packed series of worlds across the universe. Unlock new weaons and show your friends who's the top bot in any world.</p>
            </div>
        </div>
        <div className='row d-flex justify-content-center p-3 g-0'>
            <img
                src={MiddleText}
                alt="Movie Top"
                className='col-6 d-flex justify-content-center align-items-center p-3'
            />
            <img
                src={MiddleImg}
                alt="Top Text"
                className='col-6 d-flex justify-content-center align-items-center'
            />
        </div>
        <div className='row d-flex justify-content-center p-3 g-0'>
            <img
                src={BottomImg}
                alt="Movie Top"
                className='col-6 d-flex justify-content-center align-items-center'
            />
            <img
                src={BottomText}
                alt="Top Text"
                className='col-6 d-flex justify-content-center align-items-center p-3'
            />
        </div>
    </div>
  );
};

export default Page2;
