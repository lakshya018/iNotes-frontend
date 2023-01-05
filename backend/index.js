const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();



var cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true}).then(() =>{
console.log("Connected to Mongoose Successfully");
})

app.use(cors())
app.use(express.json());
// Available Routes:
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.get("/",(req,res)=>{
  res.json("my-notes-backend start");
})

app.listen(port, () => {
  console.log(`iNotes app listening on port ${port}`)
})