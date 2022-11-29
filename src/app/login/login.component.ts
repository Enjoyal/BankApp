import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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



  constructor( private ds:DataService, private router:Router) { }  //(1st execution)
  //it automatically invokes when the obect is created.

  ngOnInit(): void {  //( 2nd execution)
    //for initial process of compnt
    //lifecucle hook of angular
  }

/*event binding using $event------------

  login(){
    // alert('Login clicked')
    var acno=this.acno;  //1000
    var pswd=this.pswd;  //1000
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
*/

/*event binding using template reference variable--------

  login(a:any, p:any){
    // alert('Login clicked')
    var acno=a.value;  //1000
    var pswd=p.value;  //1000
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
*/


//ngModel(Two direction)-----------------------

  login(){
    // alert('Login clicked')
    var acno=this.acno;  //1000
    var pswd=this.pswd;  //1000
    const result=this.ds.login(acno, pswd)

      if(result){
        alert('Login succesfully')
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert('invalid password')
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
