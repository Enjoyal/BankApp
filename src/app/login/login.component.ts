import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //(3rd execution)
  aim="Your perfect banking partner";

  account="Enter your account no here";

  acno='';
  pswd='';
  //class - collection of properties and mthds
  //propertie /variables
  //undefined mthds (4th execution)

  userDetails:any={
    1000:{acno:1000,pswd:'abcd', balance:1000},
    1001:{acno:1001,pswd:'1234', balance:1000},
    1002:{acno:1002,pswd:'ABCD', balance:1000},
    1003:{acno:1003,pswd:'1111', balance:1000}
    
  }

  constructor() { }  //(1st execution)
  //it automatically invokes when the obect is created.

  ngOnInit(): void {  //( 2nd execution)
    //for initial process of compnt
    //lifecucle hook of angular
  }

  login(){
    // alert('Login clicked')
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['pswd']){
        alert('Login succesfully')
      }
      else{
        alert('invalid password')
      }
    }
    else{
      alert('invalid user details')
    }
  }

  acnoChange(event:any){
    console.log(event);
    
    this.acno=event.target.value;
    console.log(this.acno);
    
  }

  pswdChange(event:any){
    console.log(event);
    
    this.pswd=event.target.value;
    console.log(this.pswd);

  }

  



}
