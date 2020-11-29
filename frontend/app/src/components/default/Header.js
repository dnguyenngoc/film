import React from 'react';
import styled from 'styled-components'

const Content = ({ className })  =>{
  return(
      <div className={className}>
          <div className="background__gradient"/>
          <div className="content__logo">logo</div>
          <div className="content__categories">
              <ul className="content_tagname">
                <li>Trang chủ</li>
                <a href="/home"></a>
              </ul>
              <ul className="content_tagname">
                <li>thịnh hành</li>
                <a href="/thinh-hanh"></a>
              </ul>
          </div>
      </div>   
  )
} 

const Header = styled(Content)`
  margin-bottom:-60px;
  height: 60px;
  top: 0;
  z-index: 100;
  position: sticky;
  color: white;
  display: flex;
  font-family: "Roboto Bold",sans-serif;
  text-transform: uppercase;
  background-image: linear-gradient(black,rgba(22, 0, 0, 0.8), rgba(0, 0, 0, 0.5));
  .background__gradient{
    height:100px;
    position: relative;
    background-image: linear-gradient(rgba(22, 0, 0, 0.8),rgba(0, 0, 0, 0.1));
  }
  .content__logo{
    height: 60px;
    padding-left: 2rem;
  }
  .content__categories{
    display: flex;
    padding-left: 4rem;
    .content_tagname{
      
    }
  }

    
`
export default Header;