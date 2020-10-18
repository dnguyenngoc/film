
import React from 'react';
import './scss/Loading.scss'

export default class Loading extends React.Component {
    render(){
        return (
            <div className="loading">
                <div class="loader"></div>
                <div class="bar__loader">Loading ...</div>
            </div>
        )
        
    }
}



