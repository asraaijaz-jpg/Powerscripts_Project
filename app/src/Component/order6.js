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
import styles from './styles.css';

function Order6()
{
   
    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    useEffect(()=>{
      document.title='Order6';
  })

    return(<div>


<br></br><br></br><br></br><br></br>

<div className="text-center"><Button className="btn btn-primary" onClick={handleShow} >Show Order Modal</Button></div>


      <Modal show={show} onHide={() => setShow(false)} size="lg"  aria-labelledby="contained-modal-title-vcenter"
      style={{borderRadius:'20px' }}>

        <Modal.Header >
         
          <button onClick={handleClose} className='btn btn-light'
         style={{backgroundColor:' #ffffff' , border:'none'}} ><CancelIcon id='cancel1'></CancelIcon>
          </button>
       
        </Modal.Header>

        <Modal.Body>
        <div style={{overflowY:'scroll' , overflowBlock:'block', backgroundColor:'#FEFEFE'}}>
  
        <center>
        <h3 id='mh' style={{fontFamily:'Bangers/2XL Large'}}><i><b>PREVIEW MODE</b></i></h3>
        <br></br>
        <h6 id='mh'><b>CONTENT 1</b></h6>
        </center><br></br>

        <p style={{marginLeft:'60px' , justifyContent:'center' , fontFamily:'Lato/Light/Small' ,
      color:'#101010' , fontSize:'14px'}} id='mt'>
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consecttur adipiscing an elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
        </p>
         <br></br>

         <p style={{marginLeft:'60px' , justifyContent:'center' , fontFamily:'Lato/Light/Small0',
        color:'#101010' , fontSize:'14px'}} id='mt'>
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consecttur adipiscing an elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
        </p>
         <br></br>

         <p style={{marginLeft:'60px' , justifyContent:'center' , fontFamily:'Lato/Light/Small',
        color:'#101010' , fontSize:'14px'}} id='mt'>
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consecttur adipiscing an elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
        </p>
        <br></br>

         <p style={{marginLeft:'60px' , justifyContent:'center' , fontFamily:'Lato/Light/Small0',
        color:'#101010' , fontSize:'14px'}} id='mt'>
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consecttur adipiscing an elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
        </p>

        <br></br>

<p style={{marginLeft:'60px' , justifyContent:'center' , fontFamily:'Lato/Light/Small0',
color:'#101010' , fontSize:'14px'}} id='mt'>
   Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
   Lorem ipsum dolor sit ament consecttur adipiscing an elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
   Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
</p>

       
         </div>

       
        </Modal.Body>

        <Modal.Footer style={{backgroundColor:'#F7F5FF'}}>
      
       

<h5 ><a href='' style={{textDecoration:'none' , color:'black'}} id='mt1'>Get Support</a></h5>
{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}


<button className='btn btn-primary'style={{color:'white' , backgroundColor:'#2143FB'}} id='mb9'>
  Downloads</button>
{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Download&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

       
        </Modal.Footer>
      </Modal>

    </div>)
}
export default Order6