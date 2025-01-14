import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page3.css';

// Page3
import LBtitle from '../assets/page3/Leaderboard_Title_DYNAMIC_TEXT@.png'
import LBtext from '../assets/page3/Leaderboard_Text_DYNAMIC_TEXT@.png'
import ViewLB from '../assets/page3/View_Leaderboards_DYNAMIC_TEXT@.png'
import LBbutton from '../assets/page3/Submit-button@.png'
import LBimg from '../assets/page3/Leaderboard_Mockup@.png'
import Separator from '../assets/page3/Diagonal-Seperator@.png'
import NewsAndUpdate from '../assets/page3/NEWS-and-UPDATES_DYNAMIC_TEXT@.png'
import UpdateImg1 from '../assets/page3/Post-Art@.png'
import UpdateImg2 from '../assets/page3/Post2-Art@.png'
import UpdateImg3 from '../assets/page3/Post3-Art@.png'


const Page3 = () => {
  return (
    <div className="container-fluid g-0 page3">
        <div className='row g-0'>
            <div className='col-5 p-5 g-0'>
                <img src={LBtitle} alt='Leaderboard Title' className='lb-title' />
                <img
                    src={LBtext}
                    alt='Leaderboard Text'
                    className='lb-text'
                />
                <div class="button-container">
                    <button class="custom-button">View All Leaderboards</button>
                </div>
            </div>
            <div className='col-7 d-flex justify-content-center align-items-center g-0 p-5'>
                <img
                    src={LBimg}
                    alt='Leaderboard Mockup'
                    className='img-fluid w-100'
                /> 
            </div>
        </div>
        <img
                src={Separator}
                alt='Separator image'
                className='py-3 mx-auto d-block'
            />
        <h2 className='news-updates'>NEWS and UPDATES</h2>
        <div className='row g-0 p-3'>
            <div className='col-4 d-flex justify-content-center align-items-center p-3'>
                <img
                    src={UpdateImg1}
                    className='w-100 post1'
                />
            </div>
            <div className='col-4 d-flex justify-content-center align-items-center p-3'>
                <img
                    src={UpdateImg2}
                    className='w-100 post2 glass glass--1'
                />
            </div>
            <div className='col-4 d-flex justify-content-center align-items-center p-3'>
                <img
                    src={UpdateImg3}
                    className='w-100 post3'
                />
            </div>
        </div>
        <div className='row p-3 g-0'>
            <div className='col-4 text-left px-4'>
                <p className='date-line'>October 2nd, 2024 <span className='ht-1'>Store Items</span></p>
                <h4 className='heading'>New Store Items</h4>
                <p className='p-content'>Spooky Halloween skins available only for a short time this month! Sale ends 11/15/2024. Come dress to kill in your favorite skin.</p>
            </div>
            <div className='col-4 text-left px-4'>
                <p className='date-line'>October 12th, 2024 <span className='ht-2'>User Art</span></p>
                <h4 className='heading'>Fan Art Contest Winners</h4>
                <p className='p-content'>Come view our winners in the user-art galleries on Discord, the voting is still open until later this week and there were more than a few clear winners. Come see!!</p>
            </div>
            <div className='col-4 text-left px-4'>
                <p className='date-line'>October 20th, 2024 <span className='ht-3'>Patch Notes</span></p>
                <h4 className='heading'>New Store Items</h4>
                <p className='p-content'>New level concepts for 'Wasteland' can be shown - come vote for your favorites and let us know what people want! Voting ends on Discord, on 11/16/2024.</p>
            </div>
        </div>
    </div>
  );
};

export default Page3;
