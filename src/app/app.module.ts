import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './components/job/job.component';
import { ApplyjobComponent } from './components/applyjob/applyjob.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OrderByPipe} from './order-by-pipe'

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    ApplyjobComponent,
    OrderByPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
