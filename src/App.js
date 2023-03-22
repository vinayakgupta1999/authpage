import logo from './logo.svg';
import './App.css';
import googleicon from './assets/images/googleicon.svg'
import facebookicon from './assets/images/facebookicon.svg'
import twittericon from './assets/images/twittericon.svg'
import { useState } from 'react';

function App() {
  const [activeauth,setActiveAuth]=useState('login')
  return (
    <div className="App">
    <div class="container">
        <div class="container-data">
            <div class="container-top">
                <img src={logo} alt="img"/>
                <p>SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT</p>
            </div>
            <div class="container-middle">
                <span className={activeauth==='login'&&'active'} onClick={()=>{setActiveAuth('login')}}>Login</span>
                <span className={activeauth==='signup'&&'active'} onClick={()=>{setActiveAuth('signup')}}>Signup</span>
            </div>
            {
              activeauth==='login' ?
              <form>
                <input type="email" name='email' placeholder="Email Address"/>
                <input type="password" name='password' placeholder="Password"/>
                <button>Login</button>
                <a class="forgot-btn" href='#'>Forgot Password?</a>
            </form>
            :
            <form>
                 <input type='text' name='name' placeholder="Full Name"/>
                <input type="email" name='email' placeholder="Email Address"/>
                <input type="password" name='password' placeholder="Password"/>
                <input type="password" name='cpassword' placeholder="Confirm Password"/>
                <button>Signup</button>
            </form>
            
            }
            <div class="container-bottom">
                <p class="login-text">or {activeauth==='login'?'login':'signup'} with</p>
                <div class="social-icons">
                    <span><img src={googleicon} alt="google-icon"/></span>
                   <span> <img src={facebookicon} alt="facebook-icon"/></span>
                   <span> <img src={twittericon} alt="twitter-icon"/></span>
                </div>
                {activeauth==='login'?<p>Don't have an Account? <span>Create new now!</span></p>:<p>Do have an Account? <span>login!</span></p>}
                <p>By signing up, you are agree with our<span>Term & Conditions</span></p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
