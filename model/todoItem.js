// Import mongoose
const mongoose = require('mongoose');

// create new schema
const todoItemSchema = new mongoose.Schema({

    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        require:true
    },
    date:{
        type: Date,
        default:Date.now
    }


});

const todoItem = mongoose.model('todoItem', todoItemSchema);
module.exports = todoItem;