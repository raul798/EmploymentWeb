import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'
import { FirebaseApp } from '@angular/fire';
import { AuthService } from '../auth/aith.service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private angularFirestore: AngularFirestore, private firebaseApp: FirebaseApp, private authService: AuthService) {}

  ngOnInit() {
  }

  registerUser(){
    this.router.navigateByUrl('/home')
  }

  insertFirebase(userFirstName: string, userLastName: string, userEmail: string, type: string, userPassword:string){
    var instance = this;

    this.firebaseApp.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function (e) {
      alert('Error! ' + e.message);
    }).then(function () {
      instance.angularFirestore.collection('users').doc(userEmail).set({
        email: userEmail,
        firstName: userFirstName,
        lastName: userLastName,
        userType: type
      }).then(res => instance.router.navigate(['/home']));
    });
  }
}
