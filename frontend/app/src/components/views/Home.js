
import React from 'react';
import ClickScollFilmList from "../default/slide-film-list/ClickScollFilmList"
import HomeTrailer from "../default/home-trailer/HomeTrailer"
import styled from 'styled-components'
import Header from "../default/Header";

import xxx from './home_fake'

const thinhHanh = xxx.thinhHanh
const xemNhieu  = xxx.xemNhieu

const Content = ({ className })  =>{
    return(
        <div className={className}>
            <div><Header/></div>
            <div className="block1">
                <HomeTrailer/>
            </div>         
            <div className="block5"/>   
            <div className="block3"/>
            <div className="block2">
                <ClickScollFilmList 
                    key={thinhHanh.tagName}
                    props={thinhHanh}
                />
            </div>
            <div className="block3" />
            <div className="block4">
                <ClickScollFilmList 
                    key={xemNhieu.tagName}
                    props={xemNhieu}
                />
            </div>
        </div>   
    )
} 

const Home = styled(Content)`
    margin: auto;
    position: absolute;
    top: 0; left: 0; right: 0;
    overflow: hidden;
    display: grid;
    .block1{
        display: inline-block;
    }
    .block2{
        background-image: linear-gradient(rgba(22, 0, 0, 0.8),#0a0a0a, #0a0a0a);
        margin-top: -300px;
        position: relative;
        display: inline-block;
    }
    .block3{
        height:300px;
        margin-top: -5px;
        background-image: linear-gradient(black , #FFFAF0,rgba(22, 0, 0, 0.5));
    }
    .block4{
        background-image: linear-gradient(#0a0a0a,#2F4F4F,#0a0a0a);
        margin-top: -300px;
        position: relative;
        display: inline-block;
    }
    .block5{
        height:150px;
        margin-top: -150px;
        position: relative;
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(22, 0, 0, 0.8));
    }
`
export default Home;