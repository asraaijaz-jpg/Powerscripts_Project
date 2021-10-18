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
import Image from './bgimage';
import star4 from './images/star4.png';
import star3 from './images/star3.png';
import jet from './images/jet.png';
import star5 from './images/star5.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo1.png';
import logo6 from './images/logo5.png';
import ladyprofile from './images/profile.png';
import circle from './images/circle.png';
import power from './images/power.png';
import arrows from './images/arrows.png';
import UnfoldMoreTwoToneIcon from '@material-ui/icons/UnfoldMoreTwoTone';
import Product1 from './product4';
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
import e11 from './images/e11.png';
import e1 from './images/e1.png';
import e2 from './images/e2.png';
import e3 from './images/e3.png';
import e4 from './images/e4.png';
import e5 from './images/e5.png';
import e6 from './images/e6.png';
import e7 from './images/e7.png';
import e8 from './images/e8.png';
import e9 from './images/e9.png';
import e10 from './images/e10.png';
import styles from './styles.css';





function Productt1()
{
    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);   
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

     useEffect(()=>{
        document.title='Product1';
    })

  
    function Toggling()
    {
     var a= document.getElementById("toggle1").style.width ;
     
      if(a > "210px")
      {
        document.getElementById("toggle1").style.width = "210px";
        document.getElementById("toggle1").style.marginLeft= "-185px";    
        document.getElementById('tog').style.transform='rotate(180deg)';
        document.getElementById('b1').style.marginLeft='-40px';
        document.getElementById('im1').style.marginLeft='-20px';
  
  
      }
      else
      {

        document.getElementById("toggle1").style.width = "270px";
        document.getElementById("toggle1").style.marginLeft= "1px";
        document.getElementById('b1').style.marginLeft='-3px';
        document.getElementById('im1').style.marginLeft='-3px';
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
    return(
      
    <div className='container-fluid' >
   <div className='row' style={{display:'flex'}}>

     <div className='col-3 p-5' style={{backgroundColor:'#F5F5F5' , height:'auto' , width:'270px'}}
     id="example-collapse-text" id='toggle1'>


    {/* 
    <br></br><b><h4 className='p-2'><strong><i>powerscript.</i></strong></h4></b><br></br> */}
    <img src={power} id='im1'/><br></br><br></br>
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
  width:'190px' , height:'42px'}}>
       <p style={{marginTop:'-4px'}}><b>Get 50<EuroSymbolIcon></EuroSymbolIcon> now</b></p></button>
       </Link>

      <div style={{backgroundColor:'#F5F5F5' , width:'267px' , height:'100vh' 
        , marginLeft:'-45px', marginTop:'-300px'}}></div> 
     <div style={{backgroundColor:'#F5F5F5' , width:'267px' , height:'505px' 
        , marginLeft:'-45px', marginTop:'-300px'}}></div> 
   
   
 
     </div>
   
   <div className='col-9' style={{backgroundColor:'white'}}>

  
  <div className='row'>
  
  
  <div className='row' id='profile'>



<div className='col-lg-1 col-3 offset-lg-9 offset-sm-4' id='pfp'>
{/* <LinkccountCircleIcon style={{fontsize:'30px'}}></LinkccountCircleIcon> */}
<Link to='/profile1' style={{textDecoration:'none' , color:'black'}}>
   <img src={ladyprofile} style={{height:'50px' , width:'50px' }}></img>
   </Link>
</div>

<div className='col-lg-2 col-9' id='ptp'>
<h6 id='tb'><Link to='/profile1' style={{textDecoration:'none' , color:'black'}}>
Lindsey Westervelt <br></br> PREMIUM</Link></h6>
</div>

</div>
  
  
  
  <div className='col-6'>
  
  
  <h3 id='fp'><b>Facebook Primary Text</b></h3><br></br>
  
  
  <div style={{ width:'300px' }} id='bpp'>
  <button className='btn btn-outline-primary' style={{backgroundColor:'white' , color:'white'}}>
  <Link to='/referalprogram1' style={{textDecoration:'none' , color:'blue'}}>
    Invite teammates to project
    </Link></button>
  </div>
  
  <br></br>
  
  
  <div style={{ width:'400px' , border:'1px solid #F2F2F2' , backgroundColor:'#F2F2F2' ,
   borderRadius:'6px'}} id='bop2'>
  <p style={{marginLeft:'20px'}}> <br></br>Lorem ipsum dolor sit ament consectutur adipisc elit.
   Mauris.Lorem ipsum dolor sit ament consectut adipiscing elit. Mauris.
    <br></br><Link to='' style={{color:'#2143FB' , textDecoration:'none'}}>EXAMPLES</Link>          
  </p>
  </div>
  
  
  
  <div style={{ width:'400px' , border:'1px solid #F2F2F2' , backgroundColor:'blue' , 
  color:'white' , borderRadius:'6px', height:'135px'}}
  className='p-3'  id='bop'>
  
  <div className='row'>
  <div className='col-3'>
  <img src={arrows} style={{marginLeft:'10px'}}/>
  </div>
  <div className='col-8'>
  <h6 style={{fontFamily:'Medium'}}><i><b>CREATE IN OTHER LANGUAGE</b></i></h6>
  </div>
  </div>
  <br></br>
  <select class="form-select" aria-label="Default select example">
    <option selected>Spanish</option>
    <option value="1">Default (English)</option>
    <option value="2">French</option>
    <option value="3">German</option>
  </select>
  
  </div>
  
  
  <div class="form-group" style={{marginLeft:'20px' , marginTop:'20px' }}>
      <label for="exampleInputEmail1">Product / BrandName</label>
      <input type="email" class="form-control2" id="exampleInputEmail1" aria-describedby="emailHelp"
       placeholder="eg . Powerscript"
      style={{border:'1px solid $989898' , height:'50px' }} id='field'/>
  </div>
  
  
  <div class="form-group" style={{marginLeft:'20px' , marginTop:'20px' }}>
      <label for="exampleInputEmail1">Describe your Product</label>
      <input type="email" class="form-control2" id="imp" aria-describedby="emailHelp" placeholder="
      eg. copyright for smll business and specialists"
      style={{border:'1px solid $989898' ,  height:'85px'}} id='field'/>
  </div>
  
  
  <div class="form-group" style={{marginLeft:'20px' , marginTop:'20px'}}>
      <label for="exampleInputEmail1">Tag / Keywords</label>
      <input type="email" class="form-control2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="
      eg. copyright for smll business and specialists"
      style={{border:'1px solid $989898' ,  height:'85px'}} id='field'/>
  </div>
  
  
  <div class="form-group" style={{marginLeft:'20px' , marginTop:'20px'}}>
      <label for="exampleInputEmail1">Website</label>
      <input type="email" class="form-control2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="eg . www.powerscript.com"
      style={{border:'1px solid $989898' ,  height:'50px'  }} id='field'/>
  </div>
  
  
  
  <div class="form-group" style={{marginLeft:'20px' , marginTop:'40px'}}>
     <button className='btn btn-outline-primary'  style={{width:'160px' , color:'#2143FB'
    , backgroundColor:'white'}}>
       <b>Submit</b></button>
  </div>
  
  
  
  </div>
  
<div className='col-lg-3 col-12' style={{ fontFamily:'Bangers/XL Large 3'}} id='side'>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<center>
  
<img src={jet} style={{height:'60px' , 
  width:'80px' , marginLeft:'-30px' , marginTop:'-50px'}} id='jet'></img>
  
  <h4 style={{fontWeight:'850'}}><i><b>ADVANCED MODE</b></i></h4>


<p>get better results with<br></br>few questions setup<br></br>
<span style={{color:'#2143FB'}}>100% money back<br></br>guarantee</span></p>

<button className='btn btn-primary' style={{width:'160px' , 
backgroundColor:'#2143FB' , height:'45px' , marginLeft:'9px'}} onClick={handleShow2} >
  <Link to='' style={{textDecoration:'none' , color:'white' }} >
    Open Now</Link>
    </button>
</center>
</div>
  
  
  
  
 
  
  
  
  
  {/* <div style={{marginLeft:'980px' , marginTop:'-890px' , borderLeft:'2px solid #DBDBDB',
  height:'993px' }}></div> */}
  
  
  
  <div style={{marginLeft:'600px' , marginTop:'-58px' }}>
  <Limage />
  </div>
  
</div>
</div>
   
 
   
</div>
    

  

<Modal show={show2} onHide={() => setShow2(false)} size="lg"  aria-labelledby="contained-modal-title-vcenter"
      style={{borderRadius:'1200px'}} centered>

        <Modal.Header >
         <center>
         <p><i style={{font:'5px' }} id='p1'>Advanced mode setup</i></p>
       <progress id="file" value="32" max="100"  id='p2'> 32% </progress>
       </center>
       
          <button onClick={handleClose2} className='btn btn-light' 
          style={{backgroundColor:' #ffffff' , border:'none'}}>
            <CancelIcon id='cancel3'></CancelIcon></button>
       
        </Modal.Header>

        <Modal.Body>
       <center>
        
           <h3 id='mh2'><b><i>FORMALITY AND TONE</i></b></h3>
           <h5 id='mh2'>Formality</h5>
           </center>
    <br></br>

    <center>
    <button style={{backgroundColor:'white' , borderRadius:'20px' , border:'3px solid #101010',
          padding:'6px' , paddingLeft:'24px' , paddingRight:'24px'}} >
           {/* <img src={e9}  id='be'/> */}
           Informal 🤓
           </button>
           <button style={{backgroundColor:'#F9F9F9' , borderRadius:'20px' , border:'3px solid blue',
          padding:'6px' , paddingLeft:'24px' , paddingRight:'24px' , marginLeft:'15px'}}>
             {/* <img src={e10} id='be'/> */}
             Neutral 😐
             </button>
          <button style={{backgroundColor:'white' , borderRadius:'20px' , border:'3px solid #101010',
          padding:'6px' , paddingLeft:'24px' , paddingRight:'24px' , marginLeft:'15px'}}>
            Formal 💼
            {/* <img src={e8} id='be'/> */}
            </button>
          <br></br><br></br>
          <h5  id='mh2'>Tone</h5><br></br>

          <button style={{backgroundColor:'white' , borderRadius:'20px' , borderRadius:'20px' ,
           border:'3px solid #DDDDDD',
          padding:'6px' , paddingLeft:'24px' , paddingRight:'24px'}}>
            {/* <img src={e7} id='be'/> */}
            Neutral 😐
            </button>
           <button style={{backgroundColor:'white' , borderRadius:'20px' , borderRadius:'20px' , 
           border:'3px solid #DDDDDD',
          padding:'6px' , paddingLeft:'24px' , paddingRight:'24px' , marginLeft:'15px'}}>
             {/* <img src={e6} id='be'/> */}
             Friendly 🤗
             </button>
          <button style={{backgroundColor:'white' , borderRadius:'20p0x' , borderRadius:'20px' ,
           border:'3px solid #DDDDDD',
          padding:'6px' , paddingLeft:'24px' , paddingRight:'24px' , marginLeft:'15px'}}>
            {/* <img src={e5} id='be'/> */}
            Joyful 😊
            </button>
         
         <br></br><br></br>

         <button style={{backgroundColor:'white' , borderRadius:'20px' , borderRadius:'20px' , 
         border:'3px solid #DDDDDD',
          padding:'6px' , paddingLeft:'24px' , paddingRight:'24px'}}>
           {/* <img src={e4} id='be'/> */}
           Optimistic 🌈
           </button>
           <button style={{backgroundColor:'white' , borderRadius:'20px' , borderRadius:'20px' , 
           border:'3px solid #DDDDDD',
          padding:'6px' , paddingLeft:'24px' , paddingRight:'24px' , marginLeft:'15px'}}>
          {/* <img src={e3} id='be'/> */}
          Respectful 🙌
          </button>
          <button style={{backgroundColor:'#F9F9F9' , borderRadius:'20px' , borderRadius:'20px' ,
           border:'3px solid blue',
          padding:'6px' , paddingLeft:'24px' , paddingRight:'24px' , marginLeft:'15px'}}>
            {/* <img src={e2} id='be1'/> */}
            Confident 🤝
            </button>
         
         <br></br><br></br>

         <button style={{backgroundColor:'white' , borderRadius:'20px' , borderRadius:'20px' , 
         border:'3px solid #DDDDDD',
          padding:'6px' , paddingLeft:'24px' , paddingRight:'24px'}}>
           {/* <img src={e1} id='be1'/> */}
           Analytical 📈
           </button>
           <button style={{backgroundColor:'white' , borderRadius:'20px' , borderRadius:'20px' , 
           border:'3px solid #DDDDDD',
          padding:'6px' , paddingLeft:'24px' , paddingRight:'24px' , marginLeft:'15px'}}>
             {/* <img src={e11} id='be1'/> */}
             Urgent ⏰
             </button>
         

    </center>
      <br></br><br></br>
       
        </Modal.Body>

        <Modal.Footer style={{backgroundColor:'#D3D9FE'}}>
      
       

      <h6 ><Link to='' style={{textDecoration:'none' , color:'black'}} id='ad2'>Back</Link></h6>
      {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
      
      
      <button className='btn btn-primary'style={{color:'white' ,
      backgroundColor:'#2143FB' , width:'150px'}} id='ad'>Next</button>
      {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Next&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
      
             
              </Modal.Footer>
      </Modal>
  
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



</div>
)
}
export default Productt1;