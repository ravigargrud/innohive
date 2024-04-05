import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import Homepage from './components/homepage';
import Weapon from './components/weapon';


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
    <Homepage/>
    <Weapon/>

    </>
  );
}

export default App;