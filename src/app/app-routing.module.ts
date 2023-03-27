import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ShowAllCandidatesComponent } from './components/show-all-candidates/show-all-candidates.component';

const routes: Routes = [
  { path: 'createQuestion/:question_id/:job_id', component: CreateQuestionComponent },
  { path: 'showAllCandidates', component: ShowAllCandidatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
