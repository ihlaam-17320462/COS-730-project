const mongoose = require('mongoose');

//Create Schema for User Info

const UserInfoSchema = new mongoose.Schema({
    firstName:{
         type:String ,
         required:true},       
    lastName:{
         type:String ,
        required:true},
    userName:{
        type:String ,
        required:false},
    password:{
         type:String ,
        required:true},
    date:{
        type:Date,
        default:Date.now

    }
        
})

module.exports = mongoose.model('registerTable' , UserInfoSchema )