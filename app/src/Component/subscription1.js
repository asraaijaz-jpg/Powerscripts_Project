import React, { useEffect , useState} from 'react';
import ReactDOM from 'react';
import Icon from '@material-ui/core/Icon';

import {Route , Link , Switch , BrowserRouter, NavLink} from 'react-router-dom';import cartoon from './images/cartoon4.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo1.png';
import logo6 from './images/logo5.png';
import ladyprofile from './images/profile.png';
import circle from './images/circle.png';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import man1 from './images/man1.png';
import man2 from './images/man2.png';
import man3 from './images/man3.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import power from './images/power.png';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';
import fb from './images/fb.png';
import fb1 from './images/fb1.png';
import blog from './images/blog.png';
import cart from './images/cart.png';
import a97 from './images/a97.png';
import a197 from './images/a197.png';
import group from './images/group.png';
import CancelIcon from '@material-ui/icons/Cancel';
import EuroIcon from '@material-ui/icons/Euro';
import Image from './bgimage';
import Limage from './Limage';
import styles from './styles.css';



function Subscription1()
{
 
  const [show9, setShow9] = useState(false);   
  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);
  
  const [userId,setuserId]=useState('1');
 const [title,settitle]=useState('');
 const [status,setstatus]=useState('pending');
 const [type,settype]=useState('');
 const [content,setcontent]=useState('');
 const [ratings,setratings]=useState('5');


 
 function getmodaldata()
 {
  alert('Order placed');
let store={userId,title,status,type,content,ratings};
console.log(store);

fetch("https://gencore.ar/power_dom/public/api/order",
    {
        method:'POST',
        headers:{'Content-Type': 'application/json', 'Accept':'application/json'},
        body: JSON.stringify(store)
    })
    .then(response => response.json())
    .then(response => {
    
        console.log(response);    
    })
}

    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);   
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);   
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    useEffect(()=>{
        document.title='React app';
    })

    
    function closesession()
    {
     sessionStorage.removeItem('mysessiondata');
     localStorage.removeItem('myData');
     sessionStorage.clear();
     localStorage.clear();

     window.history.pushState(null, document.title, window.location.href);
     window.addEventListener('popstate', function (event){
         window.history.pushState(null, document.title,  window.location.href);
     });

    }


    function Toggling()
    {
     var a= document.getElementById("toggle1").style.width ;
     
      if(a > "210px")
      {
        document.getElementById("toggle1").style.width = "210px";
        document.getElementById("toggle1").style.marginLeft= "-185px";    
        document.getElementById('tog').style.transform='rotate(180deg)';
        document.getElementById('b1').style.marginLeft='-40px';
        document.getElementById('imm').style.marginLeft='-30px';
        document.getElementById('btb').style.display='none';
        document.getElementById('dv').style.marginLeft='-190px';
        document.getElementById('dvv').style.marginLeft='-190px';
  
  
      }
      else
      {

        document.getElementById("toggle1").style.width = "270px";
        document.getElementById("toggle1").style.marginLeft= "1px";
        document.getElementById('b1').style.marginLeft='-3px';
        document.getElementById('imm').style.marginLeft='-3px';
        document.getElementById('btb').style.display='inline-block';
        document.getElementById('tog').style.transform='rotate(0deg)';
        

      //   if(window.innerWidth > 1200)
      //   {
      //   document.getElementById("toggle1").style.width = "270px";
      //   document.getElementById("toggle1").style.marginLeft= "1px";
      //   }

      //  else if(window.innerWidth < 1200)
      //   {
      //   document.getElementById("toggle1").style.width = "600px";
      //   document.getElementById("toggle1").style.marginLeft= "1px";
      //   }
       }

    }
    
      return(<div className='container-fluid' >
      <div className='row' style={{display:'flex'}}>
  {/*         
      <Collapse in={open}>
         */}
      <div className='col-3  p-5' style={{backgroundColor:'#F5F5F5' , height:'auto' , width:'270px'}}
       id="example-collapse-text" id='toggle1'>
      {/* 
      <br></br><b><h4 className='p-2'><strong><i>powerscript.</i></strong></h4></b><br></br> */}
      <img src={power} id='imm'/><br></br><br></br>
       <button type='button' className='btn btn-primary btn-lg' onClick={handleShow1} 
      style={{width:'180px' , height:'44px' , fontsize:'50px'}} id='b1'><p style={{fontsize:'5px', marginTop:'-3px'}}>New Task &nbsp;  &nbsp; &nbsp; 
        <b style={{fontsize:'20px'}}>+</b></p></button>
      <br></br>
      <div className='row'>
      <div className='col offset-11'>
      <br></br>
      <button style={{border:'none' , backgroundColor:'#ffffff00'}}id='tog'><img src={circle} style={{height:'30px' , width:'30px' ,
       backgroundColor:'#F5F5F5' ,
       marginLeft:'6px'}} 
       onClick={Toggling}>
         </img></button>
      </div>
      </div>  
    <b><h6 style={{fontSize:'14px' , lineHeight:'9px'}}><strong>FEATURED TOOLS</strong></h6></b>
    <p style={{fontSize:'13px' }}>Product Description<br></br>Instagram Captions<br></br>Blog Ideas</p>
    
    <b><h6 style={{fontSize:'14px' , lineHeight:'20px'}}><strong>PRODUCT DESCRIPTIONS</strong></h6></b>
    <p style={{fontSize:'13px'}}>Product Descriptions</p>

    <b><h6 style={{fontSize:'13px'}}><strong>   <a href='https://www.facebook.com/' 
  target='_blank' style={{color:'black'}}><FacebookIcon></FacebookIcon></a>&nbsp; &nbsp;FACEBOOK</strong></h6></b>
  <p style={{fontSize:'13px'}}>
      Facebook Primary  <br></br>More tools ... </p>
  <b><h6 style={{fontSize:'13px'}}><strong><a href='https://www.instagram.com/accounts/login/' 
  target='_blank' style={{color:'black'}}><InstagramIcon></InstagramIcon></a>&nbsp; &nbsp;INSTGRAM</strong></h6></b>
  <p style={{fontSize:'13px'}}>Instagram Product Showcase <br></br>Instagram Captions</p>
  <b><h6 style={{fontSize:'13px'}}><strong><a href='https://www.linkedin.com/feed/' 
  target='_blank' style={{color:'black'}}><LinkedInIcon></LinkedInIcon></a>&nbsp; &nbsp;LINKEDIN</strong></h6></b>
  <p style={{fontSize:'13px'}}> Linkedin Text Ads..</p>

    <p style={{fontSize:'13px'}}><ExitToAppIcon></ExitToAppIcon> &nbsp; 
    &nbsp;<strong>Log out<br></br>
    <SettingsIcon></SettingsIcon>&nbsp; &nbsp;&nbsp;Settings</strong></p>
    
  
    <p style={{fontSize:'13px'}}>
     <span>  <Link to='/profile1' style={{textDecoration:'none' , color:'black'}}>Profile</Link></span>
      <br></br>
     <span>  <Link to='/order1' style={{textDecoration:'none' , color:'black'}}>Orders</Link></span>
    <br></br>
   <span>  <Link to='/support' style={{textDecoration:'none' , color:'black'}}>Support</Link></span>
   </p>
      
   <Link to='checkout1' style={{textDecoration:'none'}}>  
    <button type='button' className='btn btn-lg' style={{backgroundColor:'#98F1D2' , color:'blue',
    width:'190px' , height:'42px'}} id='btb'>
          <p style={{marginTop:'-4px'}}><b>Get 50<EuroSymbolIcon></EuroSymbolIcon> now</b></p></button>
          </Link>

        <div style={{backgroundColor:'#F5F5F5' , width:'267px' , height:'100vh' 
        , marginLeft:'-45px', marginTop:'-300px'}} id='dv'></div> 
    
    <div style={{backgroundColor:'#F5F5F5' , width:'267px' , height:'655px' 
        , marginLeft:'-45px', marginTop:'-300px'}} id='dvv'></div>     
     
    </div>
   

    <div className='col-9' >

<div className='row p-5'>
    
<div className='row' id='profiles'>
        <div className='col-lg-1 col-3 offset-lg-9 offset-sm-4'>
        {/* <LinkccountCircleIcon style={{fontsize:'30px'}}></LinkccountCircleIcon> */}
        <Link to='/profile1' style={{textDecoration:'none' , color:'black'}}>
            <img src={ladyprofile} style={{height:'45px' , width:'45px' }}></img>
            </Link>
        </div>
<div className='col-lg-2 col-9' id='pts'>
<h6 ><Link to='/profile1' style={{textDecoration:'none' , color:'black'}}>
  Lindsey Westervelt <br></br> PREMIUM</Link></h6>
</div>
 </div>

 <button onClick={closesession} id='logbtn'>
<Link to='/signinpage'>  <PowerSettingsNewIcon></PowerSettingsNewIcon></Link>
  </button>

<h2 id='sub' style={{  fontWeight: "bold"  }}>Subscriptions</h2>



<div className='row' id='navrow'  >
<div className='col-1 m-4'>
<NavLink style={{textDecoration:'none' , color:'#DBDBDB'}}  to='/profile1'><h5 style={{ marginTop:'-17px' }} id='nav'
>Profile</h5></NavLink>  
</div>
<div className='col-1 m-4'>
<NavLink style={{textDecoration:'none' , color:'#DBDBDB'}} to='./billing'><h5 style={{ marginTop:'-17px'}}
id='nav'>Billing</h5></NavLink>  
</div>
<div className='col-2 m-4'>
<NavLink style={{textDecoration:'none' , color:'#A8A8A8'}} to='/subscription1' activeClassName="selected"
 activeStyle={{
    fontWeight: "bolder",
    color: "blue",
    textDecoration:'underline'
  }}><h5 style={{ marginTop:'-17px' , color:'#2143FB'}} id='nav'>Subscriptions</h5></NavLink> 
</div>

<div className='col-1 m-4'>
<NavLink style={{textDecoration:'none' , color:'#DBDBDB'}} to='/settings' >
  <h5 style={{ marginTop:'-17px'}}
 id='navset'>Settings</h5></NavLink>
</div>
</div>





 <hr id='hr'></hr> <br></br>

<div className='row' id='abo'>

<div className='col-2' >
<button type="button" class="btn btn-primary btn-lg" id='bts1' style={{backgroundColor:'#2143FB'}} >
  Hero</button>
</div>

<div className='col-2 ' >
<button type="button" class="btn btn-lg" style={{backgroundColor:'#F2F6FC' , color:'#2143FB' }} id='bts2'>Superhero</button>
</div>

<div className='col-2' >
<button type="button" class="btn btn-lg" style={{backgroundColor:'#F2F6FC' , color:'#2143FB'}} id='bts3'>
  Superman</button>
</div>


<div className='col-4 offset-2' id='dif'>
<h5 className='p-3'  id='mp'> Monthly Payments
<ToggleOffIcon style={{fontSize:'50px' , color:'#2143FB'}} id='icons'>
  </ToggleOffIcon></h5>
</div>

</div>




<div className='row p-3' 
id='suball'>


<div className='col-4 p-3' style={{backgroundColor:'#2143FB' , color:'#F5F5F5' , width:'330px' , 
height:'500px' }} id='sb0'>

<div className='row'>

<div className='col-4 offset-8' style={{
    marginTop:'-10px'}}>
<h3><b><EuroSymbolIcon  style={{fontsize:'30px' , marginTop:'-5px'}} ></EuroSymbolIcon> 97</b></h3>
<p style={{marginTop:'-9px' , marginLeft:'6px'}}>/ &nbsp; Month</p>
</div>

<div className='col-3'  style={{marginTop:'-35px'}}><br></br>
<img src={man1}></img>
</div>

<div className='col-6' style={{marginTop:'-28px' , marginLeft:'-10px'}}>
<h4><br></br>Level 1</h4>
</div>

<p style={{fontsize:'10px'}}><br></br>Creates a Google Ads from scratch and with full
exact requirements and a layout required for use</p>



<p style={{marginTop:'3px'}}>For headlines and Ads &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 <br></br></p>

<center><hr className='' 
style={{marginTop:'-5px' , width:'290px'}}></hr></center>

<p style={{marginTop:'-10px'}}>Content Section &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 <br></br></p>


<center><hr className='' 
style={{marginTop:'-5px' , width:'290px'}}></hr></center>

<p style={{marginTop:'-10px'}}>Different recommendation  <br></br>
and on a every content sections &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;3 <br></br></p>


<center><hr className='' 
style={{marginTop:'1px' , width:'290px'}}></hr></center>

<p style={{marginTop:'-10px'}}>Monthly content Request  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 <br></br></p>


<center><hr className='' 
style={{marginTop:'-10px' , width:'290px'}}></hr></center>
<br></br>
<center><br></br><button type="button" className="btn btn-light btn-lg "  onClick={handleShow}
 style={{color:'blue' , width:'295px' , marginTop:'-65px' }}><b>Select</b></button></center>
 
 </div>

</div>






<div className='col-4 p-3' style={{backgroundColor:'#F9F9F9' , color:'black' , 
 width:'320px' , 
height:'500px'}} id='sb1'>

<div className='row'>
<div className='col-3 p-2 offset-1' style={{color:'black' , backgroundColor:'#FFE500' , height:'35px' ,
 marginTop:'-90'}}>
<h5>current</h5>
</div>
<div className='col-4 offset-4'>
<h4 ><EuroSymbolIcon  style={{fontsize:'30px'}} ></EuroSymbolIcon> <b>197</b></h4>
<p style={{marginTop:'-9px' , marginLeft:'6px'}}>/ &nbsp; Month</p></div>

<div className='col-2 offset-1 p-1'  style={{marginTop:'-41px'}}><br></br>
<img src={man2}></img>
</div>

<div className='col-5 offset-1'  
style={{marginTop:'-32px' , marginLeft:'8px'}}>
<h4><br></br>Level 2</h4>
</div>

<p style={{fontsize:'10px' ,marginTop:'-9px'}}><br></br>Creates a Google Ads from scratch and with full
exact requirements and a layout required for use</p>



<p style={{marginTop:'3px'}}>For headlines and Ads &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 <br></br></p>

<center><hr className='' 
style={{marginTop:'-5px' , width:'290px'}}></hr></center>

<p style={{marginTop:'-10px'}}>Content Section &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 <br></br></p>


<center><hr className='' 
style={{marginTop:'-5px' , width:'290px'}}></hr></center>

<p style={{marginTop:'-10px'}}>Different recommendation  <br></br>
and on a every content sections &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;3 <br></br></p>


<center><hr className='' 
style={{marginTop:'1px' , width:'290px'}}></hr></center>

<p style={{marginTop:'-10px'}}>Monthly content Request  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 <br></br></p>




<center><hr className='' 
style={{marginTop:'-5px' , width:'290px'}}></hr></center>
<br></br>
<center><br></br><br></br><button type="button" className="btn btn-light btn-lg  " 
style={{color:'blue' , width:'295px' , marginTop:'-101px' , border:'1px solid blue' , backgroundColor:'white'}}
 onClick={handleShow2}>Manage Subscription</button></center></div>

</div>






<div className='col-4 p-3 ' style={{backgroundColor:'#F9F9F9' , color:'black' ,
width:'320px' , 
height:'500px' }} id='sb2'>

<div className='row'>

<div className='col-5 offset-7' style={{marginTop:'-10px'}}>
<h4 ><EuroSymbolIcon  style={{fontsize:'30px'}} ></EuroSymbolIcon> <b>297</b></h4>
<p style={{marginTop:'-9px' , marginLeft:'6px'}}>/ &nbsp; Month</p>
</div>

<div className='col-2 offset-1 p-1' style={{marginTop:'-35px'}}><br></br>
<img src={man3}></img>
</div>

<div className='col-5 offset-1' style={{marginTop:'-28px' , marginLeft:'8px'}}>
<h4><br></br>Level 3</h4>
</div>

<p style={{fontsize:'10px' ,marginTop:'-9px'}}><br></br>Creates a Google Ads from scratch and with full
exact requirements and a layout required for use</p>



<p style={{marginTop:'3px'}}>For headlines and Ads &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 <br></br></p>

<center><hr className='' 
style={{marginTop:'-5px' , width:'290px'}}></hr></center>

<p style={{marginTop:'-10px'}}>Content Section &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 <br></br></p>


<center><hr className='' 
style={{marginTop:'-5px' , width:'290px'}}></hr></center>

<p style={{marginTop:'-10px'}}>Different recommendation  <br></br>
and on a every content sections &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;3 <br></br></p>


<center><hr className='' 
style={{marginTop:'1px' , width:'290px'}}></hr></center>

<p style={{marginTop:'-10px'}}>Monthly content Request  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 <br></br></p>

<center><hr className='' 
style={{marginTop:'-5px' , width:'290px'}}></hr></center>
<br></br>
</div>

</div>

<div className='row'>
<div className='col-sm-5 col offset-9'>
<h6><Link style={{textDecoration:'none' , color:'black'}} to='/subscription2' id='arrow'>
  <ArrowForwardIcon></ArrowForwardIcon><br></br><Link to='/subscription2' 
  style={{textDecoration:'none' , color:'black'}}>Check more</Link></Link></h6>
</div>
</div>






</div>

</div>

{/* <div style={{marginLeft:'1070px' , marginTop:'-890px' , borderLeft:'2px solid #DBDBDB',
height:'910px' }}></div>  */}


<div style={{marginLeft:'575px' , backgroundColor:'white' , marginTop:'-90px'}}>
<Limage />
</div>

</div>
</div>

<Modal show={show} onHide={() => setShow(false)} size="xl"  style={{borderRadius:'30px'}}
          aria-labelledby="contained-modal-title-vcenter">

       

        <Modal.Body>
          
          <div className='row'>
             
           <div className='col-8'>
           <center>
           <h3><i><b>MANAGE<br></br>MEMBERSHIP</b></i></h3>
           </center>
           <br></br>

           <center><div style={{border:'3px solid blue' , width:'300px' , borderRadius:'5px' , height:'200px'}} className='p-3'>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          
           <button className='btn btn-primary p-2' style={{color:'white'}}>
           &nbsp;&nbsp;&nbsp;-25% OFF &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</button>

           <div style={{float:'left'}}>
           <h4 >Annual <br></br>Payment</h4><br></br>
           <img src={a197}/>
           <img src={a97} className='p-2'></img>
           </div>
           </div>

           <p className='p-3'>Billed once as 2375.64 Eur</p>
           <button className='btn btn-primary btn-lg p-2' style={{color:'white'}}>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select Subscription&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
           <p className='p-3'>Cancel Membership</p>
           </center>
           </div>



           <div className='col-4' style={{backgroundColor:'#F5F5F5'}}>
           
           <div className='row'>
            <div className='col-2 offset-10'>
            <button onClick={handleClose} className='btn' ><CancelIcon></CancelIcon></button>                  
            </div>
           </div>
           <div className='row p-2'>
          
       
            <div className='col-3 offset-1 p-2'>
                
             <h3><i><b>HERO</b></i></h3>
             <h5 style={{color:'blue'}}>Level 2</h5>
            </div>

            <div className='col-4 offset-4'>
            <img src={man1} className='p-3 '/>
            </div>

           </div>

           <p className='p-3 '>Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament 
               consectutur adipiscing elit. Mauris. Lorem ipsum dolor sit ament consectutur adipiscing elit. 
            </p>
            <h4 className='p-3'>Includes</h4>

            &nbsp;&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-light btn-lg m-1 "
            style={{backgroundColor:'#F9F9F9'}}>
            &nbsp;&nbsp;&nbsp;&nbsp;content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;2
            &nbsp;&nbsp;&nbsp;&nbsp;</button>

            &nbsp;&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-light btn-lg m-1"
            style={{backgroundColor:'#F9F9F9'}}>
            &nbsp;&nbsp;&nbsp;&nbsp;content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;2
            &nbsp;&nbsp;&nbsp;&nbsp;</button>

            &nbsp;&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-light btn-lg m-1"
            style={{backgroundColor:'#F9F9F9'}}>
            &nbsp;&nbsp;&nbsp;&nbsp;content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;2
            &nbsp;&nbsp;&nbsp;&nbsp;</button>

            &nbsp;&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-light btn-lg m-1"
            style={{backgroundColor:'#F9F9F9'}}>
            &nbsp;&nbsp;&nbsp;&nbsp;content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;2
            &nbsp;&nbsp;&nbsp;&nbsp;</button>

           </div>




          </div>
         

        </Modal.Body>

  
      </Modal>


     
      <Modal show={show1} onHide={() => setShow1(false)} size="xl"  style={{borderRadius:'30px' , height:'2000px'}}>

<Modal.Header >
 
  <button onClick={handleClose1} className='btn btn-light' style={{marginLeft:'1050px'}}><CancelIcon></CancelIcon></button>

</Modal.Header>

<Modal.Body>
<div className='row'>
     


     <div className='col-3 p-4'  id='modalside'>
     <h4  className='p-1' style={{ marginTop:'-40px'}}
     id='modaltext'><b>Template center</b></h4><br></br>
     <input type='search' placeholder='Search ' className='p-2' id='modalb'/>
     <br></br><br></br><br></br>
     <h5 style={{}}><b><Link to='' style={{textDecoration:'none' , color:'black'}}
     id='modaltext'>Categories</Link></b></h5><br></br>
     <h5 style={{fontSize:'18px' }}><Link to='' style={{textDecoration:'none' , color:'black'}} 
     id='modaltxt'>Browse all</Link></h5><br></br>
     <button type="button" class="btn btn-lg" style={{backgroundColor:'#EEFOFD' , color:'black',
      border:'2px solid gray' }}
      id='modalb'> &nbsp;&nbsp;&nbsp;<Link to='https://www.facebook.com/' 
      style={{textDecoration:'none' , color:'black'}} id='modaltxtfb'
     >Facebook</Link>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button><br></br><br></br>
     <h5 style={{fontSize:'18px' }}><Link to='https://www.linkedin.com/feed/' 
     style={{textDecoration:'none' , color:'black'}} id='modaltxt'>LinkedIn</Link></h5><br></br>
     <h5 style={{fontSize:'18px' }}><Link to='' style={{textDecoration:'none' , color:'black'}}
     id='modaltxt'>Medium</Link></h5><br></br>
     <h5 style={{fontSize:'18px' }}><Link to='' style={{textDecoration:'none' , color:'black'}}
     id='modaltxt'>Google Ads</Link></h5><br></br>
     <h5 style={{fontSize:'18px' }}><Link to='' style={{textDecoration:'none' , color:'black'}}
     id='modaltxt'>Blog</Link></h5><br></br>
     <h5 style={{fontSize:'18px' }}><Link to='' style={{textDecoration:'none' , color:'black'}} 
     id='modaltxt'>Landing Page</Link></h5><br></br>
     <h5 style={{fontSize:'18px' }}><Link to='' style={{textDecoration:'none' , color:'black'}}id='modaltxt'
     >Greeting </Link></h5><br></br>
     </div>
   
   
   
   <div className='col-9 p-4'>
   
     <h4 style={{marginTop:'-40px'}} id='mdiv'><b>Recommended for you</b></h4><br></br>
   
   
       <div className='row'>
      
       <div className='col-4 p-2' style={{color:'white' , backgroundColor:'blue' , borderRadius:'8px',
     width:'260px' , height:'190px'}} id='mdiv'>
   <button onClick={handleShow9} style={{width:'260px' , 
   marginLeft:'-10px' , marginTop:'-10px' , border:'none' , color:'white' , backgroundColor:'blue' ,
    borderRadius:'8px'}}>
           <div className='row'>
           <div className='col-2 offset-2 p-2' >
           <img src={fb}/>
           </div>
           <div className='col-5 offset-1 p-2'>
           <h6>Facebook <br></br> Primary Text </h6>               
           </div>
           </div>
          <p className='p-2 ' ><br></br>Create Google Ads from scratch with
              exact requirements and layouts
              required for use.
          </p>
   </button> 
        </div>
       
   
   
         <div className='col-4 p-2' style={{color:'white' , backgroundColor:'#F2F2F2' , borderRadius:'8px',
       width:'260px' , height:'190px' }} id='mdiv2'>
   <button onClick={handleShow9} style={{width:'260px' , 
   marginLeft:'-10px' , marginTop:'-10px' , border:'none' , color:'white' , backgroundColor:'#F2F2F2' , borderRadius:'8px' }}>
           <div className='row'>
           <div className='col-2 offset-2 p-2 ' >
           <img src={blog}/>
           </div>
           <div className='col-5 offset-1 p-3'>
           <h6 style={{color:'black'}}>Blog</h6>               
           </div>
           </div>
          <p className='p-2' style={{color:'blue'}}><br></br>Create Google Ads from scratch with
              exact requirements and layouts
              required for use.
          </p>
          </button>
        </div>
   
   
         <div className='col-4 p-2' style={{color:'white' , backgroundColor:'#F2F2F2' , borderRadius:'8px',
       width:'260px' , height:'190px' }} id='mdiv3'>
   <button onClick={handleShow9} style={{width:'260px' , 
   marginLeft:'-10px' , marginTop:'-10px' , border:'none' , color:'white' , backgroundColor:'#F2F2F2' , borderRadius:'8px' }}>
   
           <div className='row'>
           <div className='col-2 offset-2 p-2' >
           <img  src={cart} />
           </div>
           <div className='col-5 offset-1 p-2'>
           <h6 style={{color:'black'}}>Product<br></br> Description </h6>               
           </div>
           </div>
          <p className='p-2' style={{color:'blue'}}><br></br>Create Google Ads from scratch with
              exact requirements and layouts
              required for use.
          </p>
          </button>
        </div>
   
        
   
       </div>
   
   <br></br>
   
   <div className='row'>
   
   <div className='col-4 p-2' style={{color:'white' , backgroundColor:'#F2F2F2' , borderRadius:'8px',
       width:'260px' , height:'190px'}} id='mdiv4'>
   <button onClick={handleShow9} style={{width:'260px' , 
   marginLeft:'-10px' , marginTop:'-10px' , border:'none' , color:'white' , backgroundColor:'#F2F2F2' , borderRadius:'8px' }}>
   
   <div className='row'>
   <div className='col-2 offset-2 p-2' >
   <img src={fb1}/>
   </div>
   <div className='col-5 offset-1 p-2'>
   <h6 style={{color:'black'}}>Facebook <br></br> Primary Text </h6>               
   </div>
   </div>
   <p className='p-2' style={{color:'blue'}}><br></br>Create Google Ads from scratch with
   exact requirements and layouts
   required for use.
   </p>
   </button>
   </div>
   
   
   
   <div className='col-4 p-2 ' style={{color:'white' , backgroundColor:'#F2F2F2' , borderRadius:'8px',
       width:'260px' , height:'190px'  , marginLeft:'20px' }}>
   
   <button onClick={handleShow9} style={{width:'260px' , 
   marginLeft:'-10px' , marginTop:'-10px' , border:'none' , color:'white' , backgroundColor:'#F2F2F2' , borderRadius:'8px' }}>
   
   <div className='row'>
   <div className='col-2 offset-2 p-2 ' >
   <img src={blog}/>
   </div>
   <div className='col-5 offset-1 p-3'>
   <h6 style={{color:'black'}}>Blog</h6>               
   </div>
   </div>
   <p className='p-2' style={{color:'blue'}}><br></br>Create Google Ads from scratch with
   exact requirements and layouts
   required for use.
   </p>
   </button>
   </div>
   
   
   <div className='col-4 p-2' style={{color:'white' , backgroundColor:'#F2F2F2' , borderRadius:'8px',
       width:'260px' , height:'190px' , marginLeft:'20px' }}>
   <button onClick={handleShow9} style={{width:'260px' , 
   marginLeft:'-10px' , marginTop:'-10px' , border:'none' , color:'white' , backgroundColor:'#F2F2F2' , borderRadius:'8px' }}>
   
   <div className='row'>
   <div className='col-2 offset-2 p-2' >
   <img  src={cart} />
   </div>
   <div className='col-5 offset-1 p-2'>
   <h6 style={{color:'black'}}>Product<br></br> Description </h6>               
   </div>
   </div>
   <p className='p-2' style={{color:'blue'}}><br></br>Create Google Ads from scratch with
   exact requirements and layouts
   required for use.
   </p>
   </button>
   </div>
   
   
   
   </div>
   
   
   <br></br>
   
   <div className='row'>
   
   <div className='col-4 p-2' style={{backgroundColor:'#F2F2F2' , borderRadius:'8px',
       width:'260px' , height:'190px' }}>
   <button onClick={handleShow9} style={{width:'260px' , 
   marginLeft:'-10px' , marginTop:'-10px' , border:'none' , color:'white' , backgroundColor:'#F2F2F2' , borderRadius:'8px' }}>
   
   <div className='row'>
   <div className='col-2 offset-2 p-2' >
   <img src={fb1}/>
   </div>
   <div className='col-5 offset-1 p-2'>
   <h6 style={{color:'black'}}>Facebook <br></br> Primary Text </h6>               
   </div>
   </div>
   <p className='p-2' style={{color:'blue'}}><br></br>Create Google Ads from scratch with
   exact requirements and layouts
   required for use.
   </p>
   </button>
   </div>
   
   
   
   <div className='col-4 p-2 ' style={{backgroundColor:'#F2F2F2' , borderRadius:'8px',
       width:'260px' , height:'190px' , marginLeft:'20px' }}>
   <button onClick={handleShow9} style={{width:'260px' , 
   marginLeft:'-10px' , marginTop:'-10px' , border:'none' , color:'white' , backgroundColor:'#F2F2F2' , borderRadius:'8px' }}>
   
   <div className='row'>
   <div className='col-2 offset-2 p-2 ' >
   <img src={blog}/>
   </div>
   <div className='col-5 offset-1 p-3'>
   <h6 style={{color:'black'}}>Blog</h6>               
   </div>
   </div>
   <p className='p-2' style={{color:'blue'}}><br></br>Create Google Ads from scratch with
   exact requirements and layouts
   required for use.
   </p>
   </button>
   </div>
   
   
   <div className='col-4 p-2' style={{color:'white' , backgroundColor:'#F2F2F2' , borderRadius:'8px',
       width:'260px' , height:'190px' , marginLeft:'20px' }}>
   <button onClick={handleShow9} style={{width:'260px' , 
   marginLeft:'-10px' , marginTop:'-10px' , border:'none' , color:'white' , backgroundColor:'#F2F2F2' , borderRadius:'8px' }}>
   
   <div className='row'>
   <div className='col-2 offset-2 p-2' >
   <img  src={cart} />
   </div>
   <div className='col-5 offset-1 p-2'>
   <h6 style={{color:'black'}}>Product<br></br> Description </h6>               
   </div>
   </div>
   <p className='p-2' style={{color:'blue'}}><br></br>Create Google Ads from scratch with
   exact requirements and layouts
   required for use.
   </p>
   </button>
   </div>
   
   
   
   </div>
   
   
   
   
   </div>
     </div>
   
</Modal.Body>

<Modal.Footer>

  
</Modal.Footer>
</Modal>

     {/* <Limage/>  */}



     

<Modal show={show2} onHide={() => setShow2(false)} size="xl"  style={{borderRadius:'30px'}}
          aria-labelledby="contained-modal-title-vcenter" centered>

       

        <Modal.Body>
          
          <div className='row'>
             
           <div className='col-8 p-5'>
        
    <h4><b><br></br><br></br><br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do you want to cancel <br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;your subscription?</b></h4>

    <br></br><br></br><br></br>


    <h5><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter your password</b></h5>
    <input type="password" class="form-control" placeholder="Password" style={{marginLeft:'53px' , width:'500px'}}></input>
           
           <br></br><br></br>

           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-lg " style={{border:'3px solid red' , color:'red'}}>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cancel Submission&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
           </div>

          



           <div className='col-4' style={{backgroundColor:'#F5F5F5'}}>
           
           <div className='row'>
            <div className='col-2 offset-10'>
            <button onClick={handleClose2} className='btn' ><CancelIcon></CancelIcon></button>                  
            </div>
           </div>
           <div className='row p-2'>
          
       
            <div className='col-8 offset-1 p-2'>
                
             <h3><i><b>You will <i style={{color:'red'}}>lose</i> all <br></br> your benefits</b></i></h3>
            </div>

            

           </div>

           <p className='p-3 '>Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament 
               consectutur adipiscing elit. Mauris. Lorem ipsum dolor sit ament consectutur adipiscing elit. 
            </p>
            <h4 className='p-3'>Includes</h4>

            &nbsp;&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-light btn-lg m-1 "
            style={{backgroundColor:'#F9F9F9'}}>
            &nbsp;&nbsp;&nbsp;&nbsp;content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;2
            &nbsp;&nbsp;&nbsp;&nbsp;</button>

            &nbsp;&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-light btn-lg m-1"
            style={{backgroundColor:'#F9F9F9'}}>
            &nbsp;&nbsp;&nbsp;&nbsp;content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;2
            &nbsp;&nbsp;&nbsp;&nbsp;</button>

            &nbsp;&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-light btn-lg m-1"
            style={{backgroundColor:'#F9F9F9'}}>
            &nbsp;&nbsp;&nbsp;&nbsp;content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;2
            &nbsp;&nbsp;&nbsp;&nbsp;</button>

            &nbsp;&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-light btn-lg m-1"
            style={{backgroundColor:'#F9F9F9'}}>
            &nbsp;&nbsp;&nbsp;&nbsp;content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;2
            &nbsp;&nbsp;&nbsp;&nbsp;</button>

           </div>




          </div>
         

        </Modal.Body>

  
      </Modal>

      
 <Modal show={show9} onHide={() => setShow9(false)} size="lg"  aria-labelledby="contained-modal-title-vcenter"
     centered id='insidemodal'>

        <Modal.Header style={{height:'90px' , borderRadius:'30px' , backgroundColor:'#FCFCFC'}}>
       
       <button onClick={handleClose9} className='btn btn-light' 
       style={{backgroundColor:' #ffffff' , border:'none'}}><CancelIcon id='cancel3'></CancelIcon></button>
       
        </Modal.Header>

        <Modal.Body style={{backgroundColor:'#FEFEFE'}}> 
       <center>
           <h3 id='mh' style={{fontFamily:'Bangers/2XL Large' , fontWeight:'790' ,
          color:'#101010'}}><i>PLACE YOUR ORDER</i></h3>
 
 <br></br>
   {/* <div class="form-group row" style={{marginBottom:'13px'}}>
   <label for="inputPassword" class="col-sm-2 col-form-label"><b>UserID</b></label>
   <div class="col-sm-10">
   <input type="number" class="form-control" id="inputPassword" placeholder="UserId" 
     onChange={(e)=>setuserId(e.target.value)}/>
   </div>
   </div> */}

    <div class="form-group row" style={{marginBottom:'13px'}}>
   <label for="inputPassword" class="col-sm-2 col-form-label"><b>Title</b></label>
   <div class="col-sm-10">
   <input type="text" class="form-control" id="inputPassword" placeholder="Title"
     onChange={(e)=>settitle(e.target.value)}/>
   </div>
   </div>

   {/* <div class="form-group row" style={{marginBottom:'13px'}}>
   <label for="inputPassword" class="col-sm-2 col-form-label"><b>Status</b></label>
   <div class="col-sm-10">
   <input type="text" class="form-control" id="inputPassword" placeholder="Status"
     onChange={(e)=>setstatus(e.target.value)}/>
   </div>
   </div> */}

   <div class="form-group row" style={{marginBottom:'13px'}}>
   <label for="inputPassword" class="col-sm-2 col-form-label"><b>Type</b></label>
   <div class="col-sm-10">
   {/* <input type="text" class="form-control" id="inputPassword" placeholder="Type"
     onChange={(e)=>settype(e.target.value)}/> */}
     
<select onChange={(e)=>settype(e.target.value)} style={{width:'340px' , height:'40px' ,  border:'2px solid #CCCCCC'}}>
  <option value="blog">Blog</option>
  <option value="Fb_content">Fb_content</option>
  <option value="Instagram_caption">Instagram_caption</option>
</select>

   </div>
   </div>

   <div class="form-group row" style={{marginBottom:'13px'}}>
   <label for="inputPassword" class="col-sm-2 col-form-label"><b>Content</b></label>
   <div class="col-sm-10">
   <textarea type="text" class="form-control" id="inputPassword" placeholder="Content"
     onChange={(e)=>setcontent(e.target.value)}/>
   </div>
   </div>

{/* 
   <div class="form-group row" style={{marginBottom:'13px'}}>
   <label for="inputPassword" class="col-sm-2 col-form-label"><b>Ratings</b></label>
   <div class="col-sm-10">
   <input type="text" class="form-control" id="inputPassword" placeholder="Ratings"
     onChange={(e)=>setratings(e.target.value)}/>
   </div>
   </div> */}

<br></br>
<button type="button" class="btn btn-secondary" onClick={getmodaldata}>Submit</button>
           </center>
 <br></br>
       
        </Modal.Body>

      </Modal>

</div>)
}
export default Subscription1;
