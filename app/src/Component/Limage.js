import React from 'react';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo1 from './images/logo1.png';
import logo6 from './images/logo5.png';
import logo7 from './images/logo5.png';
import styles from './styles.css';


function Image()
{
    return(<div>

 <div className='row' style={{backgroundColor:'white'}}>
     <div className='col'>
     <img src={logo1} style={{marginTop:'-150px'  
 , marginLeft:'630px' , position:'fixed'}} id='im4' 
 ></img>

     </div>
</div>   

<div className='row'>
    <div className='col'>
    <img src={logo7} style={{marginTop:'-58px'  ,
  marginLeft:'700px' ,position:'fixed'}} id='im5' ></img>
 
    </div>
</div>
  
  
<div className='row'>
<div className='col offset-10' style={{marginTop:'-620px'  , marginLeft:'730px'}}>
<img src={logo2} style={{height:'150px' , 
width:'70px' ,position:'fixed'}} id='im1' ></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-380px'  , marginLeft:'628px'}}>
<img src={logo3} style={{height:'200px' , width:'200px' ,position:'fixed'}} id='im2' ></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-180px'  , marginLeft:'540px'}}>
<img src={logo4}   style={{height:'200px' , width:'200px' ,position:'fixed'}} id='im3'></img>
</div>
</div>



    </div>)
}

export default Image;