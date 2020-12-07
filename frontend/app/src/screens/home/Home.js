
import React from 'react';
import Header from "../default/Header";

// import ClickScollFilmList from "../default/slide-film-list/ClickScollFilmList"
// import HomeTrailer from "../default/video/HomeTrailer"
import './Home.scss'
import Loading from "../../components/default/loading/Loading.js"


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
                {/* <div className="home__trailer">
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
                </div> */}
            </div>   
        )
    }
}