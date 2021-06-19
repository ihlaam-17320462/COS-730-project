const mongoose = require('mongoose');

// const GeoSchema = mongoose.Schema({
//     type: {
//       type: String,
//       default: "Point",
//     },
//     coordinates: {
//       type: [Number], //the type is an array of numbers
//       index: "2dsphere"
//     }
//   })

const OrderSchema = new mongoose.Schema({    
    // pLocation:{
    //      name: String,
    //      creator: String,
    //      location: GeoSchema},      
    // dLocation:{
    //      name: String,
    //      creator: String,
    //      location: GeoSchema},      
    // vehicle:{
    //     type:String,
    //     required:true},
    
  password:{
       type:String ,
      required:false},
    width:{
        type:String,
        required:false},
    height:{
        type:String,
        required:false},
    length:{
        type:String,
        required:false},
    date:{
        type:Date,
        default:Date.now
    }

    })
    
module.exports = mongoose.model('orderTable' , OrderSchema )