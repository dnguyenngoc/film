
import React from 'react';
import ClickScollFilmList from "../default/slide-film-list/ClickScollFilmList"
import HomeTrailer from "../default/video-play/HomeTrailer"
import Header from "../default/Header";
import './styles/Home.scss'
import Loading from "../../components/default/loading/Loading"

import xxx from './home_fake'
const thinhHanh = xxx.thinhHanh
const xemNhieu  = xxx.xemNhieu

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            thinhHanh: [],
            xemNhieu: []
        }
    }
    componentDidMount() {
    } 
    render(){
        if(this.state.isLoading) {
            return (<Loading/>)
        }
        return(
            <div className="home">
                <div><Header/></div>
                <div className="home__trailer">
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
}