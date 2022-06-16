const express = require('express');
const app  = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const todoItemRoute = require('./routes/todoItem');




//Connect to mongoDB
mongoose.connect(process.env.todoItemDB , {useNewUrlParser: true , useUnifiedTopology:true})
.then(()=> console.log('MongoDB Connected!!!'))
.catch(err => console.log(err));

//Get Data into json format
app.use(express.json());
// cross origin
app.use(cors());

//Import Routing
app.use(todoItemRoute);

// app.use('/', require('./routes/todoItem'));



//Port
const PORT = process.env.PORT 
// Connect to server
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
});