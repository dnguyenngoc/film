
import React from 'react';
import styled from 'styled-components'


export default class VideoPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        const VideoPlay = styled.div`
           height: 700px;
           color: white;
           margin: auto;
           top: 0; left: 0; right: 0;
           overflow: hidden;

        `;
        return (
            <VideoPlay>
                here
            </VideoPlay>   
        );
    }
        
}



