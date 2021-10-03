import React from 'react';
import '../scss/landing.scss';
import {Link} from 'react-router-dom';
import logo from '../images/hun-logo.png';
import search from '../images/search-image.png' 


const Landing = () => {
    return (
        <div className='landing'>
            <nav className='nav-header'>
                <img className='company-logo' alt='company logo' src={logo}></img>
                
            </nav>

            <div className='landing-body'>
                <div className='text'>
                <div className='bold'>CURATED SEARCH </div>
                <div className='paragraph'>Get information on online businesses just by inputting their domain Name. You can also find employees of said companies </div>
                <div className='login-btn'>
                <Link to='/login'>
                <button className='Login'>Login</button>
                </Link>
                </div>
                
                </div>

                <div className='mag-glass'>
                    <img className='search-image' alt='search computer' src={search} ></img>
                </div>
            </div>
        </div>
    );
}

export default Landing;
