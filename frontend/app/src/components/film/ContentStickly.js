import React from 'react';
import './contents.scss'

export default class ContentStickly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            year: props.year,
            country: props.country,
            director: props.director,
            type: props.ntypeame,
            style: props.style,
            languege: props.languege,
            process: props.process,
            content: props.content,
            role: props.role,
            star: props.star,
            view: props.view,
            actor: props.actor
        }
    };  
    render(){
        return(
            <div className='content_stickly'></div>
        )
    }
}