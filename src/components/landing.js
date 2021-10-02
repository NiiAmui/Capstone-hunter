import React from 'react';
import '../scss/landing.scss';
import {Link} from 'react-router-dom';
import logo from '../images/hun-white-logo.png';
import search from '../images/landing-search.png'


const Landing = () => {
    return (
        <div className='landing'>
            <nav className='nav-header'>
                <img className='company-logo' alt='company logo' src={logo}></img>
                
            </nav>

            <div className='body'>
                <div className='text'>
                <div className='bold'>CURATED SEARCH </div>
                <div className='paragraph'>MAKE ONLINE SEARCHES ON BUSINESSES BY JUST INPUTTING THEIR DOMAIN NAMES. YOU CAN ALSO MAKE SEARCHES ON INDIVIDUALS BY INPUTTING BOTH THE COMPANY DOMAIN AND THE FULL NAME OF THE INDIVIDUAL </div>
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
