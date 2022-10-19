import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonicAuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { getApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, doc, getDoc, getDocs } from 'firebase/firestore';
import { userprofile } from '../models/jobs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';
  private userprofile: userprofile[] = [];
  

  error_msg = {
    'email': [
      { 
        type: 'required', 
        message: 'Provide email.' 
      },
      { 
        type: 'pattern', 
        message: 'Email is not valid.' 
      }
    ],
    'password': [
      { 
        type: 'required', 
        message: 'Password is required.' 
      },
      { 
        type: 'minlength', 
        message: 'Password length should be 6 characters long.' 
      }
    ]
  };


  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private fb: FormBuilder
  ) { }

  async ngOnInit() {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });

    // Retrive userdata 

    const firebaseApp = getApp();
    const db = getFirestore(firebaseApp);

    //to get collection from firestore
    const usercollection = await getDocs(collection(db, 'userdata'));
    usercollection.forEach((doc) => {
      this.userprofile.push({
        email: doc.data().email,
        password: doc.data().password,
        role: doc.data().role,
        phone: doc.data().phone,
        user: doc.data().user,
      })
    })
    var userrole = this.userprofile;
    console.log(userrole);
  }

  username:any;
  password:any;

  logAdmin(){
    if(this.username == "admin@admin" && this.password == "adminadmin"){
      this.router.navigate(['/admin-homepage']);
    }
  }

  signIn(value) {
    this.ionicAuthService.signinUser(value)
      .then((response) => {
        console.log(response)
        console.log(value)
        var userrole = this.userprofile;
        localStorage.setItem('password',value.password);
        if(localStorage.getItem('password') == "employee"){
          this.router.navigateByUrl('dashboard-e');
        }else{
          this.router.navigateByUrl('dashboard');
        }
        this.errorMsg = "";
      }, error => {
        this.errorMsg = error.message;
        this.successMsg = "";
      })
  }

  goToSignup() {
    this.router.navigateByUrl('register');
  }

  reset() {
    this.router.navigateByUrl('forgot-password');
  }

}