import React from 'react';
import './HotNew.scss';


export default class HotNew extends React.Component {
  render(){
    return(
      <div className='hotnew'>
            <div className='title'>
                <h2>
                    <span>What's next?</span>
                </h2>
            </div>
            <div className='content'>
                <div className='margin'></div>
                <div className='items'>
                    <div className='item'>
                        <a className='vco__entry'>
                            <div className='vco__logo'></div>
                            <div className='vco__name'>
                                <p className='subheading'>Virgin Atlantic</p>
                                <img src=''></img>
                            </div>
                        </a>
                    </div>
                    <div className='item'>
                        <a className='vco__entry'>
                            <div className='vco__logo'></div>
                            <div className='vco__name'>
                                <p className='subheading'>Virgin Atlantic</p>
                                <img src=''></img>
                            </div>
                        </a>
                    </div>
                    <div className='item'>
                        <a className='vco__entry'>
                            <div className='vco__logo'></div>
                            <div className='vco__name'>
                                <p className='subheading'>Virgin Atlantic</p>
                                <img src=''></img>
                            </div>
                        </a>
                    </div>
                 
                </div>
                <div className='margin'></div>

            </div>
      </div>
    )
  } 
}
