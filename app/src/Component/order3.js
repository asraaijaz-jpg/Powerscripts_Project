import React, { useEffect, useState } from 'react';
import ReactDOM from 'react';
import Icon from '@material-ui/core/Icon';
import {Route , Link , Switch , BrowserRouter, NavLink} from 'react-router-dom';
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
import color4 from './images/color4.png';
import color3 from './images/color3.png';
import ladyprofile from './images/profile.png';
import circle from './images/circle.png';
import cir2 from './images/cir2.png';
import cir3 from './images/cir3.png';
import power from './images/power.png';
import UnfoldMoreTwoToneIcon from '@material-ui/icons/UnfoldMoreTwoTone';
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



function Order3()
{
 
  const [show, setShow] = useState(false);   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    useEffect(()=>{
        document.title='Order3';
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
    style={{width:'180px' , height:'44px' , fontsize:'50px'}} id='b1'><p style={{fontsize:'5px'}}>New Task &nbsp;  &nbsp; &nbsp; 
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
  <p style={{fontSize:'13px'}}><ExitToAppIcon></ExitToAppIcon> 
  &nbsp; &nbsp;<strong>Log out<br></br>
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
      <b>Get 50<EuroSymbolIcon></EuroSymbolIcon> now</b></button>

      <div style={{backgroundColor:'#F5F5F5' , width:'267px' , height:'100vh' 
        , marginLeft:'-45px', marginTop:'-300px'}} id='dv'></div> 
    
   
  </div>
 


    <div className='col-9' style={{marginTop:'20px'}}>
<div className='row'>


<div className='row' id='profile'>

  <div  id='touu' className='p-3'>

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

 </div>





<div id='si'>

<h2 id='order11'><b>Orders</b></h2><br></br>

<div className='col-6'>


<div style={{border:'2px solid #D3D3D3' }} className='p-4' id='box1' id='box12'>

<div className='row p-1' id='txt1'>
<h4 >&nbsp;Waiting for delivery</h4>
<progress value="80" max="100" style={{width:'80%' , marginLeft:'20px'}}> 32% </progress>
</div>



<div className='row p-1'>
<div className='col-3'>
<h6>&nbsp;&nbsp;Send an Information</h6>
</div>
<div className='col-3'>
<h6>Read Order details</h6>
</div>
<div className='col-3'>
<h6>Make draft</h6>
</div>
<div className='col-3'>
<h6 style={{marginLeft:'-20px'}}>Review</h6>
</div>
</div>
</div>


<br></br><br></br>

<table className="table" id='table1'>

   
  <thead>
    <tr id='txt1'>
      <th scope="col">&nbsp;id
      <UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
      <th scope="col">title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;
      <UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
      <th scope="col">status
      <UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
      <th scope="col">type
      <UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
      <th scope="col" style={{color:'blue'}}>ratings
      <UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
    </tr>
  </thead>
  <tbody>


    <tr style={{backgroundColor:'#F2F2F2' , borderLeft: '8px solid blue'}} id='txt1'>
    <td scope="row">2134567890</td>
    <td>Growbusters Demo text</td>
    <td><i style={{color:'blue'}}>In progress</i><br></br>Order Details</td>
      <td>Blog Article</td>
      <td></td>
    </tr>

    <tr id='txt1'>
      <td scope="row" >2134567890</td>
      <td>Growbusters Demo text</td>
      <td>Delivered on<br></br>2021/3/20</td>
     <td>Blog Article</td>
     <td><img src={color4}/></td>
     </tr>


    <tr id='txt1'>
    <td scope="row">2134567890</td>
    <td>Growbusters Demo text</td>
    <td>Delivered on<br></br>2021/3/20</td>
      <td>Blog Article</td>
      <td><img src={color3}/></td>
    </tr>
  </tbody>

</table>

<br></br><br></br>
<button type="button" class="btn " style={{color:'blue' , border:'1px solid blue'} } id='bt1'>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <b>Export All </b> &nbsp;&nbsp;&nbsp;&nbsp;</button>

</div>

</div>

<div className='col-3' style={{backgroundColor:'#F5F5F5'}} id='rside2'>

<center><h5 style={{color:'blue' , fontFamily:'Bangers/XL Large 2'}}><br></br><i><b>WE EXPECTED TO <br></br>
FINISH THIS JOB IN<img src={cir2} style={{marginTop:'-20px' , marginLeft:'8px'}}/></b></i></h5>

<br></br>
<img src={cir3} style={{height:'190px' , width:'140px' , marginTop:'-10px'}}/>
</center>

<br></br><br></br><center>
<button className='btn  bt-lg text-center' style={{marginTop:'-40px' , 
backgroundColor:'#2143FB' , color:'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;Orders Now&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
</center>

<br></br>
<h6 style={{marginTop:'-30px'}}><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title</h6>
<p style={{marginTop:'-5px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growbusters Demo text</p>

<h6 style={{marginTop:'-11px'}}><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id</h6>
<p style={{marginTop:'-5px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21345678</p>

<h6 style={{marginTop:'-11px'}}><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type</h6>
<p style={{marginTop:'-5px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blog Article</p>

<h6 style={{marginTop:'-11px'}}><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;order date</h6>
<p style={{marginTop:'-5px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2012-03-23</p>

<br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br>
<div style={{ marginTop:'-220px' , marginLeft:'-12px',
width:'390px' , height:'530px' , backgroundColor:'#F5F5F5' }} id='bekar'>
<h3></h3>
</div>

</div>


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
export default Order3
