import { Component, OnInit } from '@angular/core';
import { getApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Jobs } from '../models/jobs';

@Component({
  selector: 'app-approval-page',
  templateUrl: './approval-page.page.html',
  styleUrls: ['./approval-page.page.scss'],
})
export class ApprovalPagePage implements OnInit {
 
  public jobList: Jobs[] = [];
  currentjob = [];
  onjob = [];
  jobindex : number;

  constructor() { }

  async ngOnInit() {
    const firebaseApp = getApp();
    const db = getFirestore(firebaseApp);

    const jobscollection = await getDocs(collection(db, 'jobposted'));

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

      this.currentjob.push({
        doc_id: doc.id,
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
      });

    });

  }

  getitem(item) {
    console.log(item);
    console.log(this.currentjob[item]);
  
    this.onjob = [{
      doc_id: this.currentjob[item].doc_id,
      company_name : this.currentjob[item].company_name,
      img : this.currentjob[item].img,
      job_position : this.currentjob[item].job_position,
      location: this.currentjob[item].location,
      more_info: this.currentjob[item].more_info,
      requirement: this.currentjob[item].requirement,
      salary_from: this.currentjob[item].salary_from,
      salary_to: this.currentjob[item].salary_to,
    }];
    console.log(this.onjob);
   }
} 
