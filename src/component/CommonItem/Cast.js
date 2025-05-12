import React from 'react';
import "./Cast.css";
import MoreText from '../Button/MoreText';


function Cast() {

    return (
        <div className='Cast-Wrapper'>
            <div className='Cast-bg'>
                <div className='Cast'>
                    <h2>출연/제작</h2>
                    <div className='cast'></div>
                     <MoreText />
                </div>
            </div>
        </div>
    )
}

export default Cast;