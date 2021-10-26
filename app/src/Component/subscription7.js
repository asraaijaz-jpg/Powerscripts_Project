import React , {useEffect , useState} from 'react';
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
import a97 from './images/a97.png';
import a197 from './images/a197.png';
import man1 from './images/man1.png';
import man2 from './images/man2.png';
import group from './images/group.png';
import CancelIcon from '@material-ui/icons/Cancel';
import EuroIcon from '@material-ui/icons/Euro';

function Subscription7()
{
   
    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        document.title='React app';
    })
   
    return(<div>

<br></br><br></br><br></br>

<div className="text-center"><Button className="btn btn-primary" onClick={handleShow} >Show Subscription Modal</Button></div>


      <Modal show={show} onHide={() => setShow(false)} size="xl"  style={{borderRadius:'30px'}}
          aria-labelledby="contained-modal-title-vcenter" centered>

       

        <Modal.Body>
          
          <div className='row'>
             
           <div className='col-lg-8 p-5 col-12'>
        
    <h4 id='ms1'><b><br></br><br></br><br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do you want to cancel <br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;your subscription?</b></h4>

    <br></br><br></br><br></br>


    <h5 id='ms1'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter your password</b></h5>
    <input type="password" class="form-control" value="....."
     style={{marginLeft:'53px' }} id='s7'></input>
           
           <br></br><br></br>

           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" 
           class="btn btn-lg " style={{border:'3px solid red' , color:'red'}} id='ms1'>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cancel Submission&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
           </div>

          



           <div className='col-lg-4 col-12' style={{backgroundColor:'#F5F5F5' , 
          marginTop:'-15px' , marginBottom:'-14px'}}>
           
           <div className='row'>
            <div className='col-2 offset-10'>
            <button onClick={handleClose} className='btn' id='clob'><CancelIcon></CancelIcon></button>                  
            </div>
           </div>
           <div className='row p-2'>
          
       
            <div className='col-8 offset-1 p-2'>
                
             <h3 id='ms1s' style={{ marginLeft:'-18px'}}><i><b>You will <i style={{color:'red'}}>lose</i> all <br></br> your benefits</b></i></h3>
            </div>

            

           </div>

           <p className='p-3 ' id='ms' style={{textAlign:'justify'}}>Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament 
               consectutur adipiscing elit. Mauris. Lorem ipsum dolor sit ament consectutur adipiscing elit. 
            </p>
            <h4 className='p-3' id='ms1'>Includes</h4>

            <div id='bc' >
            <button type="button" className="btn btn-light btn-lg m-1 "
            style={{backgroundColor:'#F9F9F9'}} id='mss' >
         &nbsp;Content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2
            </button>

            

            &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  <button type="button" className="btn btn-light btn-lg m-1"
            style={{backgroundColor:'#F9F9F9'}} id='mss'>
      &nbsp; Content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
           </button>

            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;   <button type="button" className="btn btn-light btn-lg m-1"
            style={{backgroundColor:'#F9F9F9'}} id='mss'>
          &nbsp; Content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;2
            </button>

            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;   <button type="button" className="btn btn-light btn-lg m-1"
            style={{backgroundColor:'#F9F9F9'}} id='mss'>
         &nbsp;  Content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;2
            </button>
          
</div>

           </div>




          </div>
         

        </Modal.Body>

  
      </Modal>

    </div>)
}
export default Subscription7