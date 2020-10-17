import './index.scss';
import React from 'react';


// @id: int notnull,
// @name: string notnull,
// @year: int nullable,
// @country: string nullable,
// @director: string nullable,
// @type: string nullable,
// @style: list[string] nullable,
// @languege: list[string] nullable,
// @process: string nullable,
// @content: string nullable,
// @star: float nullable,
// @view: int nullable,
// @actor: list[string] nullable,
// @role: string nullable
export default class FilmDetail extends React.Component {
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
        return (
            <div className="filmdetail">
                <div className="filmdetail__content">
                    <div className="filmdetail__content__one">
                        <p className="name">{this.state.name}</p>
                        <p className="role">{this.state.role}</p>
                    </div>
                    <div className="filmdetail__content__two">
                        <p className="year">{this.state.year}</p>
                        <p className="country">{this.state.country}</p>
                        {stypeMake(this.state.style)}
                    </div>
                    <div className="filmdetail__content__three">
                        <p className="process">{this.state.process}</p>
                        <p className="view">{this.state.view + " lượt xem"}</p>
                        <div className="star">
                            <p>{this.state.star}</p>
                            <div className="rating">
                                {ratiingMake(this.state.star)}
                            </div>
                        </div>
                    </div>
                    <div className="filmdetail__content__four">
                    <p className="content__title">Nội dung</p>
                    <p className="content__detail">{this.state.content}</p>                    
                    </div>
                </div>
                <div className="filmdetail__actor"> 
                    <div className="filmdetail__content__one">
                        <p className="name">Nghệ sỹ tham gia</p>
                    </div>
                    { makeActorGroupThree(this.state.actor)}   
                </div>
            </div>
        );
    }
}

function actorDetail(actor){
    return (<div className="actor">
            <img className="avatar" src={actor.avatar}/>
                <ul className="name">
                    <p>{actor.name}</p>
                </ul>
            </div>)
}

function makeActorGroupThree(actor){
    const data = []
    var len = actor.length
    var i = 0;
    if (actor !== null) {
        while (i <len) {
            data.push(
            <div className="filmdetail__content__two">{
                [actorDetail(actor[i]), actor[i+1] ? actorDetail(actor[i+1]): "", actor[i+2]? actorDetail(actor[i+2]): ""]}
            </div>)
            i=i+3
        }
        return data   
    }
    return ""
}

function ratiingMake(star) {
    if (star !== null){
        const end = []
        for (let i = 0; i < 5; i++) {
            if (star-i >= 1) end.push(<label className="full"></label>)
            else if (star-i < 1 && star-i> 0)  {
                end.push(<label className="half"></label>)
                end.push(<label className=""></label>)
            }
            else end.push(<label className=""></label>)
        }
        return end
    }
    return ""
}        

function stypeMake(style) {
    if (style !== null){
        return style.map(item=><p className="style">{item}</p>)
    }
    return ""
}        