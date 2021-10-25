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
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import man1 from './images/man1.png';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import man2 from './images/man2.png';
import man3 from './images/man3.png';
import man11 from './images/man11.png';
import man22 from './images/man22.png';
import man33 from './images/man33.png';
import man21 from './images/man21.png';
import man222 from './images/man222.png';
import man23 from './images/man23.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowBack from '@material-ui/icons/ArrowBack';
import power from './images/power.png';
import Image from './bgimage';
import Limage from './Limage';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';
import fb from './images/fb.png';
import fb1 from './images/fb1.png';
import blog from './images/blog.png';
import cart from './images/cart.png';
import CancelIcon from '@material-ui/icons/Cancel';
import EuroIcon from '@material-ui/icons/Euro';
import a97 from './images/a97.png';
import a197 from './images/a197.png';
import group from './images/group.png';



function Subscription4()
{
    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const [show1, setShow1] = useState(false);   
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
 
    useEffect(()=>{
        document.title='Subscription 4';
    })

  
    function closesession()
    {
     sessionStorage.removeItem('mysessiondata');
     localStorage.removeItem('myData');
     sessionStorage.clear();
     localStorage.clear();
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
 

    <div className='col-9'>

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
<NavLink style={{textDecoration:'none' , color:'#A8A8A8'}} to='/subscription4' activeClassName="selected"
 activeStyle={{
    fontWeight: "bolder",
    color: "blue",
    textDecoration:'underline'
  }}><h5 style={{ marginTop:'-17px' , color:'#2143FB'}} id='nav'>Subscriptions</h5></NavLink> 
</div>

<div className='col-1 m-4'>
<NavLink style={{textDecoration:'none' , color:'#DBDBDB'}} to='/settings' >
  <h5 style={{ marginTop:'-17px'}}
 id='navset'></h5></NavLink>
</div>
</div>





 <hr id='hr'></hr> <br></br>

<div className='row' id='abo'>


<div className='col-2' >
<button type="button"  
  class="btn btn-lg" style={{backgroundColor:'#F2F6FC' , color:'#2143FB' }} id='bts1' >
  Hero</button>
</div>

<div className='col-2 ' >
<button type="button" 
class="btn btn-lg" style={{backgroundColor:'#F2F6FC' , color:'#2143FB'}}
id='bts2'>Superhero</button>
</div>

<div className='col-2' >
<button type="button"   class="btn btn-primary btn-lg" id='bts1' style={{
  backgroundColor:'#2143FB'}} id='bts3'>
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


<div className='col-4 p-3' style={{backgroundColor:'#F9F9F9' , color:'black' , width:'330px' , 
height:'500px' }} id='sb0'>

<div className='row'>

<div className='col-4 offset-8' style={{
    marginTop:'-10px'}}>
<h3><b><EuroSymbolIcon  style={{fontsize:'30px' , marginTop:'-5px'}} ></EuroSymbolIcon> 97</b></h3>
<p style={{marginTop:'-9px' , marginLeft:'6px'}}>/ &nbsp; Month</p>
</div>

<div className='col-3'  style={{marginTop:'-35px'}}><br></br>
<img src={man21}></img>
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
style={{marginTop:'-5px' , width:'290px'}}></hr></center>
<br></br>

<center><p style={{marginTop:'-13px'}}>Billed anually (one payment)</p></center>
</div>

</div>




<div className='col-4 p-3' style={{backgroundColor:'#2143FB' , color:'white' , 
 width:'330px' , 
height:'500px'}} id='sb1'>

<div className='row'>

<div className='col-4 offset-8' style={{
    marginTop:'-10px'}}>
<h3><b><EuroSymbolIcon  style={{fontsize:'30px' , marginTop:'-5px'}} ></EuroSymbolIcon> 57</b></h3>
<p style={{marginTop:'-9px' , marginLeft:'6px'}}>/ &nbsp; Month</p>
</div>

<div className='col-3'  style={{marginTop:'-35px'}}><br></br>
<img src={man222}></img>
</div>

<div className='col-6' style={{marginTop:'-28px'}}>
<h4><br></br>Level 2</h4>
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
style={{marginTop:'-5px' , width:'290px'}}></hr></center>
<br></br>
<center><br></br><button type="button" className="btn btn-light btn-lg "  onClick={handleShow}
 style={{color:'blue' , width:'280px' , marginTop:'-65px'}}>Select</button></center></div>

{/* <center><p style={{marginTop:'-13px'}}>Billed anually (one payment)</p></center> */}
</div>






<div className='col-4 p-3' style={{backgroundColor:'#F9F9F9' , color:'black' ,
width:'330px' , 
height:'500px' }} id='sb2'>

<div className='row'>

<div className='col-4 offset-8' style={{
    marginTop:'-10px'}}>
<h3><b><EuroSymbolIcon  style={{fontsize:'30px' , marginTop:'-5px'}} ></EuroSymbolIcon> 257</b></h3>
<p style={{marginTop:'-9px' , marginLeft:'6px'}}>/ &nbsp; Month</p>
</div>

<div className='col-2 offset-1 p-1' style={{marginTop:'-35px'}}><br></br>
<img src={man23}></img>
</div>


<div className='col-6' style={{marginTop:'-20px' , marginLeft:'9px'}}>
<h4><br></br>Level 3</h4>
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
style={{marginTop:'-5px' , width:'290px'}}></hr></center>
<br></br>
<center><p style={{marginTop:'-20px'}}>Billed anually (one payment)</p></center>
</div>

</div>

<div className='row' >
<div className='col-sm-5 col offset-1' id='a4'>
<h6><Link to='/subscription3' style={{color:'black' , textDecoration:'none'}} >
  <ArrowBackIcon></ArrowBackIcon><br></br>Check more</Link></h6>
</div>

{/* <div className='col offset-6'>
<h6><LinkrrowForwardIcon></LinkrrowForwardIcon><br>
</br>Check more</h6>
</div> */}
</div>






</div>





</div>

{/* <div style={{marginLeft:'1070px' , marginTop:'-890px' , borderLeft:'2px solid #DBDBDB',
height:'910px' }}></div> */}

{/* 

<img src={logo2} style={{marginLeft:'1150px' , marginTop:'-1050px',
width:'70px' , height:'120px'}}></img>   


<div className='row'>
<div className='col offset-10' style={{
    marginTop:'-420px' , marginLeft:'1100px'}}>
<img src={logo3} style={{height:'180px' , 
width:'181px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{
    marginTop:'-250px'  , marginLeft:'1050px'}}>
<img src={logo4} style={{height:'180px' , width:'180px' , marginLeft:'-30px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-210px' , marginLeft:'1109px' , height:'20px' , width:'20px' }}>
<img src={logo5} ></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-130px' , 
marginLeft:'1189px' , height:'40px' , width:'40px'}}>
<img src={logo6}></img>
</div>
</div> */}

<div style={{marginLeft:'575px' , backgroundColor:'white' , marginTop:'-90px'}}>
<Limage />
</div>

</div>
</div>



     
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




<Modal show={show} onHide={() => setShow(false)} size="xl"  style={{borderRadius:'30px'}}
          aria-labelledby="contained-modal-title-vcenter">

       

        <Modal.Body>
          
          <div className='row'>
             
           <div className='col-8'>
           <center>
           <h3><i><b>UPGRADE<br></br>MEMBERSHIP</b></i></h3>
           </center>
           <br></br>


<div className='row'>
    <div className='col-4 offset-1'>

    <div style={{border:'3px solid blue' , width:'300px' , borderRadius:'5px' , height:'200px'}} className='p-3'>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        

           
           <div style={{float:'left'}}>
           <h4 className='p-2'><br></br>Monthy <br></br>Payment</h4><br></br>
           <img src={group}/>
           </div>
           </div>

    </div>
    
<div className='col-4 offset-1'>
<center><div style={{border:'3px solid blue' , width:'300px' , borderRadius:'5px' , height:'200px'}} className='p-3'>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          
           <button className='btn btn-primary p-2' style={{color:'white'}}>
           &nbsp;&nbsp;&nbsp;-25% OFF &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</button>

           
           <div style={{float:'left'}}>
           <h4>Annual <br></br>Payment</h4><br></br>
         
           <img src={a197} className='p-2'/>
           <img src={a97} className='p-2'></img>
           </div>
           </div>

           <p className='p-3'>Billed once as 1584 Eur</p>
           </center>
           </div>

           <div className='row'>
               <div className='col-6 offset-3'>
               <button className='btn btn-primary btn-lg p-2' style={{color:'white'}}>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select Subscription&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          
               </div>
           </div>
           
</div>
</div>

          



           <div className='col-4' style={{backgroundColor:'#F5F5F5'}}>
           
           <div className='row'>
            <div className='col-2 offset-10'>
            <button onClick={handleClose} className='btn' ><CancelIcon></CancelIcon></button>                  
            </div>
           </div>
           <div className='row p-2'>
          
       
            <div className='col-3 offset-1 p-2'>
                
             <h3><i><b>SUPERHERO</b></i></h3>
             <h5 style={{color:'blue'}}>Level 1</h5>
            </div>

            <div className='col-4 offset-4'>
            <img src={man2} className='p-3 '/>
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




{/* <Limage/> */}
</div>)
}
export default Subscription4;
