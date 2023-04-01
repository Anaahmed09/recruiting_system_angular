import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './components/user/register-form/register-form.component';
import { AllJobsComponent } from './components/admin/all-jobs/all-jobs.component';
import { WelcomeComponent } from './components/user/welcome/welcome.component';

const routes: Routes = [
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
    // TODO: this WelcomeComponent for demo purpose and
    // TODO: it will be replaced by the actual AddJobComponent in merging:)
    component: WelcomeComponent,
  },
  {
    path: 'login',
    // TODO: this WelcomeComponent for demo purpose and
    // TODO: it will be replaced by the actual LoginComponent in merging:)
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
