import axios from 'axios';
import React, {useEffect, useState} from 'react';



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
    <div>
      Hello World!
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <h2>{item.age}</h2>
          <h2>{item.city}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;