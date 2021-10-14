import React from 'react';
import ReactDOM, { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Component/home';
import Loginpage from './Component/loginpage';
import Signupage from './Component/signuppage';
import Forgotpasswordpage from './Component/forgotpassword';
import Signinpage from './Component/signin';
import SignupPage2 from './Component/signuppage2';
import SignupPage from './Component/signuppage';
import SigninPage2 from './Component/signin2';
import SigninPage from './Component/signin';
import SignupPage3 from './Component/signuppage3';
import Resetpassword from './Component/resetpassword';
import ResetpasswordPage2 from './Component/resetpassword2';
import {Route , Link , Switch , BrowserRouter , browserHistory, IndexRoute ,
HashRouter , Router} from 'react-router-dom';
import Dashboard1 from './Component/dashboard1';
import Dashboard3 from './Component/dashboard3';
import Dashboard4 from './Component/dashboard4';
import Dashboard2 from './Component/dashboard2';
import Profile1 from './Component/profile1';
import Billing from './Component/billing';
import Settings from './Component/setting';
import Subscription1 from './Component/subscription1';
import Subscription2 from './Component/subscription2';
import Subscription3 from './Component/subscription3';
import Subscription4 from './Component/subscription4';
import Subscription5 from './Component/subscription5';
import Subscription6 from './Component/subscription6';
import Subscription7 from './Component/subscription7';
import Order1 from './Component/order1';
import Order2 from './Component/order2';
import Order3 from './Component/order3';
import Order4 from './Component/order4';
import Order5 from './Component/order5';
import Order6 from './Component/order6';
import Order7 from './Component/order7';
import Order8 from './Component/order8';
import Order9 from './Component/order9';
import Checkout1 from './Component/checkout1';
import Checkout2 from './Component/checkout2';
import Support from './Component/support';
import Advancedmode1 from './Component/advancedmode1';
import Advancedmode2 from './Component/advancedmode2';
import Advancedmode3 from './Component/advancedmode3';
import Advancedmode4 from './Component/advancedmode4';
import Advancedmode5 from './Component/advancedmode5';
import Referalprogram1 from './Component/referalprogram';
import Referalprogram2 from './Component/referalprogram2';
import Product3 from './Component/product3';
import Product4 from './Component/product4';
import Product5 from './Component/product5';
import Product6 from './Component/product6';
import Product7 from './Component/product7';
import Product9 from './Component/product9';
import Product10 from './Component/product10';
import Productt1 from './Component/product1';
import Productt2 from './Component/product2';
import Productt8 from './Component/product8';


function App() 
{
  return (
    <div>
   <HashRouter>

<Route path = '/' component = {Loginpage} exact></Route>
<Route path='/loginpage' component={Loginpage} exact></Route>
<Route path='/signuppage' component={Signupage} exact></Route>
<Route path='/forgotpasswordpage' component={Forgotpasswordpage} exact></Route>
<Route path='/signinpage' component={SigninPage} exact></Route>
<Route path='/signinpage2' component={SigninPage2} exact></Route>
<Route path='/signuppage2' component={SignupPage2} exact></Route>
<Route path='/signuppage3' component={SignupPage3} exact></Route>
<Route path='/resetpassword' component={Resetpassword} exact></Route>
<Route path='/resetpassword2' component={ResetpasswordPage2}exact></Route>
<Route path='/dashboard1' component={Dashboard1} exact></Route>
<Route path='/dashboard3' component={Dashboard3} exact></Route>
<Route path='/dashboard4' component={Dashboard4} exact></Route>
<Route path='/dashboard2' component={Dashboard2} exact></Route>

<Route path='/profile1' component={Profile1} exact></Route>
<Route path='/billing' component={Billing} exact></Route>
<Route path='/settings' component={Settings} exact></Route>
<Route path='/subscription1' component={Subscription1} exact></Route>

<Route path='/subscription2' component={Subscription2} exact></Route>
<Route path='/subscription3' component={Subscription3} exact></Route>
<Route path='/subscription4' component={Subscription4} exact></Route>
<Route path='/subscription5' component={Subscription5} exact></Route>
<Route path='/subscription6' component={Subscription6} exact></Route>
<Route path='/subscription7' component={Subscription7} exact></Route>
<Route path='/order1' component={Order1} exact></Route>
<Route path='/order2' component={Order2} exact></Route>
<Route path='/order3' component={Order3} exact></Route>
<Route path='/order4' component={Order4} exact></Route>
<Route path='/order5' component={Order5} exact></Route>
<Route path='/order6' component={Order6} exact></Route>
<Route path='/order7' component={Order7} exact></Route>
<Route path='/order8' component={Order8} exact></Route>
<Route path='/order9' component={Order9} exact></Route>
<Route path='/checkout1' component={Checkout1} exact></Route>
<Route path='/checkout2' component={Checkout2} exact></Route>
<Route path='/support' component={Support} exact></Route>
<Route path='/advancemode1' component={Advancedmode1} exact></Route>
<Route path='/advancemode2' component={Advancedmode2} exact></Route>
<Route path='/advancemode3' component={Advancedmode3} exact></Route>
<Route path='/advancemode4' component={Advancedmode4} exact></Route>
<Route path='/advancemode5' component={Advancedmode5} exact></Route>
<Route path='/referalprogram1' component={Referalprogram1} exact></Route>
<Route path='/referalprogram2' component={Referalprogram2} exact></Route>
<Route path='/product3' component={Product3} exact></Route>
<Route path='/product4' component={Product4} exact></Route>
<Route path='/product5' component={Product5} exact></Route>
<Route path='/product6' component={Product6} exact></Route>
<Route path='/product7' component={Product7} exact></Route>
<Route path='/product9' component={Product9} exact></Route>
<Route path='/product10' component={Product10} exact></Route>
<Route path='/productt1' component={Productt1} exact></Route>
<Route path='/productt2' component={Productt2} exact></Route>
<Route path='/productt8' component={Productt8} exact></Route>


</HashRouter> 

    </div>
  );

}


// ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}>< App /></BrowserRouter>, 
//   document.getElementById('root'));

export default App;
