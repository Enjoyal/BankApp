//Server - mongoDB Integration 

//import mongoose
const mongoose= require('mongoose');

//2 State connection string via moongoose

mongoose.connect('mongodb://localhost:27017/BankServer',
{
    useNewUrlParser: true  //to avoid unwanted warnings
});

//Define bank db model

const User=mongoose.model('User',
{
    //schema creatiion
    acno:Number,
    username:String,
    pswd:String,
    balance:Number,
    transaction:Array
});

//export collection

module.exports={
    User
}