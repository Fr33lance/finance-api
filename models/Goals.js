const mongoose = require('mongoose');
var dateFormat = require("dateformat");
var now = new Date();


const GoalsSchema = new mongoose.Schema({
    
    GoalName: { 
        type: String,
        trim: true,
        required: [true, 'Please enter the name for the savings coal'],

    },
    Amount: {
        type: Number,
        required: [true, 'enter the amount which you wish to reach']
    },
    addedAmount: {
         type: Number,
       default: 0
    },
    type: {
         type: String,
        trim: true,
        required: [true, 'Type of goal'],
    },
    status: {
         type: String,
        trim: true,
        default: 'not-complete'
    },
    createdAt: {
        type: Date,
        default: dateFormat(now)
    },
    dueAt:{
        type: Date,
        required: [false, 'Enter the targetted date for the savings']
    },
    user_id:{
        type: String,
        required: [true, 'please enter the user ID for the goal'],
        trim: true,
    }
})

module.exports = mongoose.model('Goals', GoalsSchema)