



import React from 'react';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo1.png';
import logo6 from './images/logo5.png';



function Image()
{
    return(<div>


<img src={logo2} style={{height:'150px' , 
width:'70px' , marginTop:'-1760px'  , 
marginLeft:'1210px'}}></img>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-270px' }}>

<img src={logo3} style={{height:'200px' ,
 width:'200px' , marginTop:'-780px'  , 
 marginLeft:'100px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10'                      style={{marginTop:'-490px' }}>
<img src={logo4} style={{height:'200px' , 
width:'200px' , marginLeft:'100px'}}></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-470px' , marginLeft:'1140px' }}>
<img src={logo5} ></img>
</div>
</div>

<div className='row'>
<div className='col offset-10' style={{marginTop:'-370px' , marginLeft:'1260px' }}>
<img src={logo6}></img>
</div>
</div>


    </div>)
}

export default Image;