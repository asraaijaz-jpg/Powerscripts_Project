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
import Image from './bgimage';


function Product3()
{
    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    useEffect(()=>{
      document.title='Product 3';
  })

    return(<div>

     <div className="text-center">
     <br></br><br></br>      <br></br><br></br>
  <Button className="btn btn-primary" onClick={handleShow} >Show Product 3</Button></div>


  <Modal show={show} onHide={() => setShow(false)} size="lg"  aria-labelledby="contained-modal-title-vcenter"
      style={{borderRadius:'1200px'}} centered>

        <Modal.Header >
         <center>
       </center>
          <button onClick={handleClose} className='btn btn-light'
          style={{backgroundColor:' #ffffff' , border:'none'}}><CancelIcon></CancelIcon></button>
       
        </Modal.Header>

        <Modal.Body>
       <center>
          
            <h3 id='mh' style={{fontFamily:'Lato/Medium/Lite' , fontWeight:400}}><b><i>INVITE  TEAMMATES
               <span style={{fontSize:'13px'}} id='mh'>(BETA)</span></i></b></h3>
           </center>
    <br></br><br></br>
<div class="form-group" style={{fontFamily: 'Lato/Semibold/Medium' , fontSize:'20px' }} id='f13'>
    <label for="exampleInputEmail1" style={{fontWeight:'400'}}><b>Enter email</b></label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""
    style={{marginTop:'10px' ,  marginTop:'2px'}} id='ab'/>
</div>    
       

           
      <br></br><br></br>
      <br></br><br></br>
      
       
        </Modal.Body>

        <Modal.Footer style={{backgroundColor:'#F7F5FF'}}>
      
       
      

        <h5 ><a href='' style={{textDecoration:'none' , color:'black'}}
id='mt00'>How add teammates</a></h5>
{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}


<button className='btn btn-primary'style={{color:'white' ,
backgroundColor:'#2143FB' , width:'150px'}} id='ad'>Invite</button>
{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;</button> */}


       
        </Modal.Footer>
      </Modal>


    </div>)
}
export default Product3;