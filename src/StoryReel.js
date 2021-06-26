import React from 'react';
import Story from './Story';
import './StoryReel.css';
import s1 from './images/s1.jpg';
import s2 from './images/s2.jpg';
import s3 from './images/s3.jpg';
import s4 from './images/s4.jpg';
import d1 from './images/d1.jpg';
import d2 from './images/d2.jpg';
import d3 from './images/d3.jpg';
import d4 from './images/d4.jpg';
function StoryReel() {
    return (
        <div className='s'>
            <Story
            image={s1} profileSrc={d1} title='Maaz Ali'
            />
             <Story
            image={s2} profileSrc={d2} title='Ali Shah '
            />
             <Story
            image={s3} profileSrc={d3} title='Zainab Shahab '
            />
             <Story
            image={s4} profileSrc={d4} title='Dani Khan'
            />
             <Story
            image={s2} profileSrc={d2} title='Ali Shah '
            />
            


            
        </div>
    )
}

export default StoryReel
