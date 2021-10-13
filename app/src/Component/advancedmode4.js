import { func } from 'prop-types';
import React , {useState , useEffect} from 'react';
import { ReactDOM,} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';
import fb from './images/fb.png';
import fb1 from './images/fb1.png';
import blog from './images/blog.png';
import cart from './images/cart.png';
import starf from './images/starf.png';
import CancelIcon from '@material-ui/icons/Cancel';
import r1 from './images/r1.png';
import r2 from './images/r2.png';
import a1 from './images/a1.png';
import UnfoldMoreTwoToneIcon from '@material-ui/icons/UnfoldMoreTwoTone';


function Advancedmode4()
{
    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    useEffect(()=>{
      document.title='Advancedmode 4';
  })

    return(<div>

     <div className="text-center">
     <br></br> <br></br> <br></br> <br></br>
  <Button className="btn btn-primary" onClick={handleShow} >Show Advancemode 4</Button></div>

        <Modal show={show} onHide={() => setShow(false)} size="lg"  aria-labelledby="contained-modal-title-vcenter"
       centered>

        <Modal.Header >
         <center>
       </center>
          <button onClick={handleClose} className='btn btn-light'
          style={{backgroundColor:' #ffffff' , border:'none'}} ><CancelIcon id='cancel4'></CancelIcon></button>
       
        </Modal.Header>

        <Modal.Body style={{backgroundColor:'#FEFEFE'}}>
       <center>
          
           <h3 id='mh' style={{fontFamily:'Bangers/2XL Large' ,
          fontWeight:500}}><b><i>SELECT TEMPLATE</i></b></h3>
           </center>
    <br></br><br></br>
  
       <p style={{fontSize:'20px'}} id='mlk'>
       Name <UnfoldMoreTwoToneIcon style={{fontSize:'15px'}} id='a3'></UnfoldMoreTwoToneIcon> <span id='ml01'>
         Saved on&nbsp;&nbsp;
       <UnfoldMoreTwoToneIcon style={{fontSize:'15px'}}></UnfoldMoreTwoToneIcon></span>
      
       </p>

       {/* <hr id='tou'></hr> */}


       <button type="button" class="btn " style={{ width:'auto' , fontFamily:'Lato/Regular/Small' ,
      border:'2px solid blue' ,
      backgroundColor:'#FAFAFA', borderRadius:'4px'}} id='ml'>
           <span style={{color:'black'}}><span id='sp'>My Facebook setting Gencore </span>
           {/* ;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
           
           <span id='d1'>2021/03/01</span></span>
       </button>

       
       <button type="button" class="btn btn-outline-primary" style={{ width:'auto' , marginTop:'10px'
    , border:'none',
    backgroundColor:'#FAFAFA' , fontFamily:'Lato/Regular/Small',  borderRadius:'4px'}} id='ml'>
           <span style={{color:'black'}}><span id='sp'>My Facebook setting Gencore </span>
           {/* ;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
           
           <span id='d1'>2021/03/01</span></span>
       </button>

       
       <button type="button" class="btn btn-outline-primary" style={{ width:'auto' , marginTop:'10px'
    , border:'none',
    backgroundColor:'#FAFAFA' , fontFamily:'Lato/Regular/Small' ,  borderRadius:'4px'}} id='ml'>
           <span style={{color:'black'}}><span id='sp'>My Facebook setting Gencore </span> 
           {/* ;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
           
           <span id='d1'>2021/03/01</span></span>
       </button>

       
       <button type="button" class="btn btn-outline-primary" style={{ width:'auto' , marginTop:'10px' , border:'none',
    backgroundColor:'#FAFAFA' , fontFamily:'Lato/Regular/Small' ,
    borderRadius:'4px'}} id='ml'>
           <span style={{color:'black'}}><span id='sp'>My Facebook setting Gencore </span> 
           {/* ;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
           
           <span id='d1'>2021/03/01</span></span>
       </button>

           
      <br></br><br></br>
      <br></br><br></br>
      
       
        </Modal.Body>

        <Modal.Footer style={{backgroundColor:'#F7F5FF'}}>
      
       

<h6 ><a href='' style={{textDecoration:'none' , color:'black'}} id='ad2'>&nbsp;&nbsp;Find more</a></h6>
{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}


<button className='btn btn-primary'style={{color:'white' , backgroundColor:'#2143FB' , width:'150px'}} id='ad'>Save</button>
{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;</button> */}


       
        </Modal.Footer>
      </Modal>


    </div>)
}
export default Advancedmode4;