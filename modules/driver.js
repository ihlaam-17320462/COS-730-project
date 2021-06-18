const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({   
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    vehicle:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
    location:{
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],   //longitude first, latitude second
          required: true
        }
    }
})

module.exports = mongoose.model('driverTable' , DriverSchema )