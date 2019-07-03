import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router'

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { async } from '@angular/core/testing';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  designJobs: Array<any>;
  programmingJobs: Array<any>;
  tbDesign: any;
  tbProgramming: any;

  constructor(private angularFirestore: AngularFirestore, private chRef: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    this.designJobs = [];
    this.programmingJobs = [];

    var instance = this;

      this.getJobs().then(async function() {
      instance.chRef.detectChanges();

      const tbDesign: any = $('#tbDesign');
      instance.tbDesign = tbDesign.DataTable();
  
      const tbProgramming: any = $('#tbProgramming');
      instance.tbProgramming = tbProgramming.DataTable();
    });

    this.chRef.detectChanges();

  
  }

    async getJobs(){
      var instance = this;

      await instance.angularFirestore.collection('jobs').ref.where('category','==','Design').get().then(function (querySnapshot){
        querySnapshot.forEach(function (doc) {
          instance.designJobs.push(doc.data());
        });
      }).catch(function(e){
          console.log(e.message);
      });


      await instance.angularFirestore.collection('jobs').ref.where('category','==','Programming').get().then(function (querySnapshot){
        querySnapshot.forEach(function (doc) {
          instance.programmingJobs.push(doc.data());
        });
      }).catch(function(e){
        console.log(e.message);
      });
  }

  getDetail(company: string, position: string) {
    localStorage.setItem('company', company);
    localStorage.setItem('position', position);
    this.router.navigateByUrl('detail');
  }
}
