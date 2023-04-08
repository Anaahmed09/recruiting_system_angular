import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LoginComponent } from './components/shared/login/login.component';
import { ResultComponent } from './components/result/result.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './components/user/register-form/register-form.component';
import { AllJobsComponent } from './components/admin/all-jobs/all-jobs.component';
import { WelcomeComponent } from './components/user/welcome/welcome.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path:'result', component: ResultComponent, }
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
  {
    path: 'signup',
    component: RegisterFormComponent,
  },
  {
    path: 'all-jobs',
    component: AllJobsComponent,
  },
  {
    path: 'addJob',
    component: WelcomeComponent,
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
