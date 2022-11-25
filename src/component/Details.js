import React, { useState, useEffect } from 'react';
import './Detail.css';
import wheel from '../assets/well.png'
import well from '../assets/wheel.png'
import myGif from '../assets/stars-winner.gif'
import offer from '../assets/offer.png'
import bg from '../assets/bg.png'
import {useNavigate } from 'react-router-dom'

function Details() {
  const navigate = useNavigate()
  const[inputdata,setInputdat] = useState({
    mail:'',
    phoneNo:''
  })
  function handlechange(e){
    setInputdat({...inputdata,[e.target.name]:e.target.value})
  }
  function tryLuck(){
  if(inputdata.mail&&inputdata.phoneNo){
    navigate('/start')
  }else{
    alert('please Input details')
  }
 
  }

  return (
    <div  className=" mainContainer"style={{ backgroundImage: `url(${bg}),url(${offer}) `,
    backgroundPosition: "left, right ",
backgroundRepeat: 'no-repeat , no-repeat',backgroundSize:'50% 100%,50% 100%',zIndex:'1,2,3',height:'100%'}}>

<div > <div className='imgContainer'><img className='img1' src={well} alt='wheel'
                    ></img>
                    {/* <div class='content'>
                    <h3>This is how EngageBud looks like in action!</h3>
                    <h1>20% Off Coupon on Best Sellers</h1>
                    <div className='copybox'>XAXPDF20 <button className='copybtn'>COPY</button></div>
                    <button>Close Panel & Copy</button>
                    <p>*You can claim your coupon for 10 minutes only!</p>
                    </div>*/}
                    <div className='content' >
    <h3>This is how EngageBud looks like in action!</h3>
     <input className='input1' type= "mail" 
     onChange={handlechange} name='mail' value ={inputdata.mail}
      autoComplete='newPassword' placeholder='Email...'/>

     <input type= "number" className='input2' 
     onChange={handlechange} name='phoneNo' value={inputdata.phoneNo}
     placeholder='Phone No...'/>

     <div className='checkBox'>
     <input type="checkbox"/>
     <span>I agree to receiving recurring automated messages at the number I have provided.
Consent is not a condition to purchase.</span>
</div>
<button className='btncss' onClick={tryLuck}>Try Your luck</button>
    </div>
                    </div> 
                    </div>
                    </div>
  )
}

export default Details