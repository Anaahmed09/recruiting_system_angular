import { AppModule } from './../../app.module';
import { ShowAllCandidatesService } from './../../services/show-all-candidates.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-all-candidates',
  templateUrl: './show-all-candidates.component.html',
  styleUrls: ['./show-all-candidates.component.css']
})
export class ShowAllCandidatesComponent implements OnInit {
  jobs : any = [];
  // newJobs : any = [];
  // jobsCandidates: any = [];
  searchText='';


  constructor(private ShowAllCandidatesService : ShowAllCandidatesService){}
  ngOnInit(): void{
  this.ShowAllCandidatesService.ShowAllCandidates().subscribe((Response : any)=>{
  console.log(Response);
  this.jobs=Response;
  //////////////////////////////////////////////////////
  // this.newJobs= Response.map((item:any)=> (item.user));
  // for (const element of this.newJobs) {
  //   // console.log(element);
  //   for (const item of element) {
  //     // console.log(item);
  //     this.jobsCandidates.push(item);
// });
//   }
// }
})
}}




// import {AfterViewInit, Component, ViewChild } from '@angular/core';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatSort} from '@angular/material/sort';
// import {MatTableDataSource} from '@angular/material/table';

// export interface UserData {
//   id : string ;
//   JobId: string;
//   JobName: string;
//   Email: string;
//   UserName: string;
//   Image: string;
//   Phone: string;
//   Address: string;

// }



// /**
//  * @title Data table with sorting, pagination, and filtering.
//  */
// @Component({
//   selector: 'app-show-all-candidates',
//   styleUrls: ['./show-all-candidates.component.css'],
//   templateUrl: './show-all-candidates.component.html',
// })
// export class ShowAllCandidatesComponent implements AfterViewInit {
//   displayedColumns: string[] = ['id', 'JobId', 'JobName', 'Email','UserName', 'Image', 'Phone', 'Address'];
//   dataSource: MatTableDataSource<UserData>;
// /** Constants used to fill up our data base. */

//  JobId: string[] = [];
//  JobName: string[] = [];
//  Email: string[] = [];
//  UserName: string[] = [];
//  Image: string[] = [];
//  Phone: string[] = [];
//  Address: string[] = [];

//   @ViewChild(MatPaginator) paginator: MatPaginator | any;
//   @ViewChild(MatSort) sort: MatSort | any;

//   constructor(private ShowAllCandidatesService : ShowAllCandidatesService) {
//     // Create 100 users
//     const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

//     // Assign the data to the data source for the table to render
//     this.dataSource = new MatTableDataSource(users);
//   }

//     ngOnInit(): void{

//     this.ShowAllCandidatesService.ShowAllCandidates().subscribe((Response : any)=>{
//     console.log(Response);
//     this.JobId = Response.map((item : any)=>(item.id))
//     this.JobName = Response.map((item : any)=>(item.JobName))
//     this.Email = Response.map((item : any)=>(item.Email))
//     this.UserName = Response.map((item : any)=>(item.UserName))
//     this.Image = Response.map((item : any)=>(item.Image))
//     this.Phone = Response.map((item : any)=>(item.Phone))
//     this.Address = Response.map((item : any)=>(item.Address))
//     // this.jobs= Response;
//   });
//     }


//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//     console.log(this.JobId)
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// }

// /** Builds and returns a new User. */
// const createNewUser = (JobId : number): any => { id: id.toString(),
//     JobId: this.JobId[Math.round(Math.random() * (this.JobId.length - 1))],
//     JobName: this.JobName[Math.round(Math.random() * (JobName.length - 1))],
//     Email: Email[Math.round(Math.random() * (Email.length - 1))],
//     UserName: UserName[Math.round(Math.random() * (UserName.length - 1))],
//     Image: Image[Math.round(Math.random() * (Image.length - 1))],
//     Phone: Phone[Math.round(Math.random() * (Phone.length - 1))],
//     Address: Address[Math.round(Math.random() * (Address.length - 1))],
// }

