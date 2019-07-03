import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService} from '../auth/aith.service.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { JobsComponent } from '../jobs/jobs.component';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userType: string;
  userEmail: string;
  dataTable: any;

  constructor(private router:Router, private authService: AuthService, private angularFirestore: AngularFirestore) {}

  ngOnInit() {
    var instance = this;

    var userInfo = this.angularFirestore.collection('users').doc(localStorage.getItem('email')).ref.get().then(function (doc) {
      if(doc.exists) {
        instance.userType = doc.get('userType');
        instance.userEmail = doc.get('email');
        
      }
    }).catch(function (error) {
      console.log("Error getting document", error);
    });
  }

  toLogin(){
    this.router.navigateByUrl('login');
  }

  postJob() {
    this.router.navigateByUrl('post');
  }
}
