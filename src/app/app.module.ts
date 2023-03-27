import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowAllCandidatesComponent } from './components/show-all-candidates/show-all-candidates.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionComponent,
    ShowAllCandidatesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
