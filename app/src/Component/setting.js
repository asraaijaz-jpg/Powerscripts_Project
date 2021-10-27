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
import logo4 from './images/logo4.png';
import logo5 from './images/logo1.png';
import logo6 from './images/logo5.png';
import ladyprofile from './images/profile.png';
import circle from './images/circle.png';
import power from './images/power.png';
import Image from './bgimage';
import Limage from './Limage';

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
import Collapse from 'react-bootstrap/Collapse'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


function Settings()
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

  const [open, setOpen] = useState(true);

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
        document.getElementById('dvdd').style.marginLeft='-190px';
        // document.getElementById('btb').style.display='none';
  
  
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
        , marginLeft:'-45px', marginTop:'-300px'}} id='dvdd'></div> 
  
     
    </div>
   


    <div className='col-9'  >

<div className='row p-5'>
    
<div className='row' id='profiles'>
        <div className='col-lg-1 col-3 offset-lg-9 offset-sm-4'>
        {/* <LinkcountCircleIcon style={{fontsize:'30px'}}></LinkccountCircleIcon> */}
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


<h3 id='sub' style={{marginBottom:'10px', fontWeight:'700'}}>Settings</h3>



<div className='row' id='navrow'  >
<div className='col-1 m-4'>
<NavLink style={{textDecoration:'none' , color:'#A8A8A8'}}  to='/profile1'><h5 style={{ marginTop:'-17px'}} id='nav'
>Profile</h5></NavLink>  
</div>
<div className='col-1 m-4'>
<NavLink style={{textDecoration:'none' , color:'#A8A8A8'}} to='./billing'><h5 style={{ marginTop:'-17px'}}
id='nav'>Billing</h5></NavLink>  
</div>
<div className='col-2 m-4'>
<NavLink style={{textDecoration:'none' , color:'#A8A8A8'}} to='/subscription1' activeClassName="selected"
 activeStyle={{
    fontWeight: "bold",
    color: "blue",
    textDecoration:'underline'
  }}><h5 style={{ marginTop:'-17px'}} id='nav'>Subscription</h5></NavLink> 
</div>

<div className='col-1 m-4'>
<NavLink style={{textDecoration:'none' , color:'#A8A8A8'}} to='/settings' activeClassName="selected"
 activeStyle={{
    fontWeight: "bold",
    color: "blue",
    textDecoration:'underline'
  }} >
  <h5 style={{ marginTop:'-17px'}}
 id='navset'>Settings</h5></NavLink>
</div>
</div>





 <hr id='hr'></hr> <br></br>

<div id='setting'>

<div className='row'>
<div className='col'>
<br></br>
<h4 id='ns' style={{marginBottom:'-6px' , fontFamily:'Lato/Bold/Large'}}>Notifications Settings</h4><br></br>

<div className="form-check m-3"  >
  <input className="form-check-input" type="checkbox" style={{fontSize:'20px' , border:' 2px solid blue' ,
   marginLeft:'-40px'}}/>
  <label className="form-check-label" style={{fontSize:'17px' , marginTop:'-35px',
fontFamily:'Lato/Regular/Medium'}}>
    Send all system mails via email
  </label>
</div>

<div className="form-check m-3">
  <input className="form-check-input" type="checkbox" style={{fontSize:'20px' , border:' 2px solid blue'  , marginLeft:'-40px'}}/>
  <label className="form-check-label" style={{fontSize:'17px' , fontFamily:'Lato/Regular/Medium'}}>
    Send email when finished project
  </label>
</div>


<div className="form-check m-3">
  <input className="form-check-input" type="checkbox" style={{fontSize:'20px' , border:' 2px solid blue'  , marginLeft:'-40px'}}/>
  <label className="form-check-label" style={{fontSize:'17px' , fontFamily:'Lato/Regular/Medium'}}>
    Send promotional emails
  </label>
</div>

<br></br>
<br></br>
<h5 style={{marginTop:'-15px'}}>Time zone</h5>

<select class="form-select" style={{width:'400px'}}>
  <option selected>CEST / Australia / Vienna (Auto)</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<br></br>
<h5>Language</h5>

<select class="form-select" style={{width:'400px'}}>
  <option selected>English</option>
  <option value="1">Deutsch (Auto)</option>
  <option value="2">Spanish</option>
</select>

<br></br><br></br><br></br>

<button type="button" class="btn btn-lg"
style={{marginTop:'-20px' , backgroundColor:'#2143FB' , color:'white'}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Update Settings&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>

</div>

</div>
</div>

</div>
{/* 
<button  onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>Hello</button> */}

{/* 


<img src={logo2} style={{height:'150px' , 
width:'70px' , 
marginLeft:'900px' , marginTop:'-1200px'}}></img>



<div className='row'>
<div className='col offset-10' style={{               marginTop:'-510px' , marginLeft:'790px' }}>
<img src={logo3} style={{height:'200px' , 
width:'200px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-260px'  , marginLeft:'790px'}}>
<img src={logo4} style={{height:'180px' ,
 width:'180px' , marginLeft:'-30px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-250px' , marginLeft:'800px' }}>
<img src={logo5} ></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-150px' , marginLeft:'900px' }}>
<img src={logo6}></img>
</div>
</div> */}


<div style={{marginLeft:'575px' , backgroundColor:'white' , marginTop:'3px'}}>
<Limage />
</div>

{/* <div id='logout'><button onClick={closesession} id='logbtn'>
<Link to='/signinpage'>  <PowerSettingsNewIcon></PowerSettingsNewIcon></Link>
  </button></div> */}
  
</div>
</div>

   
<Modal show={show} onHide={() => setShow(false)} size="xl" 
 style={{borderRadius:'20px' , height:'2000px' }}>

<Modal.Header >
 
  <button onClick={handleClose} className='btn btn-light' style={{marginLeft:'1050px' , 
backgroundColor:' #ffffff' , border:'none'}}><CancelIcon></CancelIcon></button>

</Modal.Header>

<Modal.Body  >
  
  <div className='row'>
     


  <div className='col-3 p-4'  id='modalside'>
  <h4  className='p-1' style={{ marginTop:'-40px'}}
  id='modaltext'><b>Template center</b></h4><br></br>
  <input type='search'  className='p-2' id='modalb'  placeholder='Search Template'
  style={{height:'37px'}}/>
  <br></br><br></br><br></br>
  <h5 style={{}}><b><Link to='' style={{textDecoration:'none' , color:'black'}}
  id='modaltext'>Categories</Link></b></h5><br></br>
  <h5 style={{fontSize:'18px' }}><Link to='' style={{textDecoration:'none' , color:'black'}} 
  id='modaltxt'>Browse all</Link></h5><br></br>
  <button type="button" class="btn btn-lg" style={{backgroundColor:'#EEFOFD' , color:'black',
   border:'2px solid gray' , textAlign:'start'}}
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

  <h4 style={{marginTop:'-10px'}} id='mdiv'><b>Recommended for you</b></h4><br></br>


    <div className='row'>
   
    <div className='col-4 p-2' style={{color:'white' , backgroundColor:'blue' , borderRadius:'8px',
  width:'260px' , height:'190px'}} id='mdiv'>
<button style={{width:'260px' , 
marginLeft:'-10px' , marginTop:'-10px' , border:'none' , color:'white' , backgroundColor:'blue' ,
 borderRadius:'8px'}}>
        <div className='row'>
        <div className='col-2 offset-2 p-2' >
        <img src={fb} style={{marginTop:'15px' , marginLeft:'-27px'}}/>
        </div>
        <div className='col-5 offset-1 p-3'>
        <h6 style={{color:'white' , marginLeft:'-33px' , marginTop:'9px'
      , textAlign:'start'}}>Facebook <br></br>Primary Text</h6>               
        </div>
        </div>
       <p className='p-2' style={{color:'white' , marginTop:'-27px' , textAlign:'start' , 
      marginLeft:'8px'}}><br></br>Create Google Ad from scratch with
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
        <img src={blog} style={{marginTop:'15px' , marginLeft:'-27px'}}/>
        </div>
        <div className='col-5 offset-1 p-3'>
        <h6 style={{color:'black' , marginLeft:'-113px' , marginTop:'22px'}}>Blog</h6>               
        </div>
        </div>
       <p className='p-2' style={{color:'blue' , marginTop:'-15px' , textAlign:'start' , 
      marginLeft:'8px'}}><br></br>Create Google Ad from scratch with
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
        <img src={cart} style={{marginTop:'15px' , marginLeft:'-27px'}}/>
        </div>
        <div className='col-5 offset-1 p-3'>
        <h6 style={{color:'black' , marginLeft:'-33px' , marginTop:'9px'
      , textAlign:'start'}}>Product <br></br>Description</h6>               
        </div>
        </div>
       <p className='p-2' style={{color:'blue' , marginTop:'-27px' , textAlign:'start' , 
      marginLeft:'8px'}}><br></br>Create Google Ad from scratch with
           exact requirements and layouts
           required for use.
       </p> </button>
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
<img src={fb1} style={{marginTop:'15px' , marginLeft:'-27px'}}/>
        </div>
        <div className='col-5 offset-1 p-3'>
        <h6 style={{color:'black' , marginLeft:'-33px' , marginTop:'9px'
      , textAlign:'start'}}>Facebook <br></br>Primary Text</h6>               
        </div>
        </div>
       <p className='p-2' style={{color:'blue' , marginTop:'-27px' , textAlign:'start' , 
      marginLeft:'8px'}}><br></br>Create Google Ad from scratch with
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
<img src={blog} style={{marginTop:'15px' , marginLeft:'-27px'}}/>
        </div>
        <div className='col-5 offset-1 p-3'>
        <h6 style={{color:'black' , marginLeft:'-113px' , marginTop:'22px'}}>Blog</h6>               
        </div>
        </div>
       <p className='p-2' style={{color:'blue' , marginTop:'-15px' , textAlign:'start' , 
      marginLeft:'8px'}}><br></br>Create Google Ad from scratch with
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
<img src={cart} style={{marginTop:'15px' , marginLeft:'-27px'}}/>
        </div>
        <div className='col-5 offset-1 p-3'>
        <h6 style={{color:'black' , marginLeft:'-33px' , marginTop:'9px'
      , textAlign:'start'}}>Product <br></br>Description</h6>               
        </div>
        </div>
       <p className='p-2' style={{color:'blue' , marginTop:'-27px' , textAlign:'start' , 
      marginLeft:'8px'}}><br></br>Create Google Ad from scratch with
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
<img src={fb1} style={{marginTop:'15px' , marginLeft:'-27px'}}/>
        </div>
        <div className='col-5 offset-1 p-3'>
        <h6 style={{color:'black' , marginLeft:'-33px' , marginTop:'9px'
      , textAlign:'start'}}>Facebook <br></br>Primary Text</h6>               
        </div>
        </div>
       <p className='p-2' style={{color:'blue' , marginTop:'-27px' , textAlign:'start' , 
      marginLeft:'8px'}}><br></br>Create Google Ad from scratch with
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
<img src={blog} style={{marginTop:'15px' , marginLeft:'-27px'}}/>
        </div>
        <div className='col-5 offset-1 p-3'>
        <h6 style={{color:'black' , marginLeft:'-113px' , marginTop:'22px'}}>Blog</h6>               
        </div>
        </div>
       <p className='p-2' style={{color:'blue' , marginTop:'-15px' , textAlign:'start' , 
      marginLeft:'8px'}}><br></br>Create Google Ad from scratch with
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
<img src={cart} style={{marginTop:'15px' , marginLeft:'-27px'}}/>
        </div>
        <div className='col-5 offset-1 p-3'>
        <h6 style={{color:'black' , marginLeft:'-33px' , marginTop:'9px'
      , textAlign:'start'}}>Product <br></br>Description</h6>               
        </div>
        </div>
       <p className='p-2' style={{color:'blue' , marginTop:'-27px' , textAlign:'start' , 
      marginLeft:'8px'}}><br></br>Create Google Ad from scratch with
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

{/* <Limage/> */}


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
export default Settings;