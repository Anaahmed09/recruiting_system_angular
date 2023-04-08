import { AdminRoutingModule } from './models/admin/admin-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/shared/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
// import { WelcomeComponent } from './components/user/welcome/welcome.component';
import { AllJobsComponent } from './components/admin/all-jobs/all-jobs.component';
import { RegisterFormComponent } from './components/user/register-form/register-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResultComponent } from './components/result/result.component';
import { MysidebarComponent } from './components/mysidebar/mysidebar.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, NotFoundComponent,AllJobsComponent,
    RegisterFormComponent,ProfileComponent,
    ResultComponent,
    MysidebarComponent,],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
