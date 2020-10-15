import React from 'react';
import styled from 'styled-components'

const url = 'https://www.youtube.com/watch?v=hdjiF4VQp70&feature=youtu.be'



const Result = ({ className, props }) => {
    return(
        <div className={className}>
            <div className="content__video">
                <video 
                    autoPlay={true}
                    muted={true} 
                    loop={true} 
                    src={require('../../../assets/fake/video/test.mp4')}
                />
            </div>
        </div>
    )
}

const HomeTrailer = styled(Result)`
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .content__video{
        video {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }
    }
        
`
export default HomeTrailer ;