import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobsComponent } from './jobs/jobs.component';
import { DetailComponent } from './detail/detail.component';
import { PostComponent } from './post/post.component';

const firebaseConfig = {
  apiKey: "AIzaSyCa2Ma_m9XI1_hA0T2Rc2YmLy-3gFp0A7A",
  authDomain: "employmentweb-d0218.firebaseapp.com",
  databaseURL: "https://employmentweb-d0218.firebaseio.com",
  projectId: "employmentweb-d0218",
  storageBucket: "employmentweb-d0218.appspot.com",
  messagingSenderId: "84942601429",
  appId: "1:84942601429:web:d5d7c329364f70f9"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    JobsComponent,
    DetailComponent,
    PostComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
