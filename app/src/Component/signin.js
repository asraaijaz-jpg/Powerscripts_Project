import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import cartoon from './images/cartoon3.png';
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
import Image from './bgimage';
import Limage from './Limage';
import styles from './styles.css';
import dot from './images/dot.png';
import { Redirect } from 'react-router-dom';
import ReactSession from 'react-client-session';


function SigninPage()
{
    

    useEffect(()=>{
        document.title='Sign In Page';
    });

    const [isPreview, setIsPreview] = useState(false);


    // const isPreview=false;


const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [apierror , seterror] = useState('hello');   


function check()
{
  

    let storedata={email,password};
    // console.log(storedata)


    var a=document.getElementById("e1").value;
    var b=document.getElementById("e2").value;
    var  pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var  pattern2=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;


    fetch("https://gencore.ar/power_dom/public/api/login",
    {
        method:'POST',
        headers:{'Content-Type': 'application/json', 'Accept':'application/json'},
        body: JSON.stringify(storedata)
    })
    .then(response => response.json())
    .then(response => {
    
        console.log(typeof(response.error))
        let str=response.error;
        let str2="Your Email/Password is incorrect";
        let str3="User is not found";
    
        if(str === str2 || str === str3)
        {
           alert(response.error);
        }
        else{
            if(a.match(pattern) && (b.match(pattern2)))
            {
                //localstorage and session setter
               localStorage.setItem('myData', JSON.stringify(storedata));
               sessionStorage.setItem('mysessiondata',JSON.stringify(storedata));

                //localstorage and sessionstorage getter
               let data=localStorage.getItem('myData');
               data=JSON.parse(data);
            //    alert(data.email);

               let data2=sessionStorage.getItem('mysessiondata');
               data2=JSON.parse(data2);
            //    alert(data2.email);

               setIsPreview(true);
            }
        }
       
    })
    
}


    return(<div>
        <div className='container-fluid' >
            <div className='row' style={{display:'flex' , backgroundColor:'blue'}}>


            <div className='col-lg-6' style={{color:'white' , 
            backgroundColor:'blue'}} id='blc1'>
            
  
        <img className='p-5' src={logo} id='up'></img>
             <h3 className='text-center' id='t1'>Write Like <br></br>a <i> SUPERHERO</i></h3><br></br>
             <p className='text-center' id='t2'>Lorem ipsum dolor sit ament<br></br> consectutur adipiscing elit. Mauris</p><br></br>
             <center><img style={{  position:'relative' , marginBottom:'20px'}} 
            src={cartoon} id='i' /></center>
             {/* <br></br><br></br><br></br><br></br>
             <h1 style={{color:'blue'}} id='t4'></h1> */}
            
            </div>


            <div className='col-lg-6 col-12' id='blc2' style={{backgroundColor:'white'}} >

            <div className='row m-4'>

            <div className='col-lg-4 col-12 offset-5 p-3'>
                <div id='placeside22'>
                <h6 >Don't have an account?</h6>
                  </div>
               
                </div>

                <div className='col-lg-1 p-2 col-12 offset-2'>
                <Link to='/loginpage'> <button type="button" className="btn btn-outline-primary " 
                id='btnwid4'>
                Get started</button></Link>
                </div>


            </div>

            <div className='row'>
            <div className='col offset-2'>

            
            <img src={power}/>
            <img src={dot} style={{width:'5px' , height:'5px' , marginLeft:'5px' , marginTop:'9px'}}/>
          <b> <h2 style={{fontWeight:'bold'}}><br></br>Sign In to Powerscript.</h2></b>
            <br></br>    <br></br>    <br></br>

    <form>
    <div class="form-group">
    <label for="Email"><b>Email</b></label><br></br>
    <input type="email" class="form-control" id="Email" placeholder="lindsey.westervelt@gmail.com"
    style={{height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px'}} 
    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
    className='col-lg-9 col-12' id='e1'required
    onChange={(e)=>setemail(e.target.value)}/><br></br><br></br>

    <label for="password"><b>Password</b></label><br></br>
    <input type="password" class="form-control" id="password" placeholder="Password"
     style={{height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px'}} 
     className='col-lg-9 col-12' id='e2'
     pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
     title="Must contain at least one number and one uppercase and 
     lowercase letter, and at least 8 or more characters" required
     onChange={(e)=>setpassword(e.target.value)}/><br></br><br></br>

 <button type="submit" class="btn btn-primary mb-2 btn-lg" 
id='btnwid'  style={{backgroundColor:'#2143FB'}} onClick={check}>Sign In
    </button><br></br><br></br>

    <Link to='/forgotpasswordpage'>Forgot password?</Link>

    <br></br><br></br><br></br>
    <h6> <img src={line}/>&nbsp;&nbsp;&nbsp;or Sign In with &nbsp;&nbsp;&nbsp; <img src={line}/></h6>

    <br></br>
    
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
        <button type='button'  style={{backgroundColor:'white' , border:'3px solid #F3F3F3' , padding:'6px' , borderRadius:'4px'}}><a href='https://www.linkedin.com/feed/'  target='_blank'
       >
            <img src={linked}/></a></button>
      
       </div>

        {/* <div className='col-2 offset-1'>
        <img src={logo1} style={{marginTop:'-100px'  , marginLeft:'-40px'}}></img>
        <img src={logo7} style={{marginTop:'-100px'  , marginLeft:'50px'}}></img>
        </div> */}

    </div>
    
    <div className='row'>
        
    {/* <div className='row'>
<div className='col offset-10' style={{marginTop:'-550px'  , marginLeft:'540px'}}>
<img src={logo2} style={{height:'140px' , width:'70px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-400px'  , marginLeft:'400px'}}>
<img src={logo3} style={{height:'200px' , width:'200px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-200px'  , marginLeft:'400px'}}>
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
export default SigninPage;