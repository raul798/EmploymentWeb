import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { JobsComponent } from './jobs/jobs.component';
import { DetailComponent } from './detail/detail.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: 'app',
    component: AppComponent
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'register',
    component: RegisterComponent
  },
  { 
    path: 'jobs',
    component: JobsComponent
  },
  { 
    path: 'post',
    component: PostComponent
  },
  { 
    path: 'detail',
    component: DetailComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
