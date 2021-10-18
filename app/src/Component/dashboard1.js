import React, { useEffect , useState} from 'react';
import ReactDOM from 'react';
import Icon from '@material-ui/core/Icon';
import cartoon from './images/cartoon4.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
import Image from './bgimage';
import Limage from './Limage';
import Dashboard2 from './dashboard2';
import styles from './styles.css';
import {Route , Link , Switch , BrowserRouter, NavLink} from 'react-router-dom';


function Dashboard1()
{ 
    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(()=>{
        document.title='Dashboard 1';
    })

    console.log(window.innerWidth);

    function Toggling()
    {
     var a= document.getElementById("toggle1").style.width ;
     
      if(a > "210px")
      {
        document.getElementById("toggle1").style.width = "210px";
        document.getElementById("toggle1").style.marginLeft= "-185px";
        document.getElementById('b1').style.marginLeft='-40px';
        document.getElementById('imm').style.marginLeft='-25px';
        document.getElementById('btb').style.display='none';
        document.getElementById('tog').style.transform='rotate(180deg)';
  
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
      <div className='row' style={{display:'flex' }}>
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
      <button style={{border:'none' , backgroundColor:'#ffffff00' 
   }} id='tog'>
        <img src={circle} style={{height:'30px' , width:'30px' ,
       backgroundColor:'#F5F5F5' ,
       marginLeft:'6px' }} 
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
     <span>  <a href='/profile1' style={{textDecoration:'none' , color:'black'}}>Profile</a></span>
      <br></br>
     <span>  <a href='/order1' style={{textDecoration:'none' , color:'black'}}>Orders</a></span>
    <br></br>
   <span>  <a href='/support' style={{textDecoration:'none' , color:'black'}}>Support</a></span>
   </p>
      
   <Link to='checkout1' style={{textDecoration:'none'}}>  
    <button type='button' className='btn btn-lg' style={{backgroundColor:'#98F1D2' , color:'blue',
    width:'190px' , height:'42px'}} id='btb'>
         <p style={{marginTop:'-4px'}}><b>Get 50<EuroSymbolIcon></EuroSymbolIcon> now</b></p></button>
         </Link>

        <div style={{backgroundColor:'#F5F5F5' , width:'267px' , height:'100vh' 
        , marginLeft:'-45px', marginTop:'-300px'}}></div> 
    
     
    </div>
   


    <div className='col-9' style={{backgroundColor:'white'}}>

<div className='row p-5'  >
    
<div className='row' id='profiles'>
        <div className='col-lg-1 col-3 offset-lg-9 offset-sm-4'>
        {/* <AccountCircleIcon style={{fontsize:'30px'}}></AccountCircleIcon> */}
        <a href='/profile1' style={{textDecoration:'none' , color:'black'}}>
           <img src={ladyprofile} style={{height:'45px' , width:'45px' }}></img>
           </a>
        </div>
<div className='col-lg-2 col-9' id='pts'>
<h6 ><a href='/profile1' style={{textDecoration:'none' , color:'black'}}>
  Lindsey Westervelt <br></br> PREMIUM</a></h6>
</div>
 </div>

 <h3 className='p-2' style={{fontsize:'32px'}} ><b style={{fontWeight:'bold'}}>Welcome , Lindsey</b></h3>
    <div className='col-6 p-4 m-1' style={{backgroundColor:'#CDE2F5' , borderRadius:'5px' }} id='dba'>
        <div className='row'>
            <div className='col-7'>
            <Link to='/checkout1' style={{textDecoration:'none' , color:'black'}}>
            <h4 
            id='ds'><b>50+ </b>templates <br></br> for your need
            </h4>
            </Link>
            </div>
            <div className='col-5'>
            <img src={cartoon}  id='di'/>
            </div>
        </div>
 
    </div>



    <div className='col-4 p-4' style={{backgroundColor:'#98F1D2' , color:'blue' , borderRadius:'5px' ,  
    }} id='dbb'>
    <h4 id='ds'>
    <Link to='/referalprogram1' style={{textDecoration:'none'}}>
      Invite <b>friends</b> <br></br> and get <b>tasks
       <br></br> for free</b>
       </Link>
       </h4>


    </div>
  
{/* <div className='row'>
<div className='col offset-11' style={{
  marginTop:'-170px'  ,
   marginLeft:'1050px'}}>
<img src={logo2} style={{height:'150px' , 
width:'70px'}}></img>
</div>
</div> */}

  <h5 className='p-2' style={{fontSize:'18px' , marginTop:'-20px'}}><br></br><br></br>POPULAR BY YOU
  <br></br><br></br></h5>
</div>

<div className='row' style={{width:'1340px'}}>



<div className='col-2 offset-1 p-2  ' style={{border:'2px solid blue' , borderRadius:'8px'  }} id='cart2'>

<Link to='' style={{textDecoration:'none'}}>  
    <div className='row'>
        
<div className='col-2 offset-2' style={{backgroundColor:'blue' , borderRadius:'8px' , width:'50px'}}id='top2'>
<RemoveShoppingCartIcon style={{fontSize:'40px' , color:'white' , marginTop:'3px' , marginLeft:'-6px'}}></RemoveShoppingCartIcon>
</div>
<div className='col-7' id='top3'>
<Link to='/productt1' style={{textDecoration:'none'}}><h6>Product <br></br> Description</h6></Link>
</div>
    </div>
</Link>
</div>



<div className='col-2 p-2 ' style={{border:'2px solid blue' , backgroundColor:'blue' , color:'white' , 
 borderRadius:'7px'  }} id='cart3'>

<Link to='/productt8' style={{textDecoration:'none' , color:'white'}}>  
<div className='row'>
<div className='col-3 offset-2' style={{backgroundColor:'white' , borderRadius:'8px'
, width:'50px'}} id='top2'>
<InstagramIcon style={{fontSize:'40px' , color:'#2143FB' , marginTop:'4px' , marginLeft:'-7px'}}></InstagramIcon>
</div>
<div className='col-7' id='top3'>
<Link to='/productt8' style={{textDecoration:'none', color:'white'}}>
<h6>Instagram <br></br> Captions</h6></Link>
</div>
    </div>
</Link>
</div>

<div className='col-2 p-2' style={{border:'2px solid blue' , borderRadius:'7px' }} id='cart4'>

<Link to='/productt1' style={{textDecoration:'none'}}>  
<div className='row'>
<div className='col-3 offset-2' style={{backgroundColor:'blue' , borderRadius:'8px' , width:'50px'}} id='top2'>
<InstagramIcon style={{fontSize:'40px' , color:'white' , marginTop:'4px' , marginLeft:'-7px'}}></InstagramIcon>
</div>
<div className='col-7' id='top3'>
<Link to='/productt1' style={{textDecoration:'none'}}>
<h6>Instagram<br></br> Captions</h6></Link>
</div>

    </div>
  </Link>  
</div>




</div>
<br></br>
<hr style={{marginLeft:'40px' , marginTop:'-8px'}}id='hrd'></hr>
<br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br>
<br></br>

<div style={{marginLeft:'575px' , backgroundColor:'white'}}>
<Limage />
</div>

{/* <div className='row'>
<div className='col offset-10' style={{
    marginTop:'-260px'  , marginLeft:'1050px'}}>
<img src={logo3} style={{height:'190px' ,
 width:'190px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{
    marginTop:'-50px' }}>
<img src={logo4} style={{height:'180px' , 
width:'180px' , marginLeft:'100px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-180px' , marginLeft:'1190px' }}>
<img src={logo5} ></img>
</div>
</div>
<div className='row'>
<div className='col offset-10' style={{marginTop:'-85px' , marginLeft:'1250px' }}>
<img src={logo6}></img>
</div>
</div> */}


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
  <h5 style={{}}><b><a href='' style={{textDecoration:'none' , color:'black'}}
  id='modaltext'>Categories</a></b></h5><br></br>
  <h5 style={{fontSize:'18px' }}><a href='' style={{textDecoration:'none' , color:'black'}} 
  id='modaltxt'>Browse all</a></h5><br></br>
  <button type="button" class="btn btn-lg" style={{backgroundColor:'#EEFOFD' , color:'black',
   border:'2px solid gray' , textAlign:'start'}}
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
</div>)
}
export default Dashboard1;