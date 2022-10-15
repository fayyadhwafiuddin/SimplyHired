import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionSheetController, NavController } from '@ionic/angular';
import { getApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Jobs } from '../models/jobs';

@Component({
  selector: 'app-post-jobs',
  templateUrl: './post-jobs.page.html',
  styleUrls: ['./post-jobs.page.scss'],
})
export class PostJobsPage implements OnInit {
  public navCtrl: NavController
  public JobsForm: FormGroup;
  presentingElement = undefined;
  public req : any=[];
  errmsg: string;

  err_msg = "required.";
  data: boolean;
  requirement : string;
  cost: number;

  // err_msg = {
  //   'job_position' : {
  //     type: 'required',
  //     message: 'field input required.'
  //   },
  //   'salary_from' : {
  //     type: 'required',
  //     message: 'field input required.'
  //   },
  //   'salary_to' : {
  //     type: 'required',
  //     message: 'field input required.'
  //   },
  //   'requirement' : {
  //     type: 'required',
  //     message: 'field input required.'
  //   },
  //   'more_info' : {
  //     type: 'required',
  //     message: 'field input required.'
  //   },
  //   'post_duration' : {
  //     type: 'required',
  //     message: 'field input required.'
  //   }
  // };
  
  constructor(
    public formBuilder: FormBuilder,
    private actionSheetCtrl: ActionSheetController){ 
       this.JobsForm = this.formBuilder.group ({
          img: ['', Validators.compose([Validators.required])],
          company_name: ['', Validators.compose([Validators.required])],
          job_position: ['', Validators.compose([Validators.required])],
          category: ['', Validators.compose([Validators.required])],
          location: ['', Validators.compose([Validators.required])],
          qualification: ['', Validators.compose([Validators.required])],
          salary_from: ['', Validators.compose([Validators.required])],
          salary_to: ['', Validators.compose([Validators.required])],
          requirement: ['', Validators.compose([Validators.required])],
          candidate_types: ['', Validators.compose([Validators.required])],
          district: ['', Validators.compose([Validators.required])],
          post_duration_from: ['', Validators.compose([Validators.required])],
          post_duration_to: ['', Validators.compose([Validators.required])],
        });
    }

  ngOnInit() {
    // supposed to be get duration of post from and to
    // this.presentingElement = document.querySelector('.ion-page');
    // this.JobsForm.get('post_duration_to').value;
    // console.log(this.JobsForm.get('post_duration_to').value);
  }

  // fn for add data to firstore
  async Postjobs() {
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
            addDoc(jobCollection,
              {
                company_name : "",
                img : "",
                location: "",
                job_position : this.JobsForm.value.job_position,
                category : this.JobsForm.value.category,
                qualification : this.JobsForm.value.qualification,
                salary_from : this.JobsForm.value.salary_from,
                salary_to : this.JobsForm.value.salary_to,
                requirement : this.req,
                candidate_types : this.JobsForm.value.candidate_types,
                district : this.JobsForm.value.district,
                post_duration_from : this.JobsForm.value.post_duration_from,
                post_duration_to : this.JobsForm.value.post_duration_to,

              });
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
  
  
  // goTo(){
    //   console.log('this.req',this.requirement);
  //   this.data=true;
  //   }
  // to add requirement to req array
  add(){
    this.req.push({'i': this.JobsForm.get('requirement').value});
    console.log(this.req.value);
    }
  //remove object in req array
  x(item){
    delete this.req[item];
  }  
}