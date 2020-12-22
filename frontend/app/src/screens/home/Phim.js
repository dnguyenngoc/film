
import React from 'react';
import Axios from 'axios';
import Loading from "../../components/loading/Loading";
import HomeTrailer from  '../../components/video/HomeTrailer';
import ListFilm from  '../../components/scoll/ListFilm';



const apiV1 = '/api/v1'
const restService = 'http://localhost:8080'

export default class Phim extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            phimLe: {
                data: [],
                page: 1,
                nextPage: true
            },
            phimBo: {
                data: [],
                page: 1,
                nextPage: true

            },
            thinhHanh: {
                data: [],
                page: 1,
                nextPage: true
            },
            moiNhat: {
                data: [],
                page: 1,
                nextPage: true
            },
            trailer: null
        }
    }
    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };
        Axios.get(`${restService}${apiV1}/phimmoi/phim-le/${this.state.phimLe.page}`, requestOptions)
            .then(response=>{
                if (response.status === 200) {
                    this.setState({isLoading: false, phimLe: response.data})
                    console.log(this.state.phimLe.data)

                }
            }).catch(function (error) {
                console.log(JSON.stringify(error))
            })    
        
        Axios.get(`${restService}${apiV1}/trailer`, requestOptions)
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
                <HomeTrailer className = 'home__trailer'
                    key={this.state.page}
                    trailer={this.state.trailer}
                />
                <ListFilm
                    key={this.state.isLoading}
                    tabName = {this.state.phimLe.name}
                    data = {this.state.phimLe.data}
                />
                
            </div>   
        )
    }
}