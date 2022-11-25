import React, { useState } from 'react'
import './Detail.css'
import bg from '../assets/bg.png'
import wheel from '../assets/well.png'
import offer from '../assets/offer.png'
import {useNavigate } from 'react-router-dom'
function Details() {
  const navigat = useNavigate()
  const[inputdata,setInputdat] = useState({
    mail:'',
    phoneNo:''
  })
  function handlechange(e){
    setInputdat({...inputdata,[e.target.name]:e.target.value})
  }
  function tryLuck(){
  if(inputdata.mail&&inputdata.phoneNo){
    navigat('/start')
  }else{
    alert('please Input details')
  }
 
  }
  return (
    // <div style={{ backgroundImage: `url(${offer})` , zIndex:-2,height:'100%',width:'100%'}}>
<div  style={{ backgroundImage: `url(${bg}),url(${offer}) `,
         backgroundPosition: "left, right ",
    backgroundRepeat: 'no-repeat , no-repeat',backgroundSize:'50% 100%,cover',zIndex:'1,0,3',height:'100%'}}>
     
    {/* <div className='backgroundImg' style={{ backgroundImage:`url(${bg})`}}> */}
    <div className='wheels'> <img  className='wheelImg' src={wheel} alt='wheel'  ></img> </div>
    
    <div className='textInputcntr' >
    <h3>This is how EngageBud looks like in action!</h3>
     <input className='input1' type= "mail" 
     onChange={handlechange} name='mail' value ={inputdata.mail}
      autoComplete='newPassword' placeholder='Email...'/>
<br></br>
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
    // </div>
  )
}

export default Details