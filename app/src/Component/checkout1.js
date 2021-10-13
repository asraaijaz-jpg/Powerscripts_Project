import React, { useEffect , useState } from 'react';
import ReactDOM from 'react';
import Icon from '@material-ui/core/Icon';import {Route , Link , Switch , BrowserRouter, NavLink} from 'react-router-dom';
import cartoon from './images/cartoon4.png'
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

import star4 from './images/star4.png';
import star3 from './images/star3.png';
import star5 from './images/star5.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo1.png';
import logo6 from './images/logo5.png';
import ladyprofile from './images/profile.png';
import circle from './images/circle.png';
import power from './images/power.png';
import UnfoldMoreTwoToneIcon from '@material-ui/icons/UnfoldMoreTwoTone';
import p1 from './images/p1.png';
import p2 from './images/p2.png';
import p3 from './images/p3.png';
import Image from './bgimage';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';
import fb from './images/fb.png';
import fb1 from './images/fb1.png';
import blog from './images/blog.png';
import cart from './images/cart.png';
import CancelIcon from '@material-ui/icons/Cancel';
import styles from './styles.css';


function Checkout1()
{
    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     useEffect(()=>{
        document.title='Checkout1';
    })

  
    function Toggling()
    {
     var a= document.getElementById("toggle1").style.width ;
     
      if(a > "210px")
      {
        document.getElementById("toggle1").style.width = "210px";
      document.getElementById("toggle1").style.marginLeft= "-190px";
      document.getElementById('b1').style.marginLeft='-40px';
      document.getElementById('imm').style.marginLeft='-20px';
      document.getElementById('dv').style.marginLeft='-190px';
      document.getElementById('btb').style.display='none';
      document.getElementById('dvv').style.marginLeft='-190px';
      
    }
    else
    {

      document.getElementById("toggle1").style.width = "270px";
      document.getElementById("toggle1").style.marginLeft= "1px";
      document.getElementById('b1').style.marginLeft='-3px';
      document.getElementById('imm').style.marginLeft='-3px';
      document.getElementById('btb').style.display='inline-block';
       
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
     <button type='button' className='btn btn-primary btn-lg' onClick={handleShow} 
    style={{width:'180px' , height:'44px' , fontsize:'50px'}} id='b1'><p style={{fontsize:'5px'
    , marginTop:'-3px'}}>New Task &nbsp;  &nbsp; &nbsp; 
      <b style={{fontsize:'20px'}}>+</b></p></button>
    <br></br>
    <div className='row'>
    <div className='col offset-11'>
    <br></br>
    <button style={{border:'none' , backgroundColor:'#ffffff00'}}><img src={circle} style={{height:'30px' , width:'30px' ,
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
  <b><h6 style={{fontSize:'13px'}}><strong>   <a href='https://www.facebook.com/' style={{color:'black'}}><FacebookIcon></FacebookIcon></a>&nbsp; &nbsp;FACEBOOK</strong></h6></b>
  <p style={{fontSize:'13px'}}>
      Facebook Primary  <br></br>More tools ... </p>
  <b><h6 style={{fontSize:'13px'}}><strong><a href='https://www.instagram.com/accounts/login/' style={{color:'black'}}><InstagramIcon></InstagramIcon></a>&nbsp; &nbsp;INSTGRAM</strong></h6></b>
  <p style={{fontSize:'13px'}}>Instagram Product Showcase <br></br>Instagram Captions</p>
  <b><h6 style={{fontSize:'13px'}}><strong><a href='https://www.linkedin.com/feed/' style={{color:'black'}}><LinkedInIcon></LinkedInIcon></a>&nbsp; &nbsp;LINKEDIN</strong></h6></b>
  <p style={{fontSize:'13px'}}> Linkedin Text Ads..</p>
  
  <p style={{fontSize:'13px'}}><ExitToAppIcon></ExitToAppIcon> &nbsp;
   &nbsp;<strong>Log out<br></br>
  <SettingsIcon></SettingsIcon>&nbsp; &nbsp;&nbsp;Settings</strong></p>
  

  <p style={{fontSize:'13px'}}>
   <span>  <a href='/profile1' style={{textDecoration:'none' , color:'black'}}>Profile</a></span>
    <br></br>
   <span>  <a href='/order1' style={{textDecoration:'none' , color:'black'}}>Orders</a></span>
  <br></br>
 <span>  <a href='/support' style={{textDecoration:'none' , color:'black'}}>Support</a></span>
 </p>
    
  <button type='button' className='btn btn-lg' style={{backgroundColor:'#98F1D2' , color:'blue',
  width:'190px' , height:'42px'}} id='btb'>
     <p style={{marginTop:'-4px'}}><b>Get 50<EuroSymbolIcon></EuroSymbolIcon> now</b></p></button>

      <div style={{backgroundColor:'#F5F5F5' , width:'267px' , height:'100vh' 
        , marginLeft:'-45px', marginTop:'-300px'}} id='dv'></div> 
    
    <div style={{backgroundColor:'#F5F5F5' , width:'267px' , height:'455px' 
        , marginLeft:'-45px', marginTop:'-300px'}} id='dvv'></div> 
    
     
   
  </div>
 

    <div className='col-9' style={{marginTop:'20px'}}>
<div className='row'>



 
 


<div className='col-6'>



<h2 id='c'><b>&nbsp;&nbsp;&nbsp;&nbsp;Checkout</b></h2><br></br>
<p style={{fontSize:'20px' , color:'#606060'}} id='c2'>DELIVERY TYPE</p>


<div id='mc'>
<div className='row' >
  
<div className='col-4 p-3' style={{border:'1px solid #DFDFDF'}} id='box22'>
<a href='' style={{textDecoration:'none' , color:'black'}}>
<h6><b>Superman Delivery</b></h6>
<p style={{color:'#101010'}}>Next 60 mint</p>
<img src={p1}/>
</a>
</div>


<div className='col-4 p-3' style={{border:'1px solid blue' }} id='box23'>
<a href='' style={{textDecoration:'none' , color:'black'}}>
<h6><b>Hero Delivery</b></h6>
<p style={{color:'#101010'}}>Next 120 mint</p>
<img src={p2}/>
</a>
</div>

<div className='col-4 p-3' style={{border:'1px solid #DFDFDF' }} id='box24'>
<a href='' style={{textDecoration:'none' , color:'black'}}>
<h6><b>Standard Delivery</b></h6>
<p style={{color:'#101010'}}>same day delivery</p>
<img src={p3}/>
</a>
</div>
</div>
</div>
<br></br>
<p style={{ fontSize:'20px'}} id='c2'>CART SUMMARY</p>

<div id='dcd' >
<h5 id='c2'>Product <span id='saprator'>Price</span>

<hr></hr>
</h5>

<p id='c2'>Facebook Primary Text 

<span id='saprator2'>21.97<EuroSymbolIcon></EuroSymbolIcon></span></p>


<p id='c2'>Delivery : Hero delivery

<span id='saprator3'>14.97<EuroSymbolIcon></EuroSymbolIcon></span></p>
<p id='c2'>Total (exc. VAT) 
<span id='saprator4'>36.94<EuroSymbolIcon></EuroSymbolIcon></span></p>
<p id='c2'>Value add Tax (Austria - 8%)
<span id='saprator5'>6.65<EuroSymbolIcon></EuroSymbolIcon></span>
</p>
<p id='c2'>
<hr></hr>
</p>

<p id='c2'>Total 



<span id='saprator6'>43.59<EuroSymbolIcon></EuroSymbolIcon></span></p>

</div>


<p style={{ fontSize:'20px' , marginTop:'50px'}} id='c2'>PAYMENT METHOD</p>


<div className='row' id='dr'>


<div style={{marginLeft:'77px' , border:'1px solid blue' , borderRadius:'4px'}} className='col-3 p-2'>
<a href='https://www.paypal.com/us/signin' style={{textDecoration:'none' , color:'black'}}>
<h5 ><b><i><center>Paypal</center></i></b></h5>
</a>
</div>

<div className='col-3 p-2' style={{marginLeft:'11px' , border:'1px solid #DFDFDF' , borderRadius:'4px'}}>
<a href='https://dashboard.stripe.com/login' style={{textDecoration:'none' , color:'black'}}>
<h5><b><i><center>Stripe</center></i></b></h5>
</a>
</div>


<div className='col-4 p-2' style={{marginLeft:'11px' , border:'1px solid #DFDFDF' , borderRadius:'4px'}}>
<a href='' style={{textDecoration:'none' , color:'black'}}>
<h5 style={{fontWeight:'400'}}><i><center>Pay by invoice</center></i></h5>
</a>
</div>

</div>

<br></br><br></br><br></br>
<a href='/billing'>
<button className='btn ' id='c2' style={{backgroundColor:'#2143FB' , color:'white'}}
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pay now&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
</a>
</div>





<div className='col-3' id='rside555' >

  
<div className='row' id='profile'>



      <div className='col-lg-1 col-3 offset-lg-9 offset-sm-4' id='pf'>
      {/* <AccountCircleIcon style={{fontsize:'30px'}}></AccountCircleIcon> */}
      <a href='/profile1' style={{textDecoration:'none' , color:'black'}}>
         <img src={ladyprofile} style={{height:'50px' , width:'50px' }}></img>
         </a>
      </div>

<div className='col-lg-2 col-9' id='pt'>
<h6 id='tb'><a href='/profile1' style={{textDecoration:'none' , color:'black'}}>
Lindsey Westervelt <br></br> PREMIUM</a></h6>
</div>

</div>


<br></br><br></br>

<h4><br></br><br></br>&nbsp;&nbsp;
<br></br><br></br>
Your Order Details</h4>
<h6 style={{marginTop:'-25px'}}><br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brand name</h6>
<p><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growbusters</i></p>

<h6 style={{marginTop:'-10px'}}><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description</h6>

<div id='sd'>
<p style={{fontSize:'14px' , textAlign:'start'}}><i>
  Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur 
  adipiscing elit. Mauris.</i></p>
  </div>

<p style={{color:'blue' , fontSize:'14px'}}><b><i><a href='' style={{textDecoration:'none'}}>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Show more</a></i></b></p>

<h6 style={{marginTop:'-20px'}}><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tags</h6>
<p style={{fontSize:'14px'}}><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;growbusters , cdb , oil , cannabis</i></p>

<h6 style={{marginTop:'-15px'}}><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Website</h6>
<p style={{color:'blue' ,   fontSize:'14px'}}><i><a href='' style={{textDecoration:'none'}}>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;growbusters.de</a></i></p>
<br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br>
<div style={{ marginTop:'-87px' , marginLeft:'-12px',
width:'450px' , height:'120px' }} id='bekar'>
<h3></h3>
</div>



</div>






<div style={{marginLeft:'960px' , marginTop:'-1690px' , borderLeft:'2px solid #DBDBDB',
height:'1700px' ,  width:'20px'}}></div>


</div>
</div>
</div>


     
<Modal show={show} onHide={() => setShow(false)} size="xl"  style={{borderRadius:'30px' , height:'2000px'}}>

<Modal.Header >
 
  <button onClick={handleClose} className='btn btn-light' style={{marginLeft:'1050px'}}><CancelIcon></CancelIcon></button>

</Modal.Header>

<Modal.Body>
  
<div className='row'>
     


     <div className='col-3 p-4'  id='modalside'>
     <h4  className='p-1' style={{ marginTop:'-40px'}}
     id='modaltext'><b>Template center</b></h4><br></br>
     <input type='search' placeholder='Search ' className='p-2' id='modalb'/>
     <br></br><br></br><br></br>
     <h5 style={{}}><b><a href='' style={{textDecoration:'none' , color:'black'}}
     id='modaltext'>Categories</a></b></h5><br></br>
     <h5 style={{fontSize:'18px' }}><a href='' style={{textDecoration:'none' , color:'black'}} 
     id='modaltxt'>Browse all</a></h5><br></br>
     <button type="button" class="btn btn-lg" style={{backgroundColor:'#EEFOFD' , color:'black',
      border:'2px solid gray' }}
      id='modalb'> &nbsp;&nbsp;&nbsp;<a href='https://www.facebook.com/' 
      style={{textDecoration:'none' , color:'black'}} id='modaltxtfb'
     >Facebook</a>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button><br></br><br></br>
     <h5 style={{fontSize:'18px' }}><a href='https://www.linkedin.com/feed/' 
     style={{textDecoration:'none' , color:'black'}} id='modaltxt'>LinkedIn</a></h5><br></br>
     <h5 style={{fontSize:'18px' }}><a href='' style={{textDecoration:'none' , color:'black'}}
     id='modaltxt'>Medium</a></h5><br></br>
     <h5 style={{fontSize:'18px' }}><a href='' style={{textDecoration:'none' , color:'black'}}
     id='modaltxt'>Google Ads</a></h5><br></br>
     <h5 style={{fontSize:'18px' }}><a href='' style={{textDecoration:'none' , color:'black'}}
     id='modaltxt'>Blog</a></h5><br></br>
     <h5 style={{fontSize:'18px' }}><a href='' style={{textDecoration:'none' , color:'black'}} 
     id='modaltxt'>Landing Page</a></h5><br></br>
     <h5 style={{fontSize:'18px' }}><a href='' style={{textDecoration:'none' , color:'black'}}id='modaltxt'
     >Greeting </a></h5><br></br>
     </div>
   
   
   
   <div className='col-9 p-4'>
   
     <h4 style={{marginTop:'-40px'}} id='mdiv'><b>Recommended for you</b></h4><br></br>
   
   
       <div className='row'>
      
       <div className='col-4 p-2' style={{color:'white' , backgroundColor:'blue' , borderRadius:'8px',
     width:'260px' , height:'190px'}} id='mdiv'>
   <button style={{width:'260px' , 
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
   <button style={{width:'260px' , 
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
   <button style={{width:'260px' , 
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
   <button style={{width:'260px' , 
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
   
   <button style={{width:'260px' , 
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
   <button style={{width:'260px' , 
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
   <button style={{width:'260px' , 
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
   <button style={{width:'260px' , 
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
   <button style={{width:'260px' , 
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

</div>)
}
export default Checkout1;