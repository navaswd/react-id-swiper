import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import '../../node_modules/react-id-swiper/src/styles/css/swiper.css';
import '../../node_modules/react-id-swiper/src/styles/scss/swiper.scss';
import './app.css';

class App extends React.Component {


    goNext=()=> {
        if (this.swiper) this.swiper.slideNext()
      }
    render() {
        const params = {
            direction: 'vertical',
            speed: 1000,
            slidePerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            spaceBetween: 30,
            simulateTouch:true,
            keyboard: {
                enabled: true,
            },
            mousewheel: {
                invert: true,
              } 
        }

        return (
            <div className="swiper-container">
                <Swiper {...params} ref={node => {if(node) this.swiper = node.swiper} }>
                    <div className="style1">Slide 1
                    <button className="button_down" onClick={()=>this.goNext()}>Down</button>         
                    </div>
                    <div className="style2">Slide 2</div>
                    <div className="style3">Slide 3</div>
                    <div className="style4">Slide 4</div>
                    <div className="style5">Slide 5</div>
                </Swiper>
                      
            </div>
        )
    }
}

export default App;