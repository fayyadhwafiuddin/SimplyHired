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
        location: doc.data().location,
        more_info: doc.data().more_info,
        requirement: doc.data().requirement,
        salary_from: doc.data().salary_from,
        salary_to: doc.data().salary_to,
        post_duration: doc.data().post_duration,
      });

      //this is just to show if data can be retrieved
      console.log(doc.id, " => ", doc.data());
      this.currentjob.push({
        doc_id: doc.id,
        company_name : doc.data().company_name,
        img : doc.data().img,
        job_position : doc.data().job_position,
        location: doc.data().location,
        more_info: doc.data().more_info,
        requirement: doc.data().requirement,
        salary_from: doc.data().salary_from,
        salary_to: doc.data().salary_to,
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
    location: this.currentjob[item].location,
    more_info: this.currentjob[item].more_info,
    requirement: this.currentjob[item].requirement,
    salary_from: this.currentjob[item].salary_from,
    salary_to: this.currentjob[item].salary_to,
  }];
  console.log(this.onjob);
 }

}
