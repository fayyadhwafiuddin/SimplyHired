import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonicAuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { getApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';
  

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

  ngOnInit() {
    this.userForm = this.fb.group({
      user: ['', Validators.compose([Validators.required])],
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      phoneno: ['', Validators.compose([Validators.required])],
    });
  }

  async signUp(value) {
    this.ionicAuthService.createUser(value)
      .then((response) => {
        const firebaseApp = getApp();
        const db = getFirestore(firebaseApp);
        const userdata = collection(db, `userdata`);
        // push to firebase
    addDoc(userdata,{
        user : this.userForm.value.user,
        email : this.userForm.value.email,
        password: this.userForm.value.password,
        phone : this.userForm.value.phoneno,
      });
        this.errorMsg = "";
        this.successMsg = "New user created.";
      }, error => {
        this.errorMsg = error.message;
        this.successMsg = "";
      })
      console.log(this.userForm.value);
  }

  goToLogin() {
    this.router.navigateByUrl('logscreen');
  }


}