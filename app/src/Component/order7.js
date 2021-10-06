import React , {useEffect , useState } from 'react';
import ReactDOM from 'react';
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

function Order7()
{
   
    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    useEffect(()=>{
      document.title='Order7';
  })

    return(<div>


<br></br><br></br><br></br><br></br>

<div className="text-center"><Button className="btn btn-primary" onClick={handleShow} >Show Order Modal</Button></div>


      <Modal show={show} onHide={() => setShow(false)} size="lg"  aria-labelledby="contained-modal-title-vcenter"
      style={{borderRadius:'1200px' , height:'700px' }} centered>

        <Modal.Header >
         
          <button onClick={handleClose} className='btn btn-light' 
          style={{backgroundColor:' #ffffff' , border:'none'}} ><CancelIcon id='cancel1'></CancelIcon></button>
       
        </Modal.Header>

        <Modal.Body>
       <center>
           <h3 id='mh' style={{backgrounColor:'Lato/ExtraBold/XL Large'}}><b>Make edit</b></h3><br></br>
           </center>
           <div style={{border:'3px solid #C7C7C7' , borderRadius:'5px' }} id='mt'>
           <p style={{ 
          fontFamily:'Lato' , color:'#7F7F7F' , textAlign:'justify'}} className='p-3' >
            <br></br>Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit amen consecttur adipiscing an elit. 
            Mauris.Lorem ipsum dolor ament consectuturorss adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. <br></br>
        </p>

           </div>
      <br></br><br></br>
       
        </Modal.Body>

        <Modal.Footer style={{backgroundColor:'#F7F5FF'}}>
      
       

<h5 ><a href='' style={{textDecoration:'none' , color:'black'}} id='mt1'>Find more</a></h5>
{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}


<button className='btn ' style={{color:'white' , backgroundColor:'#2143FB'}} id='mb9'>Save</button>
{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;</button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

       
        </Modal.Footer>
      </Modal>

    </div>)
}
export default Order7;