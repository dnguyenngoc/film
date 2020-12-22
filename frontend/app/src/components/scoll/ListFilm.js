import React from 'react';
import './ListFilm.scss';
import faace from "../../assets/fake/poster/rapviet.jpg"


function clickPoster(item){
    var url = "/"+item.film_type+"/watch"
}



export default class ListFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabName: '',
            data: []
        }
    }
    componentDidMount() {
        // this.setState({tabName: this.props.tabName, dataDetail: this.props.dataDetail})
        console.log(this.props)
    }
  render(){
    return(
        <div className='list__film'>
            <div className="content__title">
                <div className="content__title">
                    <p>{this.state.tabName}</p>
                </div>
                <div className="content__title capitalize location__right">
                    <p>xem thêm -> </p>
                </div>
            </div>
            {/* <div className="content__info">
                {this.state.dataDetail.map(
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
            </div> */}
        </div>
    ) 
  } 
}
