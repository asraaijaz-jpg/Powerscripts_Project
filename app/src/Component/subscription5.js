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
import CancelIcon from '@material-ui/icons/Cancel';
import EuroIcon from '@material-ui/icons/Euro';
import Image from './bgimage';


function Subscription5()
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
             
           <div className='col-lg-8 col-12' >
           <center>
           <h3 id='ms1'style={{fontFamily:'Bangers/XL Large 3'}}><i><b>
             <br></br>  <br></br>MANAGE<br></br>MEMBERSHIP</b></i></h3>
           </center>
           <br></br>

           <center><div style={{border:'3px solid blue' ,  borderRadius:'5px' ,
          }} className='p-3' id='mb'>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          
           <button className='btn  p-2' style={{color:'white' , backgroundColor:'#2143FB'}} id='ms'>
           &nbsp;&nbsp;&nbsp;-25% OFF &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</button>

           <div style={{float:'left'}} id='ms'>
           <h5 id='ms' >Annual <br></br>Payment</h5><br></br>
           <img src={a197}/>
           <img src={a97} className='p-2'></img>
           </div>
           </div>

           <p className='p-3' id='ms' style={{color:'#8B8888'}}>Billed once as 2375.64 Eur</p>
           <button className='btn  btn-lg p-2' style={{color:'white' ,
          backgroundColor:'#2143FB'}} id='ms'>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;Select Subscription&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
           <p className='p-3'><a href='' style={{color:'#8B8888' , textDecoration:'none'}} id='ms'>Cancel Membership</a></p>
           </center>
           </div>



           <div className='col-lg-4 col-12 ' style={{backgroundColor:'#F5F5F5' , 
          marginTop:'-15px' , marginBottom:'-14px'}}>
           
           <div className='row'>
            <div className='col-2 offset-10'>
            <button onClick={handleClose} className='btn' id='clob'
            ><CancelIcon></CancelIcon></button>                  
            </div>
           </div>
           <div className='row p-2'>
          
       
            <div className='col-3 offset-1 p-2'>
                
             <h3 id='ms1' style={{fontFamily:'Bangers/XL Large 2' , marginLeft:'-18px' }} ><i><b>HERO</b></i></h3>
             <h5 style={{color:'#2143FB' , marginLeft:'-18px'}}>Level 2</h5>
            </div>

            <div className='col-4 offset-4'>
            <img src={man1} className='p-3 ' style={{width:'100px' , height:'100px'}}/>
            </div>

           </div>

           <p className='p-3 'id='ms' style={{color:'#101010'}}>
             Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament 
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
            &nbsp;Content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
           </button>

            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;   <button type="button" className="btn btn-light btn-lg m-1"
            style={{backgroundColor:'#F9F9F9'}} id='ms'>
           &nbsp; Content sections   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;2
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
export default Subscription5;