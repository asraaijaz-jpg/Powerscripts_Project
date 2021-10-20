import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo2.png';
import logo6 from './images/logo6.png';
import cartoon from './images/cartoon2.png';
import google from './images/google.png';
import slack from './images/slack.png';
import linked from './images/linked.png';
import {Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import power from './images/power.png';
import line from './images/line.png';
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo7 from './images/logo5.png';
import logoo from './images/logo.png';
import Limage from './Limage';
import styles from './styles.css';
import dot from './images/dot.png';
import Dashboard4 from './dashboard4';
import {Route ,  Switch , BrowserRouter , browserHistory, IndexRoute} from 'react-router-dom';
import { Redirect } from 'react-router-dom'


function SignupPage()
{
    useEffect(()=>{
        document.title='Sign Up Page';
    });

    const [isPreview, setIsPreview] = useState(false);

    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    // const [number, setnumber] = useState('');
    // const [type, settype] = useState('');
   

    // const isPreview=false;

function check()
{
    let storedata={email,name , password , cpassword };
    // console.log(storedata)

    var a=document.getElementById("e1").value;
    var b=document.getElementById("e2").value;
    var c=document.getElementById("e3").value;
    var d=document.getElementById("e4").value;
    var  pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var  pattern2=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
   
//     if( (b.match(pattern)) && (c.match(pattern2)) )
// {  
//    if(c == d)
//    {
//     // setIsPreview(true);
//    }
 
// }



fetch("https://gencore.ar/power_dom/public/api/register",
{
    method:'POST',
    headers:{'Content-Type': 'application/json', 'Accept':'application/json'},
    body: JSON.stringify(storedata)
})
.then(response => response.json())
.then(response => {

    // console.log(response)
    console.log(response.error)
   
})
}


    return(<div>
   
        
        <div className='container-fluid' >
            <div className='row'  style={{display:'flex' , backgroundColor:'#98F1D2'}}>


            <div className='col-lg-6' style={{ color:'blue' , backgroundColor:'#98F1D2'}}
             id='blc1'>
          
           
            <img className='p-5' src={logoo} id='up'></img>
            <br></br>
            <h3 className='text-center' id='t1'>Write Like 
            <br></br> a <i><b>SUPERHERO</b></i></h3>
            <p className='text-center' id='t2'>
            <br></br>
            Lorem ipsum dolor sit ament
            <br></br> 
            consectutur adipiscing elit. Mauris</p>
            <br></br>
            <center><img style={{  position:'relative' , marginBottom:'20px'}} 
            src={cartoon} id='i'/></center>


                
            </div>


            <div className='col-lg-6 col-12' id='blc2' style={{backgroundColor:'white'}} >  


            <div className='row m-4'>

                <div className='col-lg-4 col-12 offset-5 p-3'>
                <div id='placeside22'>
                <h6 >Already have an account?</h6>
                  </div>
               
                </div>

                <div className='col-lg-1 p-2 col-12 offset-2'>
                <Link to='/signinpage'> <button type="button" className="btn btn-outline-primary " 
                id='btnwid3'>
                Sign In</button></Link>
                </div>

            </div>

            <div className='row'>
            <div className='col offset-2'>

            
          
 <img src={power}/>
 <img src={dot} style={{width:'5px' , height:'5px' , marginLeft:'5px' , marginTop:'9px'}}/>
          <b><h2 style={{fontWeight:'bold'}}><br></br>Get started absolutely free.</h2></b>
            <h6>Try for Free no credit card needed..</h6>
            <br></br>

    <form>
    <div class="form-group">

    <label for="name" ><b>Name</b></label><br></br>
    <input type="text" class="form-control" id="name" placeholder="Name"
    style={{height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px' }} 
    className='col-lg-9 col-12' id='e1' required
    onChange={(e)=>setname(e.target.value)}/><br></br><br></br>

    <label for="Email"><b>Email</b></label><br></br>
    <input type="email" class="form-control" id="Email" placeholder="lindsey.westervelt@gmail.com"
    style={{height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px'}}
     
     pattern="[^ @]*@[^ @]*" className='col-lg-9 col-12' id='e2' required
     onChange={(e)=>setemail(e.target.value)}/><br></br><br></br>

 

    <label for="password"><b>Password</b></label><br></br>
    <input type="password" class="form-control" id="password" placeholder="Password"
    style={{height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px'}} 
    className='col-lg-9 col-12' id='e3' 
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must contain at least one number and one uppercase and 
    lowercase letter, and at least 8 or more characters" required
    onChange={(e)=>setpassword(e.target.value)}/>
    <br></br><br></br>


    <label for="password"><b>Password Confirmation</b></label><br></br>
    <input type="password" class="form-control" id="password" placeholder="Password_Confirmation"
    style={{height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px'}} 
    className='col-lg-9 col-12' id='e4' 
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must contain at least one number and one uppercase and 
    lowercase letter, and at least 8 or more characters" required
    onChange={(e)=>setcpassword(e.target.value)}/>
    <br></br><br></br>

    {/* <label for="password"><b>Phone</b></label><br></br>
    <input type="number" class="form-control" id="password" placeholder="Phone"
    style={{height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px'}} 
    className='col-lg-9 col-12' id='e4' 
    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
    title="Must match with phone number pattern" required
    onChange={(e)=>setnumber(e.target.value)}/>
    <br></br><br></br>

    <label for="text"><b>Type</b></label><br></br>
    <input type="text" class="form-control" id="password" placeholder="Type"
    style={{height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px'}} 
    className='col-lg-9 col-12' id='e1' required
    onChange={(e)=>settype(e.target.value)}/>
    <br></br><br></br> */}

    <button type="submit" class="btn btn-primary mb-2 btn-lg"
    id='btnwid'  style={{backgroundColor:'#2143FB'}}
    onClick={check}>Sign Up</button><br></br>

    <br></br><br></br>
    <h6> <img src={line}/>&nbsp;&nbsp;&nbsp;or Sign In with &nbsp;&nbsp;&nbsp; <img src={line}/></h6>
    
<br></br>

    <div className='row'>
        
        <div className='col-3 col-sm-1 '>
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
        <button type='button'  style={{backgroundColor:'white' , border:'3px solid #F3F3F3' , padding:'6px' , 
        borderRadius:'4px'}}><a href='https://www.linkedin.com/feed/'  target='_blank'
       >
            <img src={linked}/></a></button>
             </div>
{/* 
        <div className='col-2 offset-1'>
        <img src={logo1} style={{marginTop:'-170px'  , marginLeft:'10px'}}></img>
        <img src={logo7} style={{marginTop:'-100px'  , marginLeft:'80px'}}></img>
        </div> */}


    </div>
    
    <div className='row'>
        
{/*         
<div className='row'>
<div className='col offset-10' style={{marginTop:'-590px'  , marginLeft:'550px'}}>
<img src={logo2} style={{height:'140px' , width:'70px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-400px'  , marginLeft:'480px'}}>
<img src={logo3} style={{height:'180px' , width:'180px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-200px'  , marginLeft:'460px'}}>
<img src={logo4} style={{height:'200px' , width:'200px'}}></img>
</div>
</div> */}


    </div>

    
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
export default SignupPage;