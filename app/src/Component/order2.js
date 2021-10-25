import React, { useEffect , useState} from 'react';
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



function Order2()
{
  useEffect(()=>{
    document.title='Order2';
  })

  var tabledata=
  [
    {
      "id":"2134567890",
      "title":"Grownbusters Demo text",
      "status":<button className='btn ' id='bttxt' style={{backgroundColor:'#2143FB',
      color:'white'}}>Finish order</button>,
      "statusdate":"",
      "type":"Blog Article",
      "ratings":""
  },
  {
      "id":"2134567890",
      "title":"Grownbusters Demo text",
      "status":"Delivered on",
      "statusdate":"2021/3/20",
      "type":"Blog Article",
      "ratings":<img src={star4}/>
  },
  {
    "id":"2134567890",
    "title":"Grownbusters Demo text",
    "status":"Delivered on",
    "statusdate":"2021/3/20",
    "type":"Blog Article",
    "ratings":<img src={star3}/>
  }
  ]

  const [show, setShow] = useState(false);   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
   
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
  <img src={power}  id='imm'/><br></br><br></br>
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


  <div className='col-9' >

<div className='row p-5'>
  






<h2 id='order11'><b>Orders</b></h2><br></br>

<div className='col-6'>

<br></br>

<div style={{border:'2px solid #D3D3D3' }} className='p-4'  id='box12'>

<div className='row p-1' id='txt1'>
<h3 ><b>&nbsp;Waiting for delivery</b></h3>
<progress value="80" max="100" style={{width:'80%' , marginLeft:'20px'}}> 32% </progress>
</div>



<div className='row p-1'>
<div className='col-3'>
<h6>&nbsp;Send an Information</h6>
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

<table class="table"  id='table1'>

   
  <thead>
    <tr id='txt1'>
    <th scope="col">id&nbsp;&nbsp;<UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
      <th scope="col">title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
      <th scope="col">status<UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
      <th scope="col">type<UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
      <th scope="col" style={{color:'blue'}}>ratings<UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon></th>
     
    </tr>
  </thead>
  <tbody>
 
  {
     tabledata.map((val,id)=>{
      return(
        <tr style={{height:'9px' , fontSize:'15px' }}>
          <td>{tabledata[id].id}</td>
          <td>{tabledata[id].title}</td>
          <td style={{color:'blue'}}><b>{tabledata[id].status}</b>
          <br></br><span style={{color:'black'}}>{tabledata[id].statusdate}</span></td>
          <td>{tabledata[id].type}</td>
          <td>{tabledata[id].ratings}</td>
        </tr>
      )
     })
   }

  </tbody>

</table>

<br></br><br></br>
<button type="button" class="btn " style={{color:'#2143FB' , border:'1px solid blue'} } id='bt1'>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <b>Export All </b> &nbsp;&nbsp;&nbsp;&nbsp;</button>

</div>

<div className='col-3' id='rside'>


<div className='row' id='seppt' >
      <div id='dip'>
      {/* <LinkccountCircleIcon style={{fontsize:'30px'}}></LinkccountCircleIcon> */}
      <Link to='/profile1' style={{textDecoration:'none' , color:'black'}}>
         <img src={ladyprofile} style={{height:'45x' , width:'45px' }}></img>
         </Link>
      </div>
<div  id='ptss'>
<h6 ><Link to='/profile1' style={{textDecoration:'none' , color:'black'}}>
Lindsey Westervelt <br></br> PREMIUM</Link></h6>
</div>

<button onClick={closesession} id='logbtn3'>
<Link to='/signinpage'>  <PowerSettingsNewIcon></PowerSettingsNewIcon></Link>
  </button>

</div>


<h3><br></br><b>Order Details</b></h3>
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

<h6 style={{marginTop:'-8px'}}><br></br>Price</h6>
<p style={{color:'blue' ,   fontSize:'14px'}}><i>0.00 &nbsp;
  <EuroSymbolIcon style={{height:'15px' ,marginLeft:'-10px'}}></EuroSymbolIcon></i></p>

<center>
<Link to='/order1' style={{textDecoration:'none' , color:'black'}}>
<button className='btn  bt-lg text-center' style={{backgroundColor:'#2143FB' , color:'white'}}
 id='ss'>
Open Orders</button></Link>
<Link to='/support' style={{textDecoration:'none' , color:'black' , fontsize:'2px'}}>
<h6 style={{fontSize:'12px' , marginTop:'9px'}}><b>Report to Support</b></h6>
 </Link>

</center>

<div style={{marginLeft:'-20px' , marginTop:'-890px' , borderLeft:'2px solid #DBDBDB',
height:'1400px'}} id='hh'></div>

</div>








</div>
{/* 
<div style={{marginLeft:'575px' , backgroundColor:'white', marginTop:'250px'}}>
<Limage />
</div> */}

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
export default Order2;
