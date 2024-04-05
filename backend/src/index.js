import express from 'express';
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import dotenv from 'dotenv';

dotenv.config({
  path: './.env'
});

const mongoDBURI = process.env.MONGODB_URI || "mongodb+srv://ravigarg:ravigarg1234@innohive.clbmrq7.mongodb.net"

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

const connectDB = async () => {
  try {
    await mongoose.connect(`${mongoDBURI}/${DB_NAME}`);
    console.log('Connected to the database');

  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }

}


connectDB()
.then(() => {
  console.log('Connected to the database');
})
.catch((error) => {
  console.error('Error connecting to the database: ', error);
});


// var myobj = [
//   {
//   name: 'John',
//   age: 30,
//   city: 'New York'
//   },
//   {name: 'Peter',
//   age: 45,
//   city: 'New York'},
// ];

// app.get('/api/sample', (req, res) => {
//     res.send(myobj);
// });




app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});



