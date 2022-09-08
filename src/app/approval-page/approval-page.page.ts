import { Component, OnInit } from '@angular/core';
import { getApp } from 'firebase/app';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
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
        district: doc.data().district,
        post_duration_from: doc.data().post_duration_from,
        post_duration_to: doc.data().post_duration_to,
      });

    });

  }

  async appitem(item) {
    console.log(item);
    console.log(this.currentjob[item]);
  
    this.onjob = [{
      company_name : this.currentjob[item].company_name,
      img : this.currentjob[item].img,
      job_position : this.currentjob[item].job_position,
      category : this.currentjob[item].category,
      location: this.currentjob[item].location,
      qualification:this.currentjob[item].qualification,
      salary_from: this.currentjob[item].salary_from,
      salary_to: this.currentjob[item].salary_to,
      requirement: this.currentjob[item].requirement,
      candidate_types: this.currentjob[item].candidate_types,
      district: this.currentjob[item].district,
      post_duration_from: this.currentjob[item].post_duration_from,
      post_duration_to: this.currentjob[item].post_duration_to,
    }];
    console.log(this.onjob);
    console.log(this.onjob[0]);

    const firebaseApp = getApp();
    const db = getFirestore(firebaseApp);
    const approvedpost = await collection(db, 'approvedpost');
    
    addDoc(approvedpost, this.onjob[0]);
   }

   async rejitem(item) {
    console.log(item);
    console.log(this.currentjob[item]);
  
    this.onjob = [{
      company_name : this.currentjob[item].company_name,
      img : this.currentjob[item].img,
      job_position : this.currentjob[item].job_position,
      category : this.currentjob[item].category,
      location: this.currentjob[item].location,
      qualification:this.currentjob[item].qualification,
      salary_from: this.currentjob[item].salary_from,
      salary_to: this.currentjob[item].salary_to,
      requirement: this.currentjob[item].requirement,
      candidate_types: this.currentjob[item].candidate_types,
      district: this.currentjob[item].district,
      post_duration_from: this.currentjob[item].post_duration_from,
      post_duration_to: this.currentjob[item].post_duration_to,
    }];
    console.log(this.onjob);
    console.log(this.onjob[0]);

    const firebaseApp = getApp();
    const db = getFirestore(firebaseApp);
    const approvedpost = await collection(db, 'rejectedpost');
    
    addDoc(approvedpost, this.onjob[0]);
   }
} 
