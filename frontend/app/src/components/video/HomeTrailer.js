import React from 'react';
import './HomeTrailer.scss'
import fake from './Gravity - 2K Trailer.mp4'


const HomeTrailer = ({ trailer }) => {
    if (trailer === null) 
        return (
            <div className="null__trailer"> 
                <img src='https://www.whats-on-netflix.com/wp-content/uploads/2020/04/netflix-top50-May-2020.png'/>     
            </div>
        )
    return (
        <div className="home__trailer">
            <div className="content__video">
                <video 
                    autoPlay={true}
                    muted={true} 
                    loop={false} 
                    src={fake}
                />
            </div>
        </div>
    )
}
export default HomeTrailer;