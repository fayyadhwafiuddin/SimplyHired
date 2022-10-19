import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard-e',
  templateUrl: './dashboard-e.page.html',
  styleUrls: ['./dashboard-e.page.scss'],
})
export class DashboardEPage implements OnInit {

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService
  ) { }

  ngOnInit() {
  }

  signOut() {
    this.ionicAuthService.signoutUser()
      .then(res => {
        this.router.navigateByUrl('login');
      })
      .catch(error => {
        console.log(error);
      })
  }

}
