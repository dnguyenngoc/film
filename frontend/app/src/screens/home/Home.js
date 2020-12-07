
import React from 'react';
import Axios from 'axios';
import Header from "../../components/header/Header";
import Loading from "../../components/loading/Loading";
import HomeTrailer from  '../../components/video/HomeTrailer';

import './Home.scss'



export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            phimLe: {
                data: [],
                page: 1
            },
            phimBo: [],
            thinhHanh: [],
            xemNhieu: [],
            page: 1,
            trailer: null
        }
    }
    componentDidMount() {
        // const accessToken = await this.props.authService.getAccessToken()

        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };


        Axios.get(`http://localhost:8080/api/v1/phimmoi/phim-le/${this.state.page}`, requestOptions)
            .then(response=>{
                if (response.status === 200) {
                    this.setState({isLoading: false, phimLe: response.data})
                    console.log(this.state.phimLe)
                }
            }).catch(function (error) {
                console.log(JSON.stringify(error))
            })    
        
        Axios.get(`http://localhost:8080/api/v1/trailer`, requestOptions)
            .then(response=> {
                if (response.status === 200) {
                    this.setState({isLoading: false, trailer: response.data})
                    console.log(this.state.trailer)

                }
            }).catch(function (error) {
                console.log(JSON.stringify(error))
            })   
    } 
    render(){
        if(this.state.isLoading) {
            return (<Loading/>)
        }
        return(
            <div className="home">
                <div>
                    <Header/>
                </div>
                <div className="home__trailer">
                    <HomeTrailer
                        key={this.state.page}
                        trailer={this.state.trailer}
                    />
                </div>         
                {/* <div className="block5"/>   
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