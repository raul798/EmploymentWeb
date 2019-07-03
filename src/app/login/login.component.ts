import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth/aith.service.service'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  // loginUser(){
  //   this.router.navigateByUrl('/home')
  // }
}
