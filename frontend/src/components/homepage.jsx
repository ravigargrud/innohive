import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import logo from '../assets/logo.svg';
import loginimage from '../assets/sidelogin.jpg';

// Define CreateUserForm component separately
function CreateUserForm() {
  const [formData, setFormData] = useState({
    username: 'demo',
    regimentid: '1234aaw',
    password: '4444'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/users', formData);
      console.log('User created:', response.data);
      // Optionally, reset form fields after successful submission
      setFormData({
        username: '',
        regimentid: '',
        password: ''
      });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className='formsection'>
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Name" />
      <input type="text" name="regimentid" value={formData.regimentid} onChange={handleChange} placeholder="Regiment ID" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

// Homepage component
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
                    {/* Render CreateUserForm component here */}
                    <CreateUserForm />
                </div>
                <div className='imagesection'>
                    <img src={loginimage} alt="image" />
                </div>
            </div>
        </>
    );
}

export default Homepage;
