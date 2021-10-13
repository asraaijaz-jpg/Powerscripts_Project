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


function Advancedmode5()
{
    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    useEffect(()=>{
      document.title='Advancedmode 5';
  })

    return(<div>

     <div className="text-center">
     <br></br> <br></br> <br></br> <br></br>
  <Button className="btn btn-primary" onClick={handleShow} >Show Advancemode 5</Button></div>

        <Modal show={show} onHide={() => setShow(false)} size="lg"  aria-labelledby="contained-modal-title-vcenter"
       centered>
 <Modal.Header style={{height:'90px' , borderRadius:'30px' , backgroundColor:'#FCFCFC'}}>
         <center>
        <p style={{font:'5px' , fontFamily:'Lato/Semibold Italic/Small' , 
      color:'#606060'}} id='p1' >Advanced mode setup</p>
       <progress id="file" value="70" max="100"  id='p2' style={{color:'#2143FB'}}> 32% </progress>
       </center>

       <button onClick={handleClose} className='btn btn-light' 
       style={{backgroundColor:' #ffffff' , border:'none'}}><CancelIcon id='cancel3'></CancelIcon></button>
       
        </Modal.Header>


        <Modal.Body>
       <center>
        
           <h3 id='mh2' style={{fontFamily:'Bangers/2XL Large' , fontWeight:'600'}}><b><i>
             <br></br>FORMALITY AND TONE</i></b></h3>
           <h5 id='mh2' style={{fontFamily:'Lato/Semibold/Medium'}}>
             
             <b><br></br>Formality</b></h5>
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
      
       

      <h6 ><a href='' style={{textDecoration:'none' , color:'black'}} id='ad2'>Back</a></h6>
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


    </div>)
}
export default Advancedmode5;