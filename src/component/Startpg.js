import React, { useState, useEffect } from 'react';
import './spin.css';
import wheel from '../assets/well.png'
import well from '../assets/wheel.png'
import myGif from '../assets/stars-winner.gif'
import offer from '../assets/offer.png'
import bg from '../assets/bg.png'


function Startpg() {
    const [name, setName] = useState('circle');
    const [plays, setPlay] = useState(false);
    const [audio_join, setAudio] = useState(new Audio(require('../clap.wav')));
    const [playOver,setPlayOver] = useState(false);

    function startSpin() {
        setName('circle start-rotate');

        setTimeout(() => {
            setName('circle start-rotate stop-rotate')
            audio_join.play();
            setPlay(true);
            gameOver();
        }, Math.floor(Math.random() * 5000) + 1)
    }
   function gameOver(){
        setTimeout(() => {
            
            setPlayOver(true)
        }, 8000)
    }
  

  return (
    <div  style={{ backgroundImage: `url(${bg}),url(${offer}) `,
         backgroundPosition: "left, right ",
    backgroundRepeat: 'no-repeat , no-repeat',backgroundSize:'50% 100%,50% 100%',zIndex:'1,2,3',height:'100%'}}>
     <div>
     {!playOver ?  (
                   <div >
                        <div className='arrow'></div>

                        <div className={name}  > <div><img className='img' src={wheel} alt='wheel'
                        ></img></div> </div>
                         
                        <button className= 'spinButton'  onClick={startSpin} >Spin</button>
                    </div>
                    ):(<div > <div className='imgContainer'><img className='img1' src={well} alt='wheel'
                    ></img>
                    <div class='content'>
                    <h3>Congrats! You Won:</h3>
                    <h1>20% Off Coupon on Best Sellers</h1>
                    <div className='copybox'>XAXPDF20 <button className='copybtn'>COPY</button></div>
                    <button>Close Panel & Copy</button>
                    <p>*You can claim your coupon for 10 minutes only!</p>
                    </div>
                    </div>
                    </div>
                    )}
                </div>
            
    </div>
  )
}

export default Startpg