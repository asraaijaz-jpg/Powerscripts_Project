import { func } from 'prop-types';
import React from 'react';
import { ReactDOM  , useState , useEffect} from 'react';
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
import Image from './bgimage';



function Order9()
{

    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    useEffect(()=>{
      document.title='Order9';
  })


return(<div>
    

    
<br></br><br></br><br></br><br></br>

<div className="text-center">
  <Button className="btn btn-primary" onClick={handleShow} >Show Order Modal</Button></div>


      <Modal show={show} onHide={() => setShow(false)} size="lg"  aria-labelledby="contained-modal-title-vcenter"
    centered>

        <Modal.Header >
         
          <button onClick={handleClose} className='btn btn-light' 
          style={{backgroundColor:' #ffffff' , border:'none'}}><CancelIcon id='cancel1'></CancelIcon></button>
       
        </Modal.Header>

        <Modal.Body style={{backgroundColor:'#FEFEFE'}}>
       <center>
           <h3 id='mh' style={{fontFamily:'Bangers/2XL Large' , marginLeft:'-30px'}}>
             <b><i><br></br>RATE ORDER</i></b></h3><br></br><br></br>
        <div className='row p-2' style={{marginTop:'-15px'}}>
<div className='col-4 offset-2' >
<h5 id='mh' style={{fontFamily:'Lato/Regular/Medium' , color:'#101010' }}>Delivery speed</h5>
</div>
    <div className='col-5'>
    <img src={starf}  id='starr'/>
    </div>
    </div>
        
        
    <div className='row p-2'>
<div className='col-4 offset-2'>
<h5 id='mh'  style={{fontFamily:'Lato/Regular/Medium' , color:'#101010' }}>Delivery speed</h5>
</div>
    <div className='col-5'>
    <img src={starf}  id='starr'/>
    </div>
    </div>
        

    <div className='row p-2'>
<div className='col-4 offset-2'>
<h5 id='mh'  style={{fontFamily:'Lato/Regular/Medium' , color:'#101010' }}>Delivery speed</h5>
</div>
    <div className='col-5'>
    <img src={starf}  id='starr'/>
    </div>
    </div>
        
        </center>
           
      <br></br><br></br><br></br>
       
        </Modal.Body>

        <Modal.Footer style={{backgroundColor:'#F7F5FF'}}>
      
       

<h6 ><a href='' style={{textDecoration:'none' , color:'black'}} id='mt1'>Skip rate</a></h6>
{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}


<button className='btn'style={{color:'white' , backgroundColor:'#2143FB'}} id='mb9'>Finish</button>
{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finish&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;</button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

       
        </Modal.Footer>
      </Modal>

</div>)
}

export default Order9;