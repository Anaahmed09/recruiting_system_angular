import { ResultComponent } from './components/result/result.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: ProfileComponent},
  { path:'result', component: ResultComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
