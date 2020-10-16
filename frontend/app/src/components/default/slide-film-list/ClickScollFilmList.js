
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
    height: 500px; 
    font-family: 'Source Sans Pro', sans-serif; 
    color: #fff;
    padding-left: 5%;
    min-width: 100%;
    .content__title {
        display: flex;
        font-size: 2rem;
        text-transform: uppercase;
        .content__title: hover{
            color: #97db97;
        }
        .capitalize{
            text-transform: capitalize;
        }
        .location__right{
            font-size: 1.5rem;
            margin-left: 65%;
        }
    }
    .content__info {
        height: 80%;
        display:flex;
        margin-left: -5rem;

        .content__data{
            height: 100%;
            padding-left: 1.2rem;
            font-size: 0.8rem;
            .content__suggest{
                height: 70%;
                .content__img {
                    object-fit: cover;
                    object-position: center;
                    height: 100%;
                    width: 200px;
                }
                .content__detail{
                    position:absolute;
                    height: 60%;
                    width: 200px;
                    text-transform: uppercase;
                    font-family: "Roboto Bold",sans-serif;
                    padding-top: -3px;
                    display: flex;
                    .content__progress{
                        position: absolute;
                        padding: 3px 3px;
                        color: Black;
                        background-color: #BC8F8F;
                        right: 5px;
                    }
                    .content__role{
                        position: absolute;
                        margin-top: -0.5%;
                        color: #B22222;
                        background-color: #FF8C00;
                        padding: 6px 7px;
                    }
                    .content__type{
                        margin-top: 127%;
                        padding: 3px 5px;
                        position: absolute;
                        color: rgba(214, 228, 226, 0.644);
                        background-color: #708090;
                    }
                }       
            }
            .capitalize{
                text-transform: capitalize;
                max-width: 200px;
                padding-top: 1rem;

            }
            .hidden{
                display:none;
                font-size: 0.8rem;
                color: rgba(214, 228, 226, 0.644);
                max-width: 200px;
            }
        }
        .content__data:hover{
            .hidden{
                display:block;
            }
            .content__suggest {
                transition: transform 1s;
                transform: scale(1.04);
            }
            .content__img{
                border: 2px solid  #FF8C00;

            }
        }
    }
  }
`
export default ClickScollFilmList ;
