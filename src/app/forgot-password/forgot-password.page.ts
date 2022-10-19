import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email:any;
  constructor(private auth:AngularFireAuth) { }

  ngOnInit() {
  }

  reset(){
    this.email=((document.getElementById("email") as HTMLInputElement).value);

    this.auth.sendPasswordResetEmail(this.email)
    .then(userCredential => {
      window.alert("reset email has been set to this email :" + this.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert(errorMessage);
    });
  }

}
