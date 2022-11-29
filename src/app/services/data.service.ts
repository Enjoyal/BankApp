import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  //database
  userDetails:any={
    1000:{acno:1000,username:'enjoyal', pswd:'abcd', balance:1000,transaction:[]},
    1001:{acno:1001,username:'enjoyal',pswd:'1234', balance:1000,transaction:[]},
    1002:{acno:1002,username:'enjoyal',pswd:'ABCD', balance:1000,transaction:[]},
    1003:{acno:1003, username:'enjoyal',pswd:'1111', balance:1000,transaction:[]} 
  }

  register(acno:any, username:any, password:any){
    let userDetails=this.userDetails;
    
    if(acno in userDetails){
      return false;
    }
    else{
      userDetails[acno]={
        acno: acno,
        username:username,
        pswd:password,
        balance:0
      }
      console.log(userDetails);
      return true;
      
    }

  }

  currentUser="";
//to hold current acno
  currentAcno='';

  login(acno:any, pswd:any){
    // alert('Login clicked')

    var userDetails=this.userDetails;
    if(acno in userDetails){
      if(pswd==userDetails[acno]['pswd']){
        this.currentUser=userDetails[acno].username;
        this.currentAcno=acno;
       return true;
      }
      else{
        return false;     
       }
    }
    else{
      return false;
    }
  }

//  types='';
// amount='';
  deposit(acno:any, pswd:any,amount:any){
    let userDetails =this.userDetails;
    amount=parseInt(amount);
    if(acno in userDetails){
      if(pswd== userDetails[acno].pswd){
        userDetails[acno].balance+=amount;
        //pushing elements to transaction array
        userDetails[acno]['transaction'].push({
          type:'Credit', Amount:amount
        })
        console.log(userDetails);
        //
        // this.types=userDetails[acno]['transaction'].type;
        // this.amount=userDetails[acno]['transaction'].Amount;
        // console.log(this.types);
        // console.log(this.amount);

        
        
        return userDetails[acno].balance;
      }
      else{
        alert('Password Incorrect');
        return false;
      }
    }
    else{
      alert('Invalid userDetails')
      return false;
    }
  }

  withdraw(acno1:any, pswd1:any,amount1:any){
    let userDetails =this.userDetails;
    amount1=parseInt(amount1);
    if(acno1 in userDetails){
      if(pswd1== userDetails[acno1].pswd){
        if(amount1<userDetails[acno1].balance){
        userDetails[acno1].balance-=amount1;

         //pushing elements to transaction array
         userDetails[acno1]['transaction'].push({
          type:'Debit', Amount:amount1
        })
        //
        // this.types=userDetails[acno1]['transaction'].type;
        // this.amount=userDetails[acno1]['transaction'].Amount;

        return userDetails[acno1].balance;
      }
      else{
        alert('Insufficient balance');
        return false;
      }
    }
    else{
      alert('Invalid password')
      return false;
    }
    }
    else{
      alert('Invalid userDetails')
      return false;
    }
  }

// 
getTransaction(acno:any){
  return this.userDetails[acno].transaction;
}

  

}
