import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  acno='';
  uname='';
  pswd='';
  //register model
  registerForm=this.fb.group({
    uname:[''],
    acno:[''],
    pswd:['']
  })


  constructor(private ds:DataService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  aim="Your perfect banking partner";





  register(){
    // alert('Clicked register')
    console.log(this.registerForm); //value:
    
    var username=this.registerForm.value.uname;
    var password=this.registerForm.value.pswd;
    var acno=this.registerForm.value.acno;
    const result=this.ds.register(acno,username,password)
    if(result){
      alert('Register successful');
      this.router.navigateByUrl('');

    }
    else{
      alert('register failed');
      this.router.navigateByUrl('')

    }
  }

}
