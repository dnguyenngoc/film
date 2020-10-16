
import React from 'react';
import styled from 'styled-components'
import Header from "../default/Header";
import VideoPlay from "../default/video-play/VideoPlay"

export default class FilmDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoPlay: {

            }
            
        };
    }
    render(){
        const FilmDetail = styled.div`
            margin: auto;
            position: absolute;
            top: 0; left: 0; right: 0;
            overflow: hidden;
            background-image: linear-gradient(#0a0a0a,#0a0a0a,rgba(22, 0, 0, 0.8));
            .padding__top {
                background-image: linear-gradient(green,rgba(0, 0, 0, 0.8));x
                padding-top: 60px;
            }
        `;

        return (
            <FilmDetail>
                {/* <Header/> */}
                    <div className="padding__top"></div>
                <VideoPlay 
                    props = {this.state.videoPlay}
                />
            </FilmDetail>   
        );
    }
        
}



