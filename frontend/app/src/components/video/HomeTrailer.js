import React from 'react';
import './HomeTrailer.scss'

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
                    loop={true} 
                    src={trailer}
                />
            </div>
        </div>
    )
}
export default HomeTrailer;