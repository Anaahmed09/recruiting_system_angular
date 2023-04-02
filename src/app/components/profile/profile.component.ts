import { ProfileService } from '../../user.service';
import { Component, OnInit } from '@angular/core';
// import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private userservice:ProfileService){}
  users:any=[];
  candidatesInfo:any=[];
  jobInfo:any=[];
    ngOnInit(): void {
  
  this.userservice.getprofile().subscribe(
    {
      next:(response)=>
      {
       this.users=response
       this.users.created_at=  new Date(this.users.created_at ).toDateString()
      },
      error:(error)=>{
        console.log(error);
      }
    }
  );
}

}
