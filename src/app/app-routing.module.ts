import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LoginComponent } from './components/shared/login/login.component';
import { ResultComponent } from './components/result/result.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule,Component } from '@angular/core';
import { JobComponent } from './components/job/job.component';
import { ApplyjobComponent } from './components/applyjob/applyjob.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './components/user/register-form/register-form.component';
import { AllJobsComponent } from './components/admin/all-jobs/all-jobs.component';
import { WelcomeComponent } from './components/user/welcome/welcome.component';
import { ShowAllCandidatesComponent } from './components/show-all-candidates/show-all-candidates.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';


const routes: Routes = [
  {path:'welcome', component :ApplyjobComponent },
  {path:'userjob', component : JobComponent},
  {path:'apply/:id', component :ApplyjobComponent },
  { path: 'profile', component: ProfileComponent},
  { path:'result', component: ResultComponent, }
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'createQuestion/:question_id/:job_id', component: CreateQuestionComponent },
  { path: 'showAllCandidates', component: ShowAllCandidatesComponent },
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
