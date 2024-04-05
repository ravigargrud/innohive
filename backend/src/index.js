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


// Backend API endpoint to handle user creation
app.post('/api/users', async (req, res) => {
  try {
    // Create a new user using the armyReg model
    const newUser = await armyReg.create(req.body);
    console.log('User created:', newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});



