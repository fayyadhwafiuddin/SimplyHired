import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionSheetController } from '@ionic/angular';
import { getApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Jobs } from '../models/jobs';

@Component({
  selector: 'app-post-jobs',
  templateUrl: './post-jobs.page.html',
  styleUrls: ['./post-jobs.page.scss'],
})
export class PostJobsPage implements OnInit {
  public JobsForm: FormGroup;
  presentingElement = undefined;

  err_msg = 'Required!!';
  
  constructor(public formBuilder: FormBuilder,
    private actionSheetCtrl: ActionSheetController)
   { this.JobsForm = this.formBuilder.group ({
     img: ['', Validators.compose([Validators.required])],
     company_name: ['', Validators.compose([Validators.required])],
     job_position: ['', Validators.compose([Validators.required])],
     location: ['', Validators.compose([Validators.required])],
     salary_to: ['', Validators.compose([Validators.required])],
     salary_from: ['', Validators.compose([Validators.required])],
     requirement: ['', Validators.compose([Validators.required])],
     more_info: ['', Validators.compose([Validators.required])],
   }); 
  }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }
  Postjobs = async () => {
    const firebaseApp = getApp();
    const db = getFirestore(firebaseApp);
    const jobCollection = collection(db, `jobposted`);

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Post Form?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            addDoc(jobCollection, this.JobsForm.value);
            console.log(this.JobsForm.value);
          }
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };
  // addjobs(){
  //   const firebaseApp = getApp();
  //   const db = getFirestore(firebaseApp);
  //   const jobCollection = collection(db, `jobposted`);

  //   addDoc(jobCollection, this.JobsForm.value);
  //   console.log(this.JobsForm.value);
  // }  
}

