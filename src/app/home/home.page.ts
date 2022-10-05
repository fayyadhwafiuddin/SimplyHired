import { Component, NgZone, OnInit } from '@angular/core';
import { getApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, doc, getDoc, getDocs, QuerySnapshot } from 'firebase/firestore';
import { Jobs } from '../models/jobs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public jobList: Jobs[] = [];

  constructor(private zone: NgZone) {

  }

  async ngOnInit() {
    const firebaseApp = getApp();
    const db = getFirestore(firebaseApp);

    //to get collection from firestore
    const jobscollection = await getDocs(collection(db, 'jobposted'));

    //push data to array
    //this also help to show to homepage
    jobscollection.forEach((doc) => {
      this.jobList.push({
        company_name : doc.data().company_name,
        img : doc.data().img,
        job_position : doc.data().job_position,
        category : doc.data().category,
        location: doc.data().location,
        qualification:doc.data().qualification,
        salary_from: doc.data().salary_from,
        salary_to: doc.data().salary_to,
        requirement: doc.data().requirement,
        candidate_types: doc.data().candidate_types,
        district: doc.data().district,
        post_duration_from: doc.data().post_duration_from,
        post_duration_to: doc.data().post_duration_to,
      });

      //this is just to show if data can be retrieved
      console.log(doc.id, " => ", doc.data());
    });
  }
}