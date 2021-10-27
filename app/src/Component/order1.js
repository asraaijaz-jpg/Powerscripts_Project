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
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import star4 from './images/star4.png';
import star3 from './images/star3.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo1.png';
import logo6 from './images/logo5.png';
import ladyprofile from './images/profile.png';
import circle from './images/circle.png';
import power from './images/power.png';
import UnfoldMoreTwoToneIcon from '@material-ui/icons/UnfoldMoreTwoTone';
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
import styles from './styles.css';
import axios from 'axios';


function Order1()
{
 
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

 const [apistore ,setapistore]=useState([]);

// https://gencore.ar/power_dom/public/api/orderList
// https://jsonplaceholder.typicode.com/posts

 useEffect(() => {
   axios.get('https://gencore.ar/power_dom/public/api/orderList')
    .then(response=>{
    // console.log(response)
    let a=response;
    let b=response.data;
    let c=response.data.orders.data;
    // console.log(a);
    // console.log(b);
    console.log(c);
    setapistore(c);

    });

    //  axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(response=>{
    // // console.log(response)
    // let a=response;
    // let b=response.data;
    // console.log(b);
    // // setapistore(b);

    // })

  } );
  
  var tabledata=
[
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
  "ratings":<img src={star3}/>,
}
]


  const [show, setShow] = useState(false);   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    useEffect(()=>{
        document.title='React app';
    })

     
    function closesession()
    {
      // let data2=sessionStorage.getItem('mysessiondata');
      // data2=JSON.parse(data2);
      // alert(data2.email);

     sessionStorage.removeItem('mysessiondata');
     localStorage.removeItem('myData');
     sessionStorage.clear();
     localStorage.clear();

     window.history.pushState(null, document.title, window.location.href);
     window.addEventListener('popstate', function (event){
         window.history.pushState(null, document.title,  window.location.href);
     });

    //  <script type="text/javascript"> 
    //   function preventBack() 
    //   {
    //   window.history.forward()
    //   }  
    //   setTimeout("preventBack()", 0);  
    //   window.onunload = function () {null};
    //   </script>

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


 <h2 id='order11'><b>Orders</b></h2><br></br>

<br></br>
<div className='col-6'>



<br></br><br></br>

<div className='row'>
  <div className='col-lg-12 col-6'>

  <div style={{width:'auto'}}>
<table className="table" 

 id='table1'>
 
  <thead>
    <tr id='txt1'>
      {/* <th scope="col">id&nbsp;&nbsp;</th> */}
      <th scope="col">Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </th>
      {/* <th scope="col">status</th> */}
      <th scope="col">Type</th>
      <th scope="col">Content</th>
      {/* <th scope="col" style={{color:'#2143FB'}}>ratings</th> */}
    

      {/* <UnfoldMoreTwoToneIcon id='icon'></UnfoldMoreTwoToneIcon> */}

    </tr>
  </thead>
  <tbody>
   
      
{
     apistore.map((val,id)=>{
      return(
        <tr style={{height:'9px' , fontSize:'15px' }}>
          {/* <td>{apistore[id].id}</td> */}
          <td>{apistore[id].title}</td>
          {/* <td style={{color:'blue'}}><b>{apistore[id].status}</b>
          <br></br><span style={{color:'black'}}>{apistore[id].statusdate}</span></td> */}
          {/* <td style={{color:'blue'}}><b>{apistore[id].status}</b></td> */}
          <td>{apistore[id].type}</td>
           <td><i>{apistore[id].content}</i></td>
           {/* <td>&nbsp;&nbsp;&nbsp;<b>{apistore[id].ratings}</b></td> */}
           
        </tr>
      )
     })
   }

  </tbody>

</table>
</div>


</div>
</div>

<ul>

{/* {
     apistore.map((api=>{
     <li>{apistore.title}</li>
     }))
   
}  */}

</ul>
 

<br></br><br></br>

  <button type="button" class="btn " style={{color:'blue' , border:'1px solid blue'} } id='bt1'>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <b>Export All </b> &nbsp;&nbsp;&nbsp;&nbsp;</button>

  </div>
</div>




{/* 
<img src={logo2} style={{height:'150px' , 
width:'70px' , marginLeft:'1030px' , marginTop:'-500px'}}></img>



<div className='row'>
<div className='col offset-10' style={{marginTop:'-150px' , marginLeft:'900px' }}>
<img src={logo3} style={{height:'200px' ,
 width:'200px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-1px'  , marginLeft:'900px'}}>
<img src={logo4} style={{height:'180px' , 
width:'180px' , marginLeft:'-30px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-150px' , marginLeft:'960px' 
, height:'50px' , 
width:'50px' }}>
<img src={logo5} ></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-80px' , marginLeft:'1050px' 
, height:'30px' , 
width:'30px' ,}}>
<img src={logo6}></img>
</div>
</div> */}

<div style={{marginLeft:'575px' , backgroundColor:'white', marginTop:'250px'}}>
<Limage />
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
{/* <Limage/> */}
</div>)
}
export default Order1;
