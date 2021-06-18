const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  type: {
    type: String,
    default:"Point"    
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  } 
})


const OrderSchema = new mongoose.Schema(
  {    
    pickup:LocationSchema,
    dropoff:LocationSchema,
    vehicle:{
        type:String,
        required:false}, 
    width:{
        type:String,
        required:false},    
    length:{
        type:String,
        required:false},
    height:{
          type:String,
          required:false},
    date:{
        type:Date,
        default:Date.now
    }

    })

      
module.exports = mongoose.model('orderTable' , OrderSchema )