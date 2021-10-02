import React from 'react';
import '../scss/reset.scss';
import {Link} from 'react-router-dom';
import logo from '../images/hun-white-logo.png';
import resetpic from '../images/resetPassword.png';

const Reset = () => {
    return (
        <div>
            <div className="reset-container">
      <div className="resetlogo">
        <img alt="Company logo" src={logo} />
      </div>
      <div className="reset-card">
        <section className="card-images">
          <section>
            <div className="card-undrawImage">
              <img src={resetpic} alt="" />
            </div>
          </section>
        </section>

        <section className="card-details">
          <h1 className="reset-title">Reset Password</h1>
          <p>
            A Verification mail will be sent to your email address. Follow the
            instructions in the email to reset your password
          </p>


          <input type="email" id="email" placeholder="Email" />
          <input type="text" id="password" placeholder="enter new password" />

          <button className="reset-send">Send</button>

          <Link to='/login'>
          <a >Back to Login</a>
          </Link>
        </section>
      </div>
    </div>
        </div>
    );
}

export default Reset;
