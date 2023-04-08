import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LoginComponent } from './components/shared/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './components/user/register-form/register-form.component';
import { AllJobsComponent } from './components/admin/all-jobs/all-jobs.component';
import { WelcomeComponent } from './components/user/welcome/welcome.component';

const routes: Routes = [
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
