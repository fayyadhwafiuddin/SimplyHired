import { Component, OnInit } from '@angular/core';
import { getApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, doc, getDoc, getDocs, QuerySnapshot } from 'firebase/firestore';
import { Job, Jobs } from '../models/jobs';
@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.page.html',
  styleUrls: ['./find-jobs.page.scss'],
})
export class FindJobsPage implements OnInit {

  public jobList: Jobs[] = [];
  search: string;
  currentjob = [];
  onjob = [];
  jobindex : number;
  // public job: Job = [];

  constructor() { }

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
    console.log(this.currentjob);
  }

  isModalOpen = false;

  async setOpen(isOpen: boolean) {
    const firebaseApp = getApp();
    this.isModalOpen = isOpen;
    console.log(this.isModalOpen);
  }

 getitem(item) {
  console.log(item);
  console.log(this.currentjob[item]);

  this.onjob = [{
    doc_id: this.currentjob[item].doc_id,
    company_name : this.currentjob[item].company_name,
    img : this.currentjob[item].img,
    job_position : this.currentjob[item].job_position,
    category: this.currentjob[item].category,
    qualification: this.currentjob[item].qualification,
    location: this.currentjob[item].location,
    salary_from: this.currentjob[item].salary_from,
    salary_to: this.currentjob[item].salary_to,
    requirement: this.currentjob[item].requirement,
    candidate_types: this.currentjob[item].candidate_types,
  }];
  console.log(this.onjob);
 }

}
