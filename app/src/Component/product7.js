import React, { useEffect , useState} from 'react';
import ReactDOM from 'react';
import { Link } from 'react-router-dom';
import power from './images/power.png';
import Product1 from './product4';
import Image from './bgimage';


function Product7()
{
    useEffect(()=>{
        document.title='Product 7';
    });

    return(<div className='container my-5' style={{backgroundColor:"#FCFCFC " , width:'800px'}}>
       <div className='row text-center p-5'>
            <div className='col'>
                <hr style={{color:'blue' , height:'10px'}} ></hr>
                <br></br><br></br>
                <img src={power}/>
               <h3><br></br>Lindsey Westervelt has invited you to join<a href=''>Powerscript</a>.</h3>
               <br></br><br></br>
               <Link to='/resetpassword'><button type='button' className='btn btn-primary' 
               style={{width:'150px' , height:'50px' , borderRadius:'23px'}}>Join now</button>
               </Link> <br></br><br></br>

            <p>
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.
            </p>

            <hr></hr>
            <p>Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.Lorem ipsum dolor sit ament consectutur adipiscing elit. Mauris.</p>
            </div>
        </div>
    </div>)
}

export default Product7;