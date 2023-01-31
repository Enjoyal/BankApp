  //import JWT Token
  const jwt = require('jsonwebtoken');

  //import db
  const db=require('./db');

  //database
  userDetails={
    1000:{acno:1000,username:'enjoyal', pswd:'abcd', balance:1000,transaction:[]},
    1001:{acno:1001,username:'enjoyal',pswd:'1234', balance:1000,transaction:[]},
    1002:{acno:1002,username:'enjoyal',pswd:'ABCD', balance:1000,transaction:[]},
    1003:{acno:1003, username:'enjoyal',pswd:'1111', balance:1000,transaction:[]} 
  }

const register=(acno, username, password)=>{
    return db.User.findOne({acno})
    .then(user=>{

    if(user){
        return{
        status: false,
        statusCode:400,
        message:'User already registered'
        }
    }
    else{
      const newUser=new db.User({
        acno: acno,
        username:username,
        pswd:password,
        balance:0,
        transaction: []
      })
      newUser.save();   //data saved in mongodb
    //   this.saveDetails();
    return{    
        status: true,
        statusCode:200,
        message:'Registered Successfully'
        } 
    }

  })
  }


 const login=(acno, pswd)=>{
  return db.User.findOne({acno, pswd})
    .then(user=>{
      if(user){
        currentUser=user.username
        currentAcno=acno

        //To generate Token
        const token= jwt.sign({currentAcno:acno},'superkey2022')  //superkey is a secret key(private key)
        return{
          status: true,
          statusCode:200,
          message:'Login Successful',
          currentUser:currentUser,
          currentAcno: currentAcno,
          token:token
          }
      }
    else{
      return{
        status: false,
        statusCode:400,
        message:'Invalid userdetails'
        }   
    }
  })
  }

  const deposit=(acno, pswd, amount, transTime)=>{
   var  amount=parseInt(amount);
    return db.User.findOne({acno, pswd})
    .then(user=>{
      if(user){
        user.balance+=amount;
        //pushing elements to transaction array
        user.transaction.push({
          type:'Credit',
          Amount:amount,
          time:transTime
        })
          user.save();
          return{
            status: true,
            statusCode:200,
            message:`${amount} is credited and Balance: ${user.balance}`
      }
    }
      else{
        return{
          status: false,
          statusCode:400,
          message:'Password incorrect'
          }  
      }
    })
  }
  
    // else{
    //   return{
    //     status: false,
    //     statusCode:400,
    //     message:'Invalid userdetails'
    //     }   
    // }
  
 const withdraw=(acno, pswd,amount, transTime)=>{
   var amount=parseInt(amount);
   return db.User.findOne({acno, pswd})
   .then(user=>{
    if(user){
      if (user.balance>amount) {
        user.balance-=amount;
         //pushing elements to transaction array
         user.transaction.push({
          type:'Debit',
          Amount:amount,
          time:transTime
        })
        user.save();
        return{
          status: true,
          statusCode:200,
          message:`${amount} is debited and Balance: ${user.balance}`
          } 
        }
        else{
          return{
            status: false,
            statusCode:400,
            message:'Insufficent Balance'
            }  
        }
      }
      else{
        return{
          status: false,
          statusCode:400,
          message:'Invalid userdetails'
          }  
      }
    })
  }


  //   else{
  //     return{
  //       status: false,
  //       statusCode:400,
  //       message:'Invalid userdetails'
  //       }   
  //   }
  // }

 const getTransaction=(acno)=>{
  return db.User.findOne({acno})
  .then(user=>{
    if(user){
    return{
      status: true,
      statusCode:200,
      transaction:user
    }
  }
  else{
    return{
      status: false,
      statusCode:400,
      message:'Invalid userdetails'
      }  
  }
})
  }
  
// To delete an account

const deleteAcc=(acno)=>{
  return db.User.deleteOne({acno})
  .then(user=>{
    if(user){
      return{
        status: true,
        statusCode:200,
        message:'Account deleted successfully'
        
      }
    }
    else{
      return{
        status: false,
        statusCode:400,
        message:'user not found'
        }  
    }
  })
}

  module.exports={               //to use in other places
    register,
    login,
    deposit,
    withdraw,
    getTransaction,
    deleteAcc
  }

  