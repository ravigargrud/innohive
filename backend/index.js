const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/sample', (req, res) => {
    myobj = [
        {
        name: 'John',
        age: 30,
        city: 'New York'
        },
        {name: 'Peter',
        age: 45,
        city: 'New York'},
    ];
    res.send(myobj);
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});



