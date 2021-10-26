import React ,{useEffect , useState} from 'react';
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import cartoon from './images/cartoon1.png';
import google from './images/google.png';
import slack from './images/slack.png';
import linked from './images/linked.png';
import logo1 from './images/logo1.png';
import power from './images/power.png';
import dot from './images/dot.png';
import line from './images/line.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo7 from './images/logo5.png';
import logo5 from './images/logo1.png';
import logo6 from './images/logo5.png';
import {Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import Limage from './Limage';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styles from './styles.css';
import { Redirect } from 'react-router-dom'



function LoginPage()
{
    useEffect(()=>{
        document.title='React app';
        //  alert(process.env.PUBLIC_URL);
    });
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

}
    return(<div>
 
        <div className='container-fluid'>

            <div className='row' style={{display:'flex' , backgroundColor:'blue'}} >



            <div className='col-lg-6 col-12' style={{ color:'white' , 
            backgroundColor:'blue' }} id='blc1'>
            
  
        <img className='p-5' src={logo} id='up'></img>
             <h3 className='text-center' id='t1'>Write Like 
             <br></br>
             a <i> SUPERHERO</i></h3><br></br>
             <p className='text-center' id='t2'>Lorem ipsum dolor sit ament<br></br> consectutur 
             adipiscing elit. Mauris</p>
            <center><img style={{  position:'relative' , marginBottom:'20px'}} 
            src={cartoon} id='i' /></center>
             {/* <br></br><br></br><br></br><br></br><br></br><br></br> */}
            <br></br>
            </div>





            <div className='col-lg-6 col-12' id='blc2' style={{backgroundColor:'white'}}>

            
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
            <br></br>    <br></br>        





    <form>
    <div class="form-group">
    <label for="exampleInputEmail1"><b>Email</b></label><br></br><br></br>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="lindsey.westervelt@gmail.com"
    style={{height:'40px' , border: '2px solid #CACACA' , borderRadius:'4px'}} 
     className='col-lg-9 col-12' id='e1' required/>
    <br></br><br></br>
  
        <button type="submit" class="btn btn-primary mb-2 btn-lg" id='btnwid'
    style={{backgroundColor:'#2143FB'}} onClick={check}>
        Get started
    </button ><br></br>
    <br></br><br></br>
    <h6> <img src={line} />&nbsp;&nbsp;&nbsp;or Sign In with &nbsp;&nbsp;&nbsp; <img src={line}/></h6>
    
    <br></br>

    <div className='row'>
        
        <div className='col-3 col-sm-1 ' >
        <button type='button' 
        style={{backgroundColor:'white' , border:'3px solid #F3F3F3' , padding:'6px'  , borderRadius:'4px'}}>
            <a href='https://www.google.com/account/about/' target='_blank'><img src={google}/></a></button>
        </div>
        <div className='col-3 col-sm-1 offset-1' id='btl'>
        <button type='button'  style={{backgroundColor:'white' , border:'3px solid #F3F3F3' , padding:'6px'  , borderRadius:'4px'}}><a href='http://slack.com/' target='_blank'
    >
            <img src={slack}/></a></button>
        </div>

        <div className='col-3 col-sm-1 offset-1' id='btl'>
        <button type='button'  style={{backgroundColor:'white' , border:'3px solid #F3F3F3' , padding:'6px'  , borderRadius:'4px'}}><a href='https://www.linkedin.com/feed/'  target='_blank'
       >
            <img src={linked}/></a></button>
        </div>

        {/* <Limage/> */}
            
   
    </div>
    
    <div className='row'>
        
    </div>
    
    </div>
    </form>
            </div>
            </div>
            <br></br> <br></br> <br></br> <br></br> <br></br>
            <Limage/>
            </div>
    </div>
    </div>
   
    {isPreview ? <Redirect to='/signuppage'/> : null}

    </div>)
}
export default LoginPage;