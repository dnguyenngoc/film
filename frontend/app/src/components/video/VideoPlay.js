
import React from 'react';
import styled from 'styled-components';

export default class VideoPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbnail: require('../../../assets/fake/image/irm-thumbnail.jpg'),
            url: require('../../../assets/fake/video/test.mp4'),
        };
    }




    render(){
        
        const VideoPlay = styled.div`
           height: 700px;
           color: white;
           margin: auto;
           top: 0; left: 0; right: 0;
           overflow: hidden;
           text-align: center;
           font-family: 'Source Sans Pro', sans-serif; 
           .content__video{
                .content__thumbnail{
                    width: 100%;
                    top: 0;
                    left: 0;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    position: absolute;

                }
                .content__control{
                    position:absolute;
                    height: 60%;
                    width: 200px;
                    text-transform: uppercase;
                    font-family: "Roboto Bold",sans-serif;
                    display: flex;
                    .button__start{
                        position: absolute;
                        border: 2px solid red;
                        color: Black;
                        background-color: #BC8F8F;
                        right: 5px;
                    }
                }

                // video {
                //     width: 70%;
                //     overflow: hidden;
                //     border: none;
                //     outline: 0;
                // }
                .content__missing{
                    padding-top: 200px;
                    font-size: 2rem;
                }
                
            }
        `;
        return (
            <VideoPlay>
                <div className="content__video">
                    <img className="content__thumbnail" src={this.state.thumbnail}/>
                    <div className="content__control">
                        <button className="button__start">Start/Pause</button>
                    </div>
                    {/* {this.state.url ? <video src={this.state.url}  controls={true}/>
                     : <div className="content__missing">Phim đang cập nhât ...</div>}  */}
                </div>
            </VideoPlay>   
        );
    }     
}



