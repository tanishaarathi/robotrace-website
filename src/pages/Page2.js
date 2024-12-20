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
            <div className='col-6 d-flex flex-column justify-content-center align-items-center p-3'>
                <p className='headings'>Compete with Friends in Multiplayer Mode</p>
                <p className='content'>Battle across dynamic maps and take down your opponents with weapons, speed, and strategy in this action-packed series of worlds across the universe. Unlock new weaons and show your friends who's the top bot in any world.</p>
            </div>
        </div>
        <div className='row d-flex justify-content-center p-3 g-0'>
            <div className='col-6 d-flex flex-column justify-content-center align-items-center p-3'>
                <p className='headings'>Secret Pathways on each Level to Make you Transform</p>
                <p className='content'>Each dimensional gateway world has a number of secrets hidden - find the secret pathways to make your robotic body transform into a plane or a car! How many shortcuts can you find to help you win the race?</p>
            </div>
            <img
                src={MiddleImg}
                alt="Movie Middle"
                className='col-6 d-flex justify-content-center align-items-center p-3'
            />
        </div>
        <div className='row d-flex justify-content-center p-3 g-0'>
            <img
                src={BottomImg}
                alt="Movie Bottom"
                className='col-6 d-flex justify-content-center align-items-center'
            />
            <div className='col-6 d-flex flex-column justify-content-center align-items-center p-3'>
                <p className='headings'>Free your Union by Becoming the Champion</p>
                <p className='content'>Become the hero for your robot family in the wake of the post-apocalyptic future. Save your entire clan from demise by leveling up, racing in the interdimensional circuit and rise to become the legend!</p>
            </div>
        </div>
    </div>
  );
};

export default Page2;
