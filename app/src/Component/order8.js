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
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import star4 from './images/star4.png';
import star3 from './images/star3.png';
import star5 from './images/star5.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo1.png';
import logo6 from './images/logo5.png';
import ladyprofile from './images/profile.png';
import circle from './images/circle.png';
import power from './images/power.png';
import h1 from './images/h1.png';
import h2 from './images/h2.png';
import txtimg from './images/txtimg.png';
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
import styles from './styles.css';


function Order8()
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
  alert(type);
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
     <button type='button' className='btn btn-primary btn-lg' onClick={handleShow} 
    style={{width:'180px' , height:'44px' , fontsize:'50px'}} id='b1'><p style={{fontsize:'5px', marginTop:'-3px'}}>New Task &nbsp;  &nbsp; &nbsp; 
      <b style={{fontsize:'20px'}}>+</b></p></button>
    <br></br>
    <div className='row'>
    <div className='col offset-11'>
    <br></br>
    <button style={{border:'none' , backgroundColor:'#ffffff00'}} id='tog'><img src={circle} style={{height:'30px' , width:'30px' ,
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
    <b><h6 style={{fontSize:'13px'}}><strong>   <Link to='https://www.facebook.com/' 
    style={{color:'black'}} target='_blank'><FacebookIcon></FacebookIcon></Link>&nbsp; &nbsp;FACEBOOK</strong></h6></b>
    <p style={{fontSize:'13px'}}>
        Facebook Primary  <br></br>More tools ... </p>
    <b><h6 style={{fontSize:'13px'}}><strong>
      <a href='https://www.instagram.com/accounts/login/' 
    target='_blank' style={{color:'black'}}><InstagramIcon></InstagramIcon></a>
    
    &nbsp; &nbsp;INSTGRAM</strong></h6></b>
    <p style={{fontSize:'13px'}}>Instagram Product Showcase <br></br>Instagram Captions</p>
    <b><h6 style={{fontSize:'13px'}}><strong><Link to='https://www.linkedin.com/feed/' 
    target='_blank' style={{color:'black'}}><LinkedInIcon></LinkedInIcon></Link>&nbsp; &nbsp;LINKEDIN</strong></h6></b>
    <p style={{fontSize:'13px'}}> Linkedin Text Ads..</p>
    <p style={{fontSize:'13px'}}><ExitToAppIcon></ExitToAppIcon>
     &nbsp; &nbsp;<strong>Log out<br></br>
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
    width:'180px' , height:'42px'}} id='btb'>
          <p style={{marginTop:'-4px'}}><b>Get 50<EuroSymbolIcon></EuroSymbolIcon> now</b></p></button>
          </Link>


      <div style={{backgroundColor:'#F5F5F5' , width:'267px' , height:'100vh' 
        , marginLeft:'-45px', marginTop:'-300px'}} id='dv'></div> 
    
   
  </div>
 
  
    <div className='col-9' style={{backgroundColor:'#FEFEFE'}} >
  
  <div className='row p-5'>
    
  

<div className='col-6'>

<h2 id='o8'><b>Final Delivery</b></h2><br></br>
   
 
   <div  id='butdiv'>
   {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
    <button type="button" class="btn  m-1"  style={{borderRadius:'4px' ,
    backgroundColor:'#2143FB' , color:'white' , textAlign:'center'}}
    id='bfontf'>Download All</button>
    <button type="button" class="btn btn-outline-primary m-1"  style={{borderRadius:'4px', textAlign:'center'  }}
    id='bfont'>.xml</button>
    <button type="button" class="btn btn-outline-primary m-1"  style={{borderRadius:'4px', textAlign:'center'}}
    id='bfont'>.txt</button>
    <button type="button" class="btn btn-outline-primary m-1"  style={{borderRadius:'4px' , textAlign:'center'}}
    id='bfont'>.docx&nbsp;</button>
    <button type="button" class="btn btn-outline-primary m-1"  style={{borderRadius:'4px', textAlign:'center'}}
    id='bfont'>.doc&nbsp;</button>
    <button type="button" class="btn btn-outline-primary m-1"  style={{borderRadius:'4px' , textAlign:'center'}}
    id='bfont'>.page&nbsp;</button>

    </div>

<br></br><br></br><br></br>
<div className='row'>
  <div id='do'>
<div className='col-6 p-3' style={{border:'1px solid #676767' , borderRadius:'8px'
 , fontFamily:'Lato/Light/Small'}} id='dimp' >
<Link style={{color:'black' , textDecoration:'none'  , marginLeft:'-18px'}}>
  <img src={h1} style={{marginLeft:'150px' , marginTop:'-50px'}}/>
  <img src={h2} style={{marginLeft:'200px' , marginTop:'-100px'}}/>

<h6 style={{marginTop:'-20px'}}><b>Content 1</b></h6>
<p style={{fontSize:'14px' , marginTop:'-9px' ,textAlign:'justify'}}><br></br>Lorem ipsum dolor sit ament consect adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. 
           <br></br><br></br> Lorem ipsum dolor sit ament consect adipiscing elit. 
           Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
           <br></br>
            </p>
            </Link>
            </div>
</div>


<div id='doo'>
<div className='col-6 p-3' style={{border:'1px solid #676767' , borderRadius:'8px',
 fontFamily:'Lato/Light/Small'}} id='dimp2' >
<Link style={{color:'black' , textDecoration:'none'  , marginLeft:'-18px'}}>
  <img src={h1} style={{marginLeft:'150px' , marginTop:'-50px'}}/>
  <img src={h2} style={{marginLeft:'200px' , marginTop:'-100px'}}/>
<h6 style={{marginTop:'-20px'}}><b>Content 2</b></h6>
<p style={{fontSize:'14px' , marginTop:'-9px' , textAlign:'justify'}}><br></br>Lorem ipsum dolor sit ament consect adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. 
           <br></br><br></br> Lorem ipsum dolor sit ament consect adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
           <br></br>
            </p>
            </Link>
            </div>
</div> 


<div id='do'>
<div className='col-6 p-3' style={{border:'1px solid #676767' , borderRadius:'8px' , 
 fontFamily:'Lato/Light/Small' }} id='dimp3' >
<Link  style={{color:'black' , textDecoration:'none'  , marginLeft:'-18px'}}>
  <img src={h1} style={{marginLeft:'150px' , marginTop:'-50px'}}/>
  <img src={h2} style={{marginLeft:'200px' , marginTop:'-100px'}}/>
<h6 style={{marginTop:'-20px'}}><b>Content 3</b></h6>
<p style={{fontSize:'14px' , marginTop:'-9px' , textAlign:'justify'}}><br></br>Lorem ipsum dolor sit ament consect adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. 
           <br></br><br></br> Lorem ipsum dolor sit ament consect adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
           <br></br>
            </p>
            </Link>
            </div>
</div> 



<div id='doo'>
<div className='col-6 p-3' style={{  borderRadius:'8px'
}} id='dimp4' >
<Link style={{color:'black' , textDecoration:'none'  , marginLeft:'-18px'}}>
  <img src={txtimg} style={{marginTop:'-20px' ,marginLeft:'3px' }} id='imo'/>
  </Link>
  </div>
</div> 



</div>



</div>



<div className='col-3' id='rside'>


<div className='row' id='sepppt' >
      <div id='pid'>
      {/* <LinkccountCircleIcon style={{fontsize:'30px'}}></LinkccountCircleIcon> */}
      <Link to='/profile1' style={{textDecoration:'none' , color:'black'}}>
         <img src={ladyprofile} style={{height:'45x' , width:'45px' }}></img>
         </Link>
      </div>
<div  id='tps'>
<h6 ><Link to='/profile1' style={{textDecoration:'none' , color:'black'}}>
Lindsey Westervelt <br></br> PREMIUM</Link></h6>
</div>

<button onClick={closesession} id='logbtn8'>
<Link to='/signinpage'>  <PowerSettingsNewIcon></PowerSettingsNewIcon></Link>
  </button>
</div>
<br></br>

<h3 id='tt'><b>Order Details</b></h3>
<h6 style={{marginTop:'-7px' , marginBottom:'14px'}}>#2134567890</h6>
<img src={star5} style={{height:'30px' , marginTop:'10px'}}></img>
<br></br><br></br>
<h6 style={{marginTop:'-25px'}}><br></br><br></br><b>Brand name</b></h6>
<p><i>Growbusters</i></p>


<h6 style={{marginTop:'-5px'}}><br></br><b>Description</b></h6>
<p style={{fontSize:'14px'}}><i>Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur 
  adipiscing elit. Mauris.</i></p>
  <p style={{color:'blue' , fontSize:'14px'}}><b><i><Link to='' style={{textDecoration:'none'}}>
    Show more</Link></i></b></p>

<h6 style={{marginTop:'-8px'}}><br></br>Tags</h6>
<p style={{fontSize:'14px'}}><i>growbusters , cdb , oil , cannabis</i></p>

<h6 style={{marginTop:'-8px'}}><br></br>Website</h6>
<p style={{color:'blue' ,   fontSize:'14px'}}><i><Link to='' style={{textDecoration:'none'}}>
    growbusters.de</Link></i></p>



<center>
<Link to='/order1' style={{textDecoration:'none' , color:'black'}}>
<button className='btn  bt-lg text-center' id='ss' style={{backgroundColor:'#2143FB' , color:'white'}}
>
Complete Orders</button></Link>

<br></br>
<button className='btn  bt-lg text-center' style={{backgroundColor:'#D3D9FE' , color:'blue',
marginTop:'15px'}} id='ss'>
Rebuild Orders
</button>


<Link to='/support' style={{textDecoration:'none' , color:'black' , fontsize:'2px'}}>
<h6 style={{fontSize:'12px' , marginTop:'9px'}}><b>Report to Support</b></h6>
 </Link>

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
     
<select onChange={(e)=>settype(e.target.value)}>
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
export default Order8;