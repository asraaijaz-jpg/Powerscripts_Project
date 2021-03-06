import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import cartoon from './images/cartoon2.png';
import google from './images/google.png';
import slack from './images/slack.png';
import linked from './images/linked.png';
import logo1 from './images/logo1.png';
import {Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import power from './images/power.png';
import line from './images/line.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo7 from './images/logo5.png';
import Image from './bgimage';
import Limage from './Limage';
import styles from './styles.css';
import dot from './images/dot.png';
import { Redirect } from 'react-router-dom'


function SignupPage3()
{
    useEffect(()=>{
        document.title='React app';
    });

    const [isPreview, setIsPreview] = useState(false);
    // const isPreview=false;

function check()
{
    var a=document.getElementById("e1").value;
    var b=document.getElementById("e2").value;
    var  pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var  pattern2=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if(a.match(pattern) && (b.match(pattern2)))
{
    // alert('hello');
    // isPreview=true;
    setIsPreview(true);
    // alert(isPreview);
}

}

    return(<div>
        <div className='container-fluid'>
            <div className='row' style={{display:'flex' , backgroundColor:'#CDE2F5'}}>


            <div className='col-lg-6' style={{ color:'blue' , backgroundColor:' #CDE2F5 '}} id='blc1'>
        

            <img className='p-5' src={logo} id='up'></img>
             <h3 className='text-center'id='t1'>Write Like <br></br>a <i> SUPERHERO</i></h3><br></br>
             <p className='text-center'id='t2'>Lorem ipsum dolor sit ament<br></br> consectutur adipiscing elit. Mauris</p><br></br>
             <center><img style={{  position:'relative' , marginBottom:'20px'}} 
            src={cartoon} id='i'/></center>
             {/* <br></br><br></br><br></br>
             <h1 style={{color:'blue'}} id='t4'></h1> */}
            
            </div>


            <div className='col-lg-6 col-12' id='blc2' style={{backgroundColor:'white'}} >

            <div className='row m-4'>

            <div className='col-lg-4 col-12 offset-5 p-3'>
                <div id='placeside22'>
                <h6 >Already have an account?</h6>
                  </div>
               
                </div>

                <div className='col-lg-1 p-2 col-12 offset-2'>
                <Link to='/signinpage'> <button type="button" className="btn btn-outline-primary " id='btnwid3'>
                Sign In</button></Link>
                </div>

            </div>

            <div className='row'>
            <div className='col offset-2'>

            
            <img src={power}/>
            <img src={dot} style={{width:'5px' , height:'5px' , marginLeft:'5px' , marginTop:'9px'}}/>
          <b> <h2 style={{fontWeight:'bold'}}><br></br>Get started absolutely free.</h2></b>
            <h6>Try for Free no credit card needed..</h6>
            <br></br>

    <form>
    <div class="form-group">
    <label for="Email"><b>Email </b></label><br></br>
    <input type="email" class="form-control" id="Email" placeholder="lindsey.westervelt@gmail.com"
    style={{height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px'}} pattern="[^ @]*@[^ @]*" className='col-lg-9 col-12'
    id='e1' required/><br></br><br></br>

    <label for="name"><b>Name</b></label><br></br>
    <input type="text" class="form-control" id="name" placeholder="Name"
    style={{height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px'}} className='col-lg-9 col-12'
    id='e1' required/><br></br><br></br>

    <label for="password"><b>Password</b></label><br></br>
    <input type="password" class="form-control" id="password" placeholder="Password"
    style={{height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px'}} className='col-lg-9 col-12'
    id='e2' 
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must contain at least one number and one uppercase and 
    lowercase letter, and at least 8 or more characters"
     required/><br></br><br></br>

    <button type="submit" class="btn btn-primary mb-2 btn-lg" id='btnwid'
      style={{backgroundColor:'#2143FB'}} onClick={check}>
    Sign Up</button><br></br>

     <br></br><br></br>
    <h6> <img src={line}/>&nbsp;&nbsp;&nbsp;or Sign In with...&nbsp;&nbsp;&nbsp; <img src={line}/></h6>

    <br></br>
    

    <div className='row'>
        
        <div className='col-3 col-sm-1'>
        <button type='button' 
        style={{backgroundColor:'white' , border:'3px solid #F3F3F3' , padding:'6px' , borderRadius:'4px'}}>
            <a href='https://www.google.com/account/about/' target='_blank'><img src={google}/></a></button>
        </div>
        <div className='col-3 col-sm-1 offset-1' id='btl'>
        <button type='button'  style={{backgroundColor:'white' , border:'3px solid #F3F3F3' , padding:'6px' , borderRadius:'4px'}}><a href='http://slack.com/' target='_blank'
    >
            <img src={slack}/></a></button>
        </div>

        <div className='col-3 col-sm-1 offset-1' id='btl'>
        <button type='button'  style={{backgroundColor:'white' , border:'3px solid #F3F3F3' , padding:'6px' , borderRadius:'4px'}}><a href='https://www.linkedin.com/feed/'  target='_blank'
       >
            <img src={linked}/></a></button>
            </div>

        {/* <div className='col-2 offset-1'>
        <img src={logo1} style={{marginTop:'-160px'  , marginLeft:'10px'}}></img>
        <img src={logo7} style={{marginTop:'-140px'  , marginLeft:'80px'}}></img>
        </div> */}

    </div>
    
    {/* <div className='row'>
        
<div className='row'>
<div className='col offset-10' style={{marginTop:'-590px'  , marginLeft:'570px'}}>
<img src={logo2} style={{height:'140px' , width:'70px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-400px'  , marginLeft:'480px'}}>
<img src={logo3} style={{height:'170px' , width:'170px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-200px'  , marginLeft:'500px'}}>
<img src={logo4} style={{height:'150px' , width:'150px'}}></img>
</div>
</div>
    </div>

     */}
    </div>
    </form>
            </div>
            </div>
            <Limage/>
            </div>


    </div>
    </div>
    {/* <Limage/> */}
    {isPreview ? <Redirect to='/dashboard4'/> : null}
    </div>)
}
export default SignupPage3;