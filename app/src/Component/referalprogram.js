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
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ladyprofile from './images/profile.png';
import circle from './images/circle.png';
import power from './images/power.png';
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
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




function Referalprogram1()
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
     <button type='button' className='btn btn-primary btn-lg' onClick={handleShow} 
    style={{width:'180px' , height:'44px' , fontsize:'50px'}} id='b1'><p style={{fontsize:'5px'
    , marginTop:'-3px'}}>New Task &nbsp;  &nbsp; &nbsp; 
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
    
 <Link to='/checkout1' style={{textDecoration:'none'}}> 
  <button type='button' className='btn btn-lg' style={{backgroundColor:'#98F1D2' , color:'blue',
  width:'190px' , height:'42px'}} id='btb'>
     <p style={{marginTop:'-4px'}}><b>Get 50<EuroSymbolIcon></EuroSymbolIcon> now</b></p></button>
     </Link>

      <div style={{backgroundColor:'#F5F5F5' , width:'267px' , height:'100vh' 
        , marginLeft:'-45px', marginTop:'-300px'}} id='dv'></div> 
    
    <div style={{backgroundColor:'#F5F5F5' , width:'267px' , height:'350px' 
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

<div id='stp'>
<div id='r'>
 

<h2 style={{color:'#2143FB' , fontFamily:'CA Saygon' , fontWeight:'bold'}} id='r'><i><b><strong>
  

  INVITE & GET 50<EuroSymbolIcon></EuroSymbolIcon> NOW

    </strong></b></i></h2>

     <div className='row' id='r2'>
        <div className='col-6'>
        <Link to='/referalprogram2' style={{textDecoration:'none'}}>
<button className='btn btn-primary'>Invite your friends to Powerscript</button>
</Link>
        </div>
        &nbsp; &nbsp; &nbsp;
        <div className='col-6' id='r3'>

        <Link to='/referalprogram2' style={{textDecoration:'none'}}>
<button className='btn btn-outline-primary' style={{backgroundColor:'white' , color:'blue'}}>

  Check your referrals
  </button>
  </Link>
        </div>
    </div> 
    </div>




<div id='br'>

<div className='btn' 
style={{marginTop:'40px'   , marginLeft:'120px' , border:'1px solid blue'}} id='size'>

    <div className='row'>
        <div className='col-3'>
<img src={one} style={{marginTop:'20px' , marginLeft:'-50px'}}/>
        </div>
        <div className='col-8' style={{color:'black'}}>
          <h6 style={{ marginTop:'5px'}} id='sidet'><b>Send Invitation</b></h6>
          <p style={{marginLeft:'-60px'}}>Send referal links to friends and tell how awesome is Powerscript</p>
          <div className='row'>
              <div className='col-6'>
              <input type='text' style={{border:'1px solid blue' , marginLeft:'-10px' , width:'350px'}}></input>
              </div>
              <div className='col-4'>
              <button className='btn btn-primary' style={{marginLeft:'100px' , height:'26px' , width:'80px'}}>
                  <p style={{marginTop:'-5px'}}>Send</p></button>
              </div>
          </div>
          
        </div>
    </div>
</div>





<button className='btn btn-outline-primary' 
style={{marginTop:'10px'  , marginLeft:'120px' , backgroundColor:'#94F6C7' , border:'none'}}  id='size'>

    <div className='row'>
        <div className='col-3'>
<img src={two} style={{marginTop:'17px' ,marginLeft:'-50px'}}/>
        </div>
        <div className='col-8' style={{color:'black'}}>
          <h6 style={{ marginTop:'5px'}}  id='sidet'><b>Registration</b></h6>
          <p style={{marginLeft:'-40px'}}>Lets make them registration to poewerscriopts using referral link</p>
          
        </div>
    </div>
</button>


<button className='btn btn-outline-primary' 
style={{marginTop:'10px'  ,
marginLeft:'120px' , backgroundColor:'blue' }}  id='size'>

    <div className='row'>
        <div className='col-3'>
<img src={three} style={{marginTop:'17px' , marginLeft:'-50px'}}/>
        </div>
        <div className='col-8' style={{color:'black'}}>
          <h6 style={{marginTop:'5px' , color:'white'}}
        id='sidet'><b>Make first order</b></h6>
          <p style={{marginLeft:'-40px' , color:'white'}}>Make first order and you get 50% discount ordering from poerscript</p>
          
        </div>
    </div>
</button>

<div id='dj'>
<div id='rr'>
{/* <hr style={{marginTop:'30px' , marginLeft:'120px' , width:'350px'}}></hr> */}
<div><h6 style={{marginLeft:'465px' , marginTop:'30px'}}>OR</h6></div>
{/* <hr style={{marginTop:'30px' , marginLeft:'520px' , width:'360px' , marginTop:'-20px'}}></hr> */}

<i><h5 style={{color:'blue' , marginLeft:'440px'}}>
    <Link to='' style={{textDecoration:'none' , 
  color:'#2143FB'}}>Share Link</Link></h5></i>
  <div  id='uft'>
<i><p style={{ marginLeft:'220px'}}>
  You can also share your link by copying and sending it or through social media</p></i>
  </div>
<i><button style={{ marginLeft:'270px' ,  border:'1px solid blue'}}
 className='btn ' id='uf'><p style={{color:'black'}}><center>
      <b>powerscript.com/ref/user-id=33133525</b></center></p></button></i>

<div><button className='btn ' style={{width:'200px' , marginLeft:'380px' , marginTop:'10px'
, backgroundColor:'#2143FB' , color:'white'}}>Copy Link</button></div>
</div>
</div>
</div>
</div>
</div>

{/* 
<img src={logo2} style={{height:'150px' , 
width:'70px' , 
marginLeft:'1100px' , marginTop:'-1200px'}}></img>



<div className='row'>
<div className='col offset-10' style={{               marginTop:'-510px' , marginLeft:'1000px' }}>
<img src={logo3} style={{height:'200px' , 
width:'200px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-280px'  , marginLeft:'1050px'}}>
<img src={logo4} style={{height:'180px' ,
 width:'180px' , marginLeft:'-30px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-250px' , marginLeft:'1100px' }}>
<img src={logo5} ></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-150px' , marginLeft:'1180px' }}>
<img src={logo6}></img>
</div>
</div>  */}


<div style={{marginLeft:'575px' , backgroundColor:'white' , marginTop:'-85px'}}>
<Limage />
</div>

</div>
</div>
{/* <Limage/> */}


     
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
export default Referalprogram1;
