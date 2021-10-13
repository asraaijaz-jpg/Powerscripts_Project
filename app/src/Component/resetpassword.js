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
import power from './images/power.png';
import line from './images/line.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo7 from './images/logo5.png';
import Image from './bgimage';
import Limage from './Limage';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import dot from './images/dot.png';
import d4 from './images/d4.png';
import { Redirect } from 'react-router-dom'


function ResetpasswordPage()
{
    useEffect(()=>{
        document.title='Reset password Page';
    });

    const [isPreview, setIsPreview] = useState(false);
    // const isPreview=false;


    
function check()
{
    var a=document.getElementById("e1").value;
    var b=document.getElementById("e2").value;

    var  pattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    var  pattern2=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if(a.match(pattern) && (b.match(pattern2)))
{
    if(a!=b)
    {
        // alert('Password fields are not same');
    }
    // alert('hello');
    // isPreview=true;
    else if(a == b)
    {
    setIsPreview(true);
    }
    // alert(isPreview);
}

}



    return(<div>
        <div className='container-fluid' >
            <div className='row' style={{display:'flex' , backgroundColor:'#F7BBD4 '}}>


            <div className='col-lg-6' style={{ color:'white' , backgroundColor:'#F7BBD4 '}} id='blc1'>
        
 
            <img className='p-5' src={logo} id='up'></img>
             <h3 className='text-center' id='t1'>Write Like <br></br>a <i> SUPERHERO</i></h3><br></br>
             <p className='text-center' id='t2'>Lorem ipsum dolor sit ament<br></br> 
             consectutur adipiscing elit. Mauris</p>
             <center><img style={{ alignItems:'center' , position:'relative' , marginBottom:'20px'}} src={cartoon} id='i'/></center>
            
            </div>


            <div className='col-lg-6 col-12' id='blc2' style={{height:'auto' , backgroundColor:'white'}} >


            <div className='row'>
            <div className='col offset-2'>
<br></br><br></br><br></br><br></br><br></br><br></br>

            <img src={power}/>
            <img src={dot} style={{width:'5px' , height:'5px' , marginLeft:'5px' , marginTop:'9px'}}/>
            <br></br><br></br>           
            <b><h2 style={{fontWeight:'bold'}}><br></br>Reset your Password.</h2></b>
            
            <br></br><br></br>

    <form>    
        <div class="form-group">

        <label for="password"><b>Create new Password</b></label><br></br><br></br>
    <input type="password" class="form-control" id="password" placeholder="..."
    style={{height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px'}} 
    id='e1' className='col-lg-9 col-12' id='e1' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    required  title="Must contain at least one number and one uppercase and 
    lowercase letter, and at least 8 or more characters"/><br></br><br></br>
    
    <label for="password"><b>Repeat your Password</b></label><br></br>
    <input type="password" class="form-control" id="password" placeholder="..."
    style={{height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px' }} id='e2' 
    className='col-lg-9 col-12' 
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required
    title="Must contain at least one number and one uppercase and 
    lowercase letter, and at least 8 or more characters"/><br></br><br></br>
<br></br><br></br>

    <button type="submit" class="btn btn-primary mb-2 btn-lg"  id='btnwid'
     style={{backgroundColor:'#2143FB'}} onClick={check}> 
    Submit</button><br></br>
  
    <br></br>

    <div className='row'>
        
{/* 
        <div className='col-2 offset-10'>
        <img src={logo1} style={{marginTop:'-160px'  , marginLeft:'10px'}}></img>
        <img src={logo7} style={{marginTop:'-140px'  , marginLeft:'70px'}}></img>
        </div> */}

    </div>
    
    <div className='row'>
{/*         
<div className='row'>
<div className='col offset-10' style={{marginTop:'-590px'  , marginLeft:'500px'}}>
<img src={logo2} style={{height:'140px' , width:'70px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-400px'  , marginLeft:'500px'}}>
<img src={logo3} style={{height:'160px' , width:'160px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-200px'  , marginLeft:'500px'}}>
<img src={logo4} style={{height:'160px' , width:'160px'}}></img>
</div>
</div> */}
    </div>

    
    </div>
    </form>

 
            </div>
            </div>
            <br></br> <br></br> <br></br> <br></br>
            <Limage/>
            </div>


    </div>
    </div>
    {/* <Limage/> */}
    {isPreview ? <Redirect to='/signinpage'/> : null}
    </div>)
}
export default ResetpasswordPage;