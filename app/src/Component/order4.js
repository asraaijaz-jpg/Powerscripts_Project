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
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
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


function Order4()
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

    <div style={{backgroundColor:'#F5F5F5' , width:'267px' , height:'650px' 
        , marginLeft:'-45px', marginTop:'-300px'}} id='dv'></div> 
    
 
</div>



  <div className='col-9' >

<div className='row p-5'>
  





<div className='col-6'>





<div className='row'>
<div className='col-7'>
<h2 id='or4'><b>Finish Order</b></h2><br></br>
</div>
<div className='col-5'>
<button type="button" class="btn btn-outline-primary" id='ob4'><b>
    <Link to='' style={{textDecoration:'none' , color:'#2143FB'}}>Skip edits</Link></b></button>
</div>
</div>

<br></br>
<div className='row'>
<div className='col-5'>
<h5 id='or42'>BUILDER MODE</h5>
</div>
<div className='col-6 offset-1' style={{marginTop:'-80px' , marginLeft:'650px'}}>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

<br></br><br></br><br></br>


<div className='row' id='sblock' >

<div className='col-3' ><button style={{backgroundColor:'white' , border:'3px solid blue' ,
 color:'black' ,  borderRadius:'8px' }}
className='btn btn-outline-primary p-2' id='asa'>Reviewed 
&nbsp;&nbsp;&nbsp;<b>56</b></button></div>


<div className='col-3'><button style={{backgroundColor:'white' , border:'3px solid #979797' ,
 color:'black' ,  borderRadius:'8px' }}
className='btn btn-outline-primary p-2' id='as1'>
  <img src={g1} />&nbsp;&nbsp;&nbsp;
  Liked &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>4</b></button></div>


<div className='col-3'><button style={{backgroundColor:'white' , border:'3px solid #979797' ,
 color:'black' ,  borderRadius:'8px' 
}}
className='btn btn-outline-primary p-2' id='as2'>
  <img src={g2} />&nbsp;&nbsp;&nbsp;
  Disliked  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>3</b></button></div>


<div className='col-3'><button style={{backgroundColor:'white' , border:'3px solid #979797' ,
 color:'black' ,  borderRadius:'8px'  
}}
className='btn btn-outline-primary p-2' id='as3'>
  <img src={g3}/>&nbsp;&nbsp;
  Make edit &nbsp;&nbsp;&nbsp; <b>3</b></button></div>

</div>

<br></br><br></br><br></br><br></br><br></br>


<button style={{border:'1px solid #D4D4D4' ,  borderRadius:'8px' , 
height:'100px', backgroundColor:'white'}} className='btn btn-outline-primary'
id='bo'>

<button  style={{backgroundColor:'white'  , border:'none' , border:'1px solid white'}}
 className="btn btn-outline-light" id='bb'>
    <img src={col} style={{marginTop:'-60px' , width:'109px' , height:'35px'}}/></button>

<p style={{color:'#101010' , fontSize:'14px' , marginTop:'-30px' , textAlign:'justify'}}>  Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
           
</p>
</button>

<br></br>

<button style={{border:'1px solid #D4D4D4' , borderRadius:'8px' ,
 height:'100px',
backgroundColor:'white' }} id='bo2' className='btn btn-outline-primary'>

<button  style={{backgroundColor:'white'  , border:'none' , border:'1px solid white'}} 
className="btn btn-outline-light" id='bb'>
    <img src={col} style={{ marginTop:'-60px' , width:'109px' , height:'35px'}}/></button>

<p style={{color:'#101010' , fontSize:'14px' , marginTop:'-30px' , textAlign:'justify'}}>  Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
           
</p>
</button>


<br></br>

<button style={{border:'1px solid #2143FB' , borderRadius:'8px' , height:'100px',
backgroundColor:'white' }} id='bo3' className='btn btn-outline-primary'>

<button  style={{backgroundColor:'white'  , border:'none' , border:'1px solid white'}}
 className="btn btn-outline-light" id='bb'>
    <img src={col} style={{ marginTop:'-60px' , width:'109px' , height:'35px'}}/></button>

    <p style={{color:'#101010' , fontSize:'14px' , marginTop:'-30px' , textAlign:'justify'}} >  Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament 
            consectutur adipiscing elit. Mauris.<i style={{color:'blue'}}>Lobortis vel vitae viverra interdum vitae</i>.
            <i style={{color:'red'}}><strike>Posuere blandit tristique elemnteum risu  sget sodales volutpat</strike></i>.Lorem
            ipsum dolor sit ament consectutur adipiscing elit. Mauris.
           
</p>
<img src={fwi} style={{ height:'40px'}} id='girl'/>
</button>


<br></br>

<button style={{border:'1px solid #D4D4D4' ,borderRadius:'8px' , height:'100px',
backgroundColor:'white' }} id='bo4' className='btn btn-outline-primary'>

<button  style={{backgroundColor:'white'  , border:'none' , border:'1px solid white'}} 
className="btn btn-outline-light" id='bb'>
    <img src={col} style={{marginTop:'-60px' , width:'109px' , height:'35px'}}/></button>

<p style={{color:'#101010' , fontSize:'14px' , marginTop:'-30px' , textAlign:'justify'}}>  Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
           
</p>
</button>


<br></br>

<button style={{border:'1px solid #ECECEC' , borderRadius:'8px' , height:'100px',
backgroundColor:'white'}} id='bo5' className='btn btn-outline-primary'>

<button  style={{backgroundColor:'white'  , border:'none' , border:'1px solid white'}} 
className="btn btn-outline-light" id='bb'>
    <img src={col} style={{ marginTop:'-60px' , width:'109px' , height:'35px'}} /></button>
    

<p style={{color:'black' , fontSize:'12px' , marginTop:'-30px' , textAlign:'justify'}}>  Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
           
</p>
</button>


</div>




<div className='col-3' id='rsideo'>


<div className='row' id='seppp' >
      <div id='dipp'>
      {/* <LinkccountCircleIcon style={{fontsize:'30px'}}></LinkccountCircleIcon> */}
      <Link to='/profile1' style={{textDecoration:'none' , color:'black'}}>
         <img src={ladyprofile} style={{height:'45x' , width:'45px' }}></img>
         </Link>
      </div>
<div  id='ptsss'>
<h6 ><Link to='/profile1' style={{textDecoration:'none' , color:'black'}}>
Lindsey Westervelt <br></br> PREMIUM</Link></h6>
</div>

<button onClick={closesession} id='logbtn4'>
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
export default Order4;