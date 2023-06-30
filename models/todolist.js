const mongoose = require('mongoose');
const {Schema} = mongoose;



const toDoListSchema = new Schema({
    work:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
    }
})


const ToDoList = mongoose.model('ToDoList', toDoListSchema);

module.exports = ToDoList;