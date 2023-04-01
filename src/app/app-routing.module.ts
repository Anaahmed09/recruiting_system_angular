import { JobComponent } from './components/job/job.component';
import { ApplyjobComponent } from './components/applyjob/applyjob.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'welcome', component :ApplyjobComponent },
  {path:'userjop', component : JobComponent},
  {path:'apply/:id', component :ApplyjobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
