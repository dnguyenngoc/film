
import React from 'react';
import ClickScollFilmList from "../default/slide-film-list/ClickScollFilmList"
import data from './home_fake'

class Home extends React.Component{
    render(){
        return(
            <div>
                <ClickScollFilmList 
                 key={data.tagName}
                 props={data}
                />
            </div>   
        )
    }
} 

export default Home;