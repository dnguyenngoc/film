import React from 'react';
import './Header.scss';
import logo from '../../assets/icons/project-logo.jpg';

export default class Header extends React.Component {
  render(){
    return(
        <div className='header'>
            <div className="content__logo">
                <img  className = 'image' src= {logo} height='90px' width='auto'/>
            </div>
            <div className="content__categories">
                <ul className="content_tagname">
                  <li>Home</li>
                  <a href="/home"></a>
                </ul>
                <ul className="content_tagname">
                  <li>Film</li>
                  <a href="/phim-le"></a>
                </ul>
                <ul className="content_tagname">
                  <li>New</li>
                  <a href="/phim-le"></a>
                </ul>
                <ul className="content_tagname">
                  <li>Sport</li>
                  <a href="/phim-le"></a>
                </ul>
            </div>
            {/* <div className="content__tool">
            </div> */}
        
        </div>
    )
  } 
}
