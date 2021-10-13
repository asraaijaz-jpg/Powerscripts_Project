import React, { useEffect , useState} from 'react';
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
import col from './images/collection.png';
import star4 from './images/star4.png';
import star3 from './images/star3.png';
import star5 from './images/star5.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo1.png';
import logo6 from './images/logo5.png';
import ladyprofile from './images/profile.png';
import circle from './images/circle.png';
import c1 from './images/c1.png';
import g1 from './images/g1.png';
import g2 from './images/g2.png';
import g3 from './images/g3.png';
import fwi from './images/fwi.png';
import c2 from './images/c2.png';
import t1 from './images/t1.png';
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



function Order5()
{
    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    useEffect(()=>{
        document.title='Order5';
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
       <p style={{marginTop:'-4px'}}><b>Get 50<EuroSymbolIcon></EuroSymbolIcon> now</b></p></button>

      <div style={{backgroundColor:'#F5F5F5' , width:'267px' , height:'580px' 
        , marginLeft:'-45px', marginTop:'-300px'}} id='dv'></div> 
    
   
  </div>
  
  
  
    <div className='col-9' style={{backgroundColor:'#FEFEFE'}} id='sds'>
  
  <div className='row p-5'>
    
  
  
  

<div className='col-6'>


<div className='row'>
<div className='col-7'>
<h2 id='or4'><b>Finish Order</b></h2><br></br>
</div>
<div className='col-5'>
<button type="button" class="btn btn-outline-primary" id='ob4'><b>
    <a href='' style={{textDecoration:'none' , color:'#2143FB'}}>Skip edits</a></b></button>
</div>
</div>

<br></br>
<div className='row'>
<div className='col-5'>
<h5 id='or42'>BUILDER MODE</h5>
</div>
<div className='col-6 offset-1' style={{marginTop:'-80px' , marginLeft:'650px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
{/* <button style={{}}><img src={c2} className='p-2'/></button>
<button><img src={c1} /></button> */}
<br></br><br></br>
<button style={{backgroundColor:'white' , border:'none' , border:'1px solid white' }}>
    <img src={c2} id='imo3'/></button>
<button style={{backgroundColor:'white' , border:'none' , border:'1px solid white' }}>
    <img src={c1} id='imo2'/></button>
</div>
</div>

<br></br><br></br>

<div className='row'>

<div className='col-6'>

<button style={{border:'3px solid #D8D8D8' , borderRadius:'8px' ,
backgroundColor:'white'}} className='btn btn-outline-primary' id='ob'>
   <button  style={{backgroundColor:'white'  ,  padding: 0, border: 'none' , background: 'none' }} 
   className="btn btn-outline-light">
        <img src={col} style={{marginLeft:'150px' , marginTop:'-60px'}}/></button>
<p className='p-1' style={{color:'#101010' , fontSize:'12px' , textAlign:'justify'}}>  Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
           
</p>
</button>

</div>

<div className='col-6'>

<button style={{border:'3px solid #D8D8D8' ,  borderRadius:'8px' ,
backgroundColor:'white'}} className='btn btn-outline-primary' id='ob2'>
   <button  style={{backgroundColor:'white'  ,  padding: 0, border: 'none' , background: 'none' }} 
   className="btn btn-outline-light">
        <img src={col} style={{marginLeft:'150px' , marginTop:'-60px'}}/></button>
<p className='p-1' style={{color:'#101010' , fontSize:'12px' , textAlign:'justify'}}>  Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
           
</p>
</button>

</div>



<div className='col-6' id='as'>


<button style={{ borderRadius:'8px' , backgroundColor:'white'}} className='btn ' >


<p className='p-1' style={{color:'#101010' , fontSize:'12px' , textAlign:'justify' ,
  marginTop:'22px' , marginLeft:'-11px'}}> 

  Lorem ipsum dolor sit ament cons<i style={{color:'white'}}>ectutur adipiscing elit. </i>
  Mauris.Lorem ipsum dolor sit ament <i style={{color:'white'}}>consectutur adipiscing </i>elit. 
  Mauris.Lorem ipsum dolor si <i style={{color:'white'}}>t ament consectutur</i> adipiscing elit. 
  Mauris.Lorem ipsu <i style={{color:'white'}}>m dolor sit ament</i> consectutur adipiscing elit. 
           
</p>
    



</button>

</div>

</div>

{/* <button style={{marginTop:'-490px' , marginLeft:'977px' , width:'90px'}}>hello</button> */}

<br></br><br></br><br></br>

<div className='row' style={{marginLeft:'55px'}}>
    
    <div className='col-3' id='dvv'>
<button style={{backgroundColor:'white' , border:'3px solid #3EB489' , 
 color:'black'  ,  borderRadius:'8px' }}
className='btn btn-outline-secondary p-2' id='bob'><img src={t1} id='ti'/>
<span id='tss'>Liked </span>

<b id='tbb'>4</b></button>
    </div>

    <div className='col-3' id='dv'>
<button style={{backgroundColor:'white' , border:'3px solid #ECECEC' ,
 color:'black'  ,  borderRadius:'8px'}}
className='btn btn-outline-primary p-2' id='bob2'><img src={g2} id='ti'/>
<span id='tss'>Disliked </span>
<b id='tbb'>3</b></button>
    </div>

    <div className='col-3' id='dv2'>
<button style={{backgroundColor:'white' , border:'3px solid #ECECEC' ,
 color:'black' ,  borderRadius:'8px' }}
className='btn btn-outline-primary p-2' id='bob3'><img src={g3} id='ti'/>
<span id='tss'>Make edits </span>
<b id='tbb'>3</b></button>
    </div>
</div>

<br></br><br></br>


<div className='row'>

<div className='col-6'>

<button style={{border:'3px solid #3EB489' , borderRadius:'8px' ,
backgroundColor:'white'}} className='btn btn-outline-primary' id='ob'>
   <button  style={{backgroundColor:'white'  ,  padding: 0, border: 'none' , background: 'none' }} 
   className="btn btn-outline-light">
        <img src={col} style={{marginLeft:'150px' , marginTop:'-60px'}}/></button>
<p className='p-1' style={{color:'#101010' , fontSize:'12px' , textAlign:'justify'}}>  Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
           
</p>
</button>

</div>

<div className='col-6'>


<button style={{border:'3px solid #2143FB' ,  borderRadius:'8px' ,
backgroundColor:'white'}} className='p-2' id='ob2'>
   <button  style={{backgroundColor:'white'  ,  padding: 0, border: 'none' , background: 'none' }} 
   className="btn btn-outline-light">
        <img src={col} style={{marginLeft:'150px' , marginTop:'-60px'}}/></button>
        <p style={{color:'#101010' , fontSize:'12px' , textAlign:'justify'}} >  Lorem ipsum dolor sit ament consectutur adipiscing elit.<i style={{color:'blue'}}>Lobortis vel vitae viverra interdum vitae</i>.
            <i style={{color:'red'}}><strike>Posuere blandit tristique elemnteum risu  sget sodales volutpat</strike></i>.Lorem
            ipsum dolor sit ament consectutur adipiscing elit. Mauris.
           
</p>
<img src={fwi} style={{marginLeft:'109px' , marginBottom:'20px'}}/>
</button>

</div>

</div>










<br></br><br></br><br></br><br></br>
</div>


<div className='col-3' id='rside'>


<div className='row' id='seppp' >
      <div id='dippd'>
      {/* <AccountCircleIcon style={{fontsize:'30px'}}></AccountCircleIcon> */}
      <a href='/profile1' style={{textDecoration:'none' , color:'black'}}>
         <img src={ladyprofile} style={{height:'45x' , width:'45px' }}></img>
         </a>
      </div>
<div  id='ptsssp'>
<h6 ><a href='/profile1' style={{textDecoration:'none' , color:'black'}}>
Lindsey Westervelt <br></br> PREMIUM</a></h6>
</div>
</div>


<h3><b>Order Details</b></h3>
<h6 style={{marginTop:'-7px' , marginBottom:'14px'}}>#2134567890</h6>
{/* <img src={star5} style={{height:'30px' , marginTop:'10px'}}></img> */}
<br></br>
<h6 style={{marginTop:'-25px'}}><br></br><br></br><b>Brand name</b></h6>
<p><i>Growbusters</i></p>


<h6 style={{marginTop:'-5px'}}><br></br><b>Description</b></h6>
<p style={{fontSize:'14px'}}><i>Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur 
  adipiscing elit. Mauris.</i></p>
  <p style={{color:'blue' , fontSize:'14px'}}><b><i><a href='' style={{textDecoration:'none'}}>
    Show more</a></i></b></p>

<h6 style={{marginTop:'-8px'}}><br></br>Tags</h6>
<p style={{fontSize:'14px'}}><i>growbusters , cdb , oil , cannabis</i></p>

<h6 style={{marginTop:'-8px'}}><br></br>Website</h6>
<p style={{color:'blue' ,   fontSize:'14px'}}><i><a href='' style={{textDecoration:'none'}}>
    growbusters.de</a></i></p>

<center>
<a href='/order1' style={{textDecoration:'none' , color:'black'}}>
<button className='btn  bt-lg text-center' style={{backgroundColor:'#2143FB' , color:'white'}}
 id='ss'>
Complete Orders</button></a>
<a href='/support' style={{textDecoration:'none' , color:'black' , fontsize:'2px'}}>
<h6 style={{fontSize:'12px' , marginTop:'9px'}}><b>Report to Support</b></h6>
 </a>

</center>

<div style={{marginLeft:'-20px' , marginTop:'-1190px' , borderLeft:'2px solid #DBDBDB',
height:'1530px'}} id='hh'></div>

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
export default Order5;