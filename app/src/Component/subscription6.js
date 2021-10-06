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

function Subscription6()
{
   
    const [show, setShow] = useState(false);   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        document.title='Subscription 6';
    })
   
    return(<div>

<br></br><br></br><br></br>

<div className="text-center"><Button className="btn btn-primary" onClick={handleShow} >Show Subscription Modal</Button></div>


      <Modal show={show} onHide={() => setShow(false)} size="xl"  style={{borderRadius:'30px'}}
          aria-labelledby="contained-modal-title-vcenter" centered>

       

        <Modal.Body>
          
          <div className='row'>
             
           <div className='col-8'>
           <center>
           <h3 id='ms2' style={{fontFamily:'Bangers/XL Large 3'}}><i><b>
           <br></br>  <br></br>UPGRADE<br></br>MEMBERSHIP</b></i></h3>
           </center>
           <br></br>


<div className='row'>
    <div className='col-4 offset-1'>

    <div style={{border:'3px solid blue' ,  borderRadius:'5px' }} className='p-3' id='mb3'>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        

           
           <div style={{float:'left'}}>
           <h5 className='p-2' id='ms'><br></br>Monthy <br></br>Payment</h5><br></br>
           <img src={group}/>
           </div>
           </div>

    </div>
    
<div className='col-4 offset-1'>
<center><div style={{border:'3px solid blue' ,  borderRadius:'5px' }} className='p-3' id='mb4'>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          
           <button className='btn  p-2' style={{color:'white' , backgroundColor:'#2143FB'}} id='ms'>
           &nbsp;&nbsp;&nbsp;-25% OFF &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</button>

           
           <div style={{float:'left'}}>
           <h5 id='ms'>Annual <br></br>Payment</h5><br></br>
         
           <img src={a197} className='p-2'/>
           {/* <img src={a97} className='p-2'></img> */}
           </div>
           </div>

           <p id='duf' style={{color:'#8B8888'}}>Billed once as 1584 Eur</p>

           </center>
           </div>

           <div className='row'>
               <div className='col-6 offset-3'>
               <button className='btn  btn-lg p-2' style={{color:'white' , width:'300px' ,backgroundColor:'#2143FB'}} id='ms'>
          Select Subscription
           </button><br></br><br></br>
          
               </div>
           </div>
           
</div>
</div>

          



           <div className='col-lg-4 col-12' style={{backgroundColor:'#F5F5F5' ,
         marginTop:'-15px' , marginBottom:'-14px'}}>
           
           <div className='row'>
            <div className='col-2 offset-10'>
            <button onClick={handleClose} className='btn'id='clob2' ><CancelIcon></CancelIcon></button>                  
            </div>
           </div>
           <div className='row p-2'>
          
       
            <div className='col-3 offset-1 p-2'>
                
             <h3 id='ms1' style={{fontFamily:'Bangers/XL Large 2' , marginLeft:'-18px' }} ><i><b>SUPERHERO</b></i></h3>
             <h5 style={{color:'#2143FB' , marginLeft:'-18px'}}>Level 1</h5>
            </div>

            <div className='col-4 offset-4'>
            <img src={man2} style={{width:'100px' , height:'100px'}} className='p-3 '/>
            </div>

           </div>

           <p className='p-3 ' id='ms'>Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament 
               consectutur adipiscing elit. Mauris. Lorem ipsum dolor sit ament consectutur adipiscing elit. 
            </p>
            <h4 className='p-3' id='ms1'>Includes</h4>

            <div id='bc'>
             <button type="button" className="btn btn-light btn-lg m-1 "
            style={{backgroundColor:'#F9F9F9'}} id='ms' >
            &nbsp;Content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
            </button>

            &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  <button type="button" className="btn btn-light btn-lg m-1"
            style={{backgroundColor:'#F9F9F9'}} id='ms'>
           &nbsp; Content sections   &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
           </button>

            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;   <button type="button" className="btn btn-light btn-lg m-1"
            style={{backgroundColor:'#F9F9F9'}} id='ms'>
            &nbsp;Content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;2
            </button>

            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;   <button type="button" className="btn btn-light btn-lg m-1"
            style={{backgroundColor:'#F9F9F9'}} id='ms'>
            &nbsp;Content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;2
            </button>
            </div>

           </div>




          </div>
         

        </Modal.Body>

  
      </Modal>

    </div>)
}
export default Subscription6;