import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import cartoon from './images/cartoon3.png';
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


function ForgotpasswordPage()
{
    useEffect(()=>{
        document.title='Forgotpassword Page';
    });

    const [email,setemail]=useState('');
    const [isPreview, setIsPreview] = useState(false);
    // const isPreview=false;
    
function check()
{
    var a=document.getElementById("e1").value;
    // var b=document.getElementById("e2").value;
    var  pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // var  pattern2=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if(a.match(pattern))
{
    // alert('hello');
    // isPreview=true;
    setIsPreview(true);
    // alert(isPreview);
}

let storedata={email};
console.log(storedata)

fetch("https://gencore.ar/power_dom/public/api/reset-password-request",
{
    method:'POST',
    headers:{'Content-Type': 'application/json', 'Accept':'application/json'},
    body: JSON.stringify(storedata)
}).then((results)=>{
   console.log(results)
})
}


    return(<div>
         <div className='container-fluid' >
            <div className='row' style={{display:'flex' , backgroundColor:'#FC527D'}}>


            <div className='col-lg-6' style={{color:'white' , 
            backgroundColor:'#FC527D'}} id='blc1'>
            
  
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

            <br></br>
            <img src={power}/>
            <img src={dot} style={{width:'5px' , height:'5px' , marginLeft:'5px' , marginTop:'9px'}}/>
          <b><h2 style={{fontWeight:'bold'}}><br></br><br></br>Forgot Password.</h2></b>
            
            <br></br>

    <form>    <div class="form-group">
    <label for="Email"><b>Email </b></label><br></br><br></br>
    <input type="email" class="form-control" id="Email" placeholder="lindsey.westervelt@gmail.com"
    style={{  height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px'}} 
    pattern="[^ @]*@[^ @]*" className='col-lg-9 col-12' id='e1' required
    onChange={(e)=>setemail(e.target.value)}/><br></br>
<br></br><br></br>

    <button type="submit" class="btn btn-primary mb-2 btn-lg" id='btnwid' 
     style={{backgroundColor:'#2143FB'}} onClick={check}>
    Submit</button><br></br>

    <br></br>

    <div className='row'>
        

        {/* <div className='col-2 offset-10'>
        <img src={logo1} 
        
        style={{marginTop:'16px'  , 
        marginLeft:'-50px'}}></img>

        <img src={logo7} style={
            {marginTop:'-1px'  , 
            marginLeft:'40px'}}></img>
        </div> */}

    </div>
    
    <div className='row'>
        
{/*         
    <div className='row'>
<div className='col offset-10' style={{marginTop:'-500px'  , marginLeft:'580px'}}>
<img src={logo2} style={{height:'140px' , width:'70px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-360px'  , marginLeft:'400px'}}>
<img src={logo3} style={{height:'200px' , width:'200px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-150px'  , marginLeft:'400px'}}>
<img src={logo4} style={{height:'200px' , width:'200px'}}></img>
</div>
</div> */}




    </div>

    
    </div>
    </form>
            </div>
            </div>
            <br></br>   <br></br>   <br></br>   <br></br>   <br></br>   <br></br> 
            <br></br>  <br></br>   <br></br>
<Limage/>
            </div>


    </div>
    </div>
    {/* <Limage/> */}
    {isPreview ? <Redirect to='/resetpassword'/> : null}
    </div>)
}
export default ForgotpasswordPage;