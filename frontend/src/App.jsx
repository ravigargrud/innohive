import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import logo from './assets/logo.svg';
import loginimage from './assets/sidelogin.jpg';


function App() {

  const[data, setData] = useState([]);

useEffect(() => {
  axios.get('/api/sample')
  .then((response) => {
    setData(response.data);
  })
  .catch((error) => {
    console.error('There was an error!', error);
  })
});

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

export default App;