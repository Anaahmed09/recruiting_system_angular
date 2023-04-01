import { forEach, shuffle } from 'lodash';
import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrls: ['./applyjob.component.css'],
})
export class ApplyjobComponent implements OnInit {
  questions: any = [];
  question: any = [];
  job_id: number;
  readioSelected: any = [];
  rightAnswer: number = 0;
  questionId: any;
  answer: any;

  constructor(
    private jobService: JobService,
    private activatedroute: ActivatedRoute
  ) {
    this.job_id = Number(this.activatedroute.snapshot.paramMap.get('id'));
    this.jobService.job_id = this.job_id;
  }
  shuffle(array: any[]): any {
    return shuffle(array);
  }

  showContent() {
    for (let i = 0; i < this.readioSelected.length; i++) {
      this.questionId = this.readioSelected[i].split(':')[0];
      this.answer = this.readioSelected[i].split(':')[1];
      for (let myquestion of this.question) {
        if (myquestion.id == this.questionId) {
          if (myquestion.RightAnswer == this.answer) {
            this.rightAnswer++;
          }
        }
      }
    }
    this.jobService.candidate(this.job_id , this.rightAnswer , 1 , 20-this.rightAnswer);
  }

  ngOnInit(): void {
    this.jobService.job().subscribe({
      next: (response) => {
        console.log(response);

        this.questions = response;
        this.question = this.questions.data;
        console.log(this.question);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
