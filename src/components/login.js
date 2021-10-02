import React, { useState } from 'react';
import '../scss/login.scss';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAuthentication } from '../redux/actions/user/Action';
import { useHistory } from 'react-router-dom';
import logo from '../images/hun-white-logo.png';
import loginpic from '../images/login.png';

const Login=(props)=> {
  const history = useHistory()
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [loginResponse, setLoginResponse] = useState('')

  const  { authenticate } = props

  const handleAuth = () => {
   const res =  authenticate({email, password})
   res.then((e) => {
    history.push('/main')
   }).catch((err) => {
    setLoginResponse(err)
   })
  }

        return (
            <div>
                <div className="login-container">

<div className="loginlogo">
<img  alt="Company logo" src={logo} />
</div>

<div className="login-card">
    
  <section className="card-images">
   
      <div className="cardUndrawImage">
        <div className="image">
          <img src={loginpic} alt="" />
        </div>
        <div className="paragraph">
          <h4 className="login-start">
            Start for Free <br /> Get an attractive Offer
          </h4>
        </div>
      </div>
    
  </section>


  <section className="card-details">
    <h1 className="login-title">Login </h1>
    <button className="google-btn">
      <i class="fab fa-google"></i>
      <p>Sign in with Google</p>
    </button>
    <button className="facebook-btn">
      <i class="fab fa-facebook-f"></i>
      <p>Sign in with Facebook</p>
    </button>
    {
      loginResponse !== '' && <div style={{  color: 'red' }}> Email or Password Incorrect </div>
    }
    <div className="hr">
      <hr/>
    </div>

    <input type="text" onChange={(event) => { setEmail(event.target.value) }} placeholder="Email"></input>
    <input type="password" onChange={(event) => { setPassword(event.target.value) }} placeholder="password"></input>

    <button className="signIn" onClick={() => {handleAuth()}}>Sign In</button>

    <Link to='/reset'>
    <a href='as'>Forgot Password?</a>
    </Link>
  </section>
</div>
</div>
            </div>
        );
    
}

const mapDispatchToProps = (dispatch) =>{
  return {
    authenticate: (data) => dispatch(handleAuthentication(data))
  }
}

export default connect(null, mapDispatchToProps)(Login);   
   