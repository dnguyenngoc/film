import React from 'react';
import './Header.scss';


export default class Header extends React.Component {
  render(){
    return(
     
      <div className='header'>
            <div className="content__categories">
                <ul className="content_tagname">
                  <a href="/home">Home</a>                
                </ul>
                <ul className="content_tagname">
                  <a href="/phim">Film</a>
                  <div className='infor__categories'>
                    <a className="infor__categories_chill" href="/phim/phim-le">phim lẻ</a> 
                    <a className="infor__categories_chill" href="/phim/phim-bo">phim bộ</a> 
                    <a className="infor__categories_chill" href="/phim/moi-nhat">mới nhất</a> 
                    <a className="infor__categories_chill" href="/phim/thinh-hanh">thịnh hành</a> 
                  </div>
                </ul>
                <ul className="content_tagname">
                  <a href="/new">New</a>
                  <div className='infor__categories'>
                    <a className="infor__categories_chill" href="/new/xe">xe</a> 
                    <a className="infor__categories_chill" href="/new/du-lich">du lịch</a> 
                    <a className="infor__categories_chill" href="/new/showbiz">showbiz</a> 
                    <a className="infor__categories_chill" href="/new/cong-nghe">công nghệ</a> 
                  </div>
                </ul>
                <ul className="content_tagname">
                  <a href="/sport">Sport</a>
                  <div className='infor__categories'>
                    <a className="infor__categories_chill" href="/sport/bong-da">bóng đá</a> 
                    <a className="infor__categories_chill" href="/sport/lien-minh">liên minh</a> 
                    <a className="infor__categories_chill" href="/sport/mma">MMA</a> 
                  </div>
                </ul>
            </div>
        </div>
    )
  } 
}
