
import React from 'react';
import styled from 'styled-components'

function clickPoster(item){
    var url = "/"+item.film_type+"/watch"
}

const  Content  = ({ className, props }) => {
    return (
        <div className={className}>
            {/* Tag name and  show more data */}
            <div className="content__title">
                <div className="content__title">
                    <p>{props.tagName}</p>
                </div>
                <div className="content__title capitalize location__right">
                    <p>xem thêm -> </p>
                </div>
            </div>
            {/* Data informations */}
            <div className="content__info">
                {props.data.map(
                    item => (
                        <div className="content__data" onClick={()=> clickPoster(item)}>
                            <div className="content__suggest">
                                <div className="content__detail">
                                    <p className="content__progress">{ item.progress? item.progress: "n/a"}</p>
                                    <p className={item.role ? "content__role" : ""}>{item.role}</p>
                                    <p className={item.type ? "content__type" : ""}>{item.type}</p>
                                </div>
                                <img  src= {item.logo} className="content__img"  alt="logo"/>
                            </div>
                            <h3 className='capitalize'>{item.name}</h3>
                            <p className="hidden">{item.description.substr(0, 50)+" ..."}</p>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

const ClickScollFilmList = styled(Content)`
    width: auto;
    height: 365px; 
    font-family: "Roboto Bold",sans-serif;
    color: #fff;
    background-color: black;
    padding-left: 2rem;

    .content__title {
        display: flex;
        font-size: 1.5rem;
        text-transform: uppercase;
        .content__title: hover{
            color: #97db97;
        }
        .capitalize{
            text-transform: capitalize;
        }
        .location__right{
            font-size: 1.2rem;
            margin-left: 80%;
        }
    }

    .content__info {
        display:flex;
        .content__data{
            padding-left: 1rem;
            font-size: 0.7rem;
            .content__suggest{
                // border: 0.01px solid #708090;    
                .content__detail{
                    position:absolute;
                    height: 200px;
                    width: 150px;
                    text-transform: uppercase;
                    font-family: "Roboto Bold",sans-serif;
                    padding-top: -3px;
                    display: flex;
                    .content__progress{
                        position: absolute;
                        padding: 3px 3px;
                        color: rgba(214, 228, 226, 0.644);
                        background-color: #708090;
                        right: 0;
                        margin-top: 122%;
                    }
                    .content__role{
                        position: absolute;
                        // margin-left: -5%;
                        margin-top: -0.5%;
                        color: #B22222;
                        background-color: #FF8C00;
                        padding: 5px 7px;
                    }
                    .content__type{
                        margin-top: 122%;
                        padding: 3px 5px;
                        position: absolute;
                        color: rgba(214, 228, 226, 0.644);
                        background-color: #708090;
                    }
                }
                .content__img {
                    object-fit: cover;
                    object-position: center;
                    height: 200px;
                    width: 150px;
                }
            }
            .capitalize{
                text-transform: capitalize;
                max-width: 150px;
            }
            .hidden{
                display:none;
                font-size: 0.6rem;
                color: rgba(214, 228, 226, 0.644);
                max-width: 150px;
            }
        }
        .content__data:hover{
            .hidden{
                display:block;
            }
            .content__suggest {
                transition: transform .2s;
                transform: scale(1.1);
                border: 2px solid #708090;
            }
        }
    }
  }
`
export default ClickScollFilmList ;
