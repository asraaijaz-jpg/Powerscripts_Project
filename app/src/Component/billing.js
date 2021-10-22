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
import UnfoldMoreTwoToneIcon from '@material-ui/icons/UnfoldMoreTwoTone';
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
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


function Billing()
{
  const [show, setShow] = useState(false);   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(()=>{
        document.title='Billing';
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
        , marginLeft:'-45px', marginTop:'-300px'}} id='dv'></div> 
    
    <div style={{backgroundColor:'#F5F5F5' , width:'267px' , height:'685px' 
        , marginLeft:'-45px', marginTop:'-300px'}} id='dvv'></div> 
    
     
   
  </div>
    

    <div className='col-9'>

<div className='row p-5'>
    
<div className='row' id='profiles'>
        <div className='col-lg-1 col-3 offset-lg-9 offset-sm-4'>
        {/* <LinkccountCircleIcon style={{fontsize:'30px'}}></LinkccountCircleIcon> */}
        <Link to='/profile1' style={{textDecoration:'none' , color:'black'}}> 
        <img src={ladyprofile} style={{height:'45px' , width:'45px' }}></img></Link>
        </div>
<div className='col-lg-2 col-9' id='pts'>
<h6 ><Link to='/profile1' style={{textDecoration:'none' , color:'black'}}>
  Lindsey Westervelt <br></br> PREMIUM</Link></h6>
</div>
 </div>

 <button onClick={closesession} id='logbtn'>
<Link to='/signinpage'>  <PowerSettingsNewIcon></PowerSettingsNewIcon></Link>
  </button>
  
<h3 id='sub'><b>Billing</b></h3>



<div className='row' id='navrow'  >
<div className='col-1 m-4'>
<NavLink style={{textDecoration:'none' , color:'#A8A8A8'}}  to='/profile1'><h5 style={{ marginTop:'-17px'}} id='nav'
>Profile</h5></NavLink>  
</div>
<div className='col-1 m-4'>
<NavLink style={{textDecoration:'none' , color:'#A8A8A8'}} to='./billing'
 activeClassName="selected"
 activeStyle={{
    fontWeight: "bold",
    color: "blue",
    textDecoration:'underline'
  }}><h5 style={{ marginTop:'-17px'}}
id='nav'>Billing</h5></NavLink>  
</div>
<div className='col-2 m-4'>
<NavLink style={{textDecoration:'none' , color:'#A8A8A8'}} to='/subscription1'><h5 style={{ marginTop:'-17px'}} id='nav'>Subscription</h5></NavLink> 
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





 <hr id='hrt'></hr> <br></br>


<div className='row' style={{backgroundColor:'#F8F8F8' }} id='boxb'>

<div className='col-5' style={{marginLeft:'20px'}}>
<h4 id='ii' style={{fontFamily:'Lato/Semibold/Large'}}>Outstanding Balance</h4>
<h3 id='top'><b>120.00<EuroSymbolIcon style={{fontSize:'30px',
marginTop:'-9px'}}></EuroSymbolIcon></b></h3>
</div>

<div className='col-2 offset-4'><br></br>
<button type="button" class="btn btn-danger" style={{backgroundColor:'#FC527D'}} id='ib'>
    &nbsp;Pay Now&nbsp;</button>
</div>

</div>


<div className='row m-4' style={{width:'1080px'}}>
<h5 style={{fontSize:'20px' , color:'#333333'}} 
id='bill'><br></br>Billing Address</h5><br></br><br></br>

<div className='col-5 ' id='fp2b'>
<p style={{marginTop:'-15px' , fontSize:'14px'}}><br></br>Country</p>
<select class="form-select"  style={{marginTop:'-10px' , fontSize:'16px'  , fontFamily:'Lato/Regular/Regular',
color:'#333333' , height:'45px'}}>
  <option selected>Australia</option>
  <option value="1">Viewer</option>
</select>
</div>

<div className='col-5 offset-1 ' id='fp3b'>
<p style={{marginTop:'-15px' , fontSize:'14px'}}><br></br>City</p>
<div class="form-group">
<input type="text" class="form-control" id="exampleInputEmail1" placeholder="Vienna"
 style={{marginTop:'-15px' 
,  fontSize:'16px'  , fontFamily:'Lato/Regular/Regular',
color:'#333333' , height:'45px'}}/>
</div>
</div>

<div className='col-5 ' id='fp2b' >
    <br></br>
<p style={{marginTop:'-15px' , fontSize:'14px'}}>Address</p>
<div class="form-group">
<input type="text" class="form-control" id="exampleInputEmail1" placeholder="Adalbirt-Stifter-StraBe 69-123" 
style={{marginTop:'-15px' ,  fontSize:'16px'  , fontFamily:'Lato/Regular/Regular',
color:'#333333', height:'45px' }}/>
</div>
</div>

<div className='col-5 offset-1' id='fp4b'>
    <br></br>
<p style={{marginTop:'-15px' , fontSize:'14px'}}>Postal Code</p>
<div class="form-group">
<input type="email" class="form-control" id="exampleInputEmail1" placeholder="12345" 
style={{marginTop:'-15px' ,  fontSize:'16px'  , fontFamily:'Lato/Regular/Regular',
color:'#333333', height:'45px'}}/>
</div>

</div>
</div>


<div className='row'>
<div className='col-5 m-4'>
<h5 style={{fontSize:'18px'}} id='bilt'>
<br></br><b>Does you company have EU VAT<br></br>taxpayer number?</b></h5>
</div>
<div className='col-5 m-4'>
<h5 style={{fontSize:'18px'}}id='bilt2'><br></br>
<br></br><b>Prefered payement method</b></h5>
</div>
</div>


<div className='row' style={{width:'1080px'}}>

<div className='col-5 m-4'  >

<div class="form-check"   id='bff'>

  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
  <label class="form-check-label" for="flexRadioDefault1 ">
    Yes
  </label>  
  <p style={{marginTop:'10px' , fontSize:'16px' , color:'#333333'}}>please enter company VAT number</p>
  <div style={{width:'250px' , height:'30px',border:'1px solid gray' , marginTop:'-9px'}} className='p-1'>

  <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AT <DragHandleIcon style={{color:'red'}}></DragHandleIcon>&nbsp;&nbsp;123456789</h6>

  </div>
    <br></br><input class="form-check-input" type="radio"/>
  <label class="form-check-label">
    No
  </label>
</div>
</div>

<div className='col-5 m-4'>

<div class="form-check" id='bff2'>
  <input class="form-check-input" type="radio" checked />
  <label class="form-check-label" >
    Invoice
  </label>
  <p style={{marginTop:'10px'  , fontSize:'16px' , color:'#333333'}}>Invoice will sent to reciepient email</p>
<div class="form-group">
<input type="email" class="form-control" value="gencore.international@protonmail.ch"
style={{fontSize:'12px' , marginTop:'-9px' , border:'2px solid #2143FB' , color:'#101010'}}/>
<br></br><input class="form-check-input" type="radio"  />
  <label class="form-check-label" style={{fontSize:'20px'}}>
    Pay by creditcard / paypal / etc
  </label>
</div>
</div>

</div>

</div>



</div>

{/* 
<img src={logo2} style={{height:'150px' , 
width:'70px' , marginTop:'-1190px'  , 
marginLeft:'1150px'}}></img>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-270px' }}>

<img src={logo3} style={{height:'180px' ,
 width:'180px' , marginTop:'-190px'  , 
 marginLeft:'90px'}}></img>
</div>
</div> */}
<br></br>
<span>
<button type="button"     id='bill2'
 className="btn btn-primary p-2" style={{backgroundColor:'#2143FB',
 color:'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Update Billing Setting
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>

<h4 id='bill3'><br></br><br></br><br></br><br></br>Transaction History </h4>
{/* <Link to='' id='bill4'>Export All</Link> */}
</span>


<table class="table" id='table2'>

   
  <thead>
    <tr>
    <th scope="col">Invoice ID<UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
      <th scope="col">Invoice Date<UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
      <th scope="col">Status<UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
      <th scope="col">Type<UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
      <th scope="col">Action<UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
    </tr>
  </thead>
  <tbody>
    <tr style={{height:'10px' , fontSize:'14px', fontFamily:'Lato/Regular/Regular'}}>
      <th scope="row">20210410-10001</th>
      <td>2021-04-10</td>
      <td>Not paid</td>
      <td>120.00 <EuroSymbolIcon></EuroSymbolIcon></td>
     <td><button type="button" class="btn btn-primary"
     style={{fontSize:'13px', backgroundColor:'#2143FB' , color:'white'}}>&nbsp;Pay now&nbsp;&nbsp;</button></td>
    </tr>
    <tr style={{height:'10px' , fontSize:'14px', fontFamily:'Lato/Regular/Regular'}}>
      <td scope="row">20210410-10001</td>
      <td>2021-04-10</td>
      <td>Paid</td>
      <td>120.00 <EuroSymbolIcon></EuroSymbolIcon></td>
      <td><button type="button" class="btn btn-primary"
      style={{fontSize:'13px' , backgroundColor:'#2143FB' , color:'white'}}>Download</button></td>
    </tr>
    <tr style={{height:'10px' , fontSize:'14px' , fontFamily:'Lato/Regular/Regular'}}>
      <td scope="row">Refera code <br></br>@uftn45tgty</td>
      <td>2021-04-10</td>
      <td>Bonus</td>
      <td> -120.00 <EuroSymbolIcon></EuroSymbolIcon></td>
      <td></td>
    </tr>

  </tbody>
</table>
{/* <Image/> */}

{/* 
<div className='row'>
<div className='col offset-10'                      style={{marginTop:'-490px' }}>
<img src={logo4} style={{height:'180px' , 
width:'180px' , marginLeft:'100px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-470px' , marginLeft:'1140px' }}>
<img src={logo5} ></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-360px' , marginLeft:'1250px' }}>
<img src={logo6}></img>
</div>
</div> */}


<div style={{marginLeft:'575px' , backgroundColor:'white' , marginTop:'-476px'}}>
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


</div>)
}
export default Billing;