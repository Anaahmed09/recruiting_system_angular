import { ProfileService } from '../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor(private userservice:ProfileService){}
  p: number = 1;
  candidates:any=[];
  candidatesInfo:any=[];
  jobInfo:any=[];
  questionInfo:any=[];
    ngOnInit(): void {
  
  this.userservice.getresult().subscribe(
    {
      next:(response)=>
      {
        // console.log(response);
        
       this.candidates=response
       this.candidatesInfo=this.candidates['candidate'];
        this.jobInfo=this.candidates['job'];
        this.questionInfo=this.candidates['count'];
       console.log(this.questionInfo)
      },
      error:(error)=>{
        console.log(error);
      }
    }
  )
  
}

}

