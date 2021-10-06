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

function Product1()
{
    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    useEffect(()=>{
      document.title='Product 4';
  })

    return(<div>

     <div className="text-center">
     <br></br><br></br>      <br></br><br></br>
  <Button className="btn btn-primary" onClick={handleShow} >Show Product 4</Button></div>

  <Modal show={show} onHide={() => setShow(false)} size="lg"  aria-labelledby="contained-modal-title-vcenter"
      style={{borderRadius:'1200px'}} centered>

        <Modal.Header style={{height:'90px' , borderRadius:'30px' , backgroundColor:'#FCFCFC'}}>
         <center>
        <p style={{font:'5px' , fontFamily:'Lato/Semibold Italic/Small' }} id='p1' >Advanced mode setup</p>
       <progress id="file" value="32" max="100"  id='p2' style={{color:'#2143FB'}}> 32% </progress>
       </center>

       <button onClick={handleClose} className='btn btn-light' 
       style={{backgroundColor:' #ffffff' , border:'none'}}><CancelIcon id='cancel3'></CancelIcon></button>
       
        </Modal.Header>

        <Modal.Body style={{backgroundColor:'#FEFEFE'}}> 
       <center>
          <h4 style={{fontSize:'23px' , fontFamily:'Lato/Bold/XL Large' ,
        color:'#101010'}} id='mh'>Please select</h4>
           <h3 id='mh' style={{fontFamily:'Bangers/2XL Large' , fontWeight:'790' ,
          color:'#101010'}}><i>TARGET AUDIENCE</i></h3>
           </center>
    <br></br>
<div class="form-group" style={{ fontFamily: 'Lato' , fontSize:'20px' }} id='f1'>
    <label for="exampleInputEmail1" style={{color:'#101010'}}><b>Interest</b></label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    placeholder=""
    style={{marginTop:'5px' , width:'400px'}}/>
</div>    
      <a href=''>  <img src={a1} style={{ marginTop:'-70px'}} id='a1'/></a>

           
<div class="form-group" style={{fontFamily: 'Lato' , fontSize:'20px' }} id='f1'>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    placeholder="Digital Marketing speciliasts"
    style={{marginTop:'5px' , width:'400px' , marginTop:'-10px' , color:'blue' , border:'1px solid #2143FB'}}/>
</div>    
<a href=''>  <img src={r1} style={{marginTop:'-70px'}}  id='a1'/></a>
 
        
   
        <div class="form-group" style={{fontFamily: 'Lato' , fontSize:'20px' }} id='f1'>
    <label for="exampleInputEmail1" style={{color:'#101010'}}><b>Region</b></label>
     <select class="form-select" aria-label="Default select example"
      style={{marginTop:'5px' , width:'400px' , color:'#2143FB'}}>
  <option selected >Cairo, Egypt</option>
  <option value="1"  style={{color:'black'}}>Casablanca, Morocco</option>
  <option value="2" style={{color:'black'}}>Canes , France</option>
</select>

</div>    
<a href=''>  <img src={a1} style={{marginTop:'-70px'}} id='a1'/></a>

            
<div class="form-group" style={{fontFamily: 'Lato' , fontSize:'20px' }} id='f1'>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Discount : 15%"
    style={{marginTop:'5px' , width:'400px' , marginTop:'-10px' , color:'blue' , border:'1px solid blue'}}/>
</div> 

<a href=''>    <img src={r2} style={{marginTop:'-70px'}}  id='a1'/></a>


           
      <br></br><br></br>
       
        </Modal.Body>

        <Modal.Footer style={{backgroundColor:'#D3D9FE'}}>
      
       

<h6><a href='' style={{textDecoration:'none' , color:'black'}} id='ad2'>Skip</a></h6>
{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}


<button className='btn 'style={{color:'white' ,
backgroundColor:'#2143FB' , width:'150px'}} id='ad'>Next</button>
{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Next&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;</button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

       
        </Modal.Footer>
      </Modal>


    </div>)
}
export default Product1;