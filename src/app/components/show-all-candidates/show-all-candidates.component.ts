import { ShowAllCandidatesService } from './../../services/show-all-candidates.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-all-candidates',
  templateUrl: './show-all-candidates.component.html',
  styleUrls: ['./show-all-candidates.component.css']
})
export class ShowAllCandidatesComponent implements OnInit {
  jobs : any = [];

  constructor(private ShowAllCandidatesService : ShowAllCandidatesService){}
  ngOnInit(): void{
  this.ShowAllCandidatesService.ShowAllCandidates().subscribe((Response)=>{
  console.log(Response);
  this.jobs= Response;
});
  }


}
