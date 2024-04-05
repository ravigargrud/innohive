import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import logo from '../assets/logo.svg';
import loginimage from '../assets/sidelogin.jpg';

const Homepage = () => {
    return (
        <>
        <div className='mainscreen'>

<div className='loginsection'>

<div className='logosection'>
<img src={logo} alt="image" />
</div>

<div className='textsection'>
Regiment Login Page
</div>

<div className='formsection'>

<input type="text" placeholder="Name" />
<input type="text" placeholder="Regiment ID" />
<input type="password" placeholder="Password" />
<button>Login</button>

</div>

</div>

<div className='imagesection'>
<img src={loginimage} alt="image" />
</div>

</div>
        </>
    );
}

export default Homepage;