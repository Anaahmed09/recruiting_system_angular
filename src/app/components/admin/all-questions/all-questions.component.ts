import { AdminService } from './../../../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/models/paginated-config-question';
import { shuffle } from 'lodash';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css'],
})
export class AllQuestionsComponent implements OnInit {
  shuffle(array: any[]): any {
    return shuffle(array);
  }
  id: number = 0;
  titleJob: string = '';
  questions: IQuestion[] = [];
  pre_page: number = 0;
  current_page: number = 0;
  total: number = 0;
  questionsSearch: any;
  displayPagination: boolean = true;
  messageDelete: boolean | string = false;
  constructor(
    private allQuestionsService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  answers: object = [{ answer: this.questions[0] }];

  ngOnInit(): void {
    this.allQuestionsService.getTitleJob(this.id).subscribe({
      next: (response) => {
        this.titleJob = response.title;
      },
      error: (error) => {
        this.router.navigate(['login']);
      },
    });
    this.getQuestions();
  }

  onPageChange(page: number) {
    this.getQuestions(page);
  }

  getQuestions(page: number = 1) {
    this.allQuestionsService.showQuestions(this.id, page).subscribe({
      next: (response) => {
        this.questions = response.data;
        this.current_page = response.current_page;
        this.pre_page = response.per_page;
        this.total = response.total;
        console.log(this.total);
      },
      error: (error) => {
        this.router.navigate(['login']);
      },
    });
  }

  public deleteQuestion(id: number) {
    let confirmDelete: boolean = confirm(
      'Are you sure to delete this question?'
    );
    if (confirmDelete)
      this.allQuestionsService.deleteQuestion(id).subscribe({
        next: (response) => {
          this.messageDelete = 'Deleted Successfully ...';
          setTimeout(() => {
            location.reload();
          }, 3000);
        },
        error: (error) => {
          this.router.navigate(['login']);
        },
      });
    else return;
  }
  search(e: any) {
    if (e.target.value)
      this.allQuestionsService
        .searchQuestion(e.target.value, this.id)
        .subscribe({
          next: (response) => {
            this.questionsSearch = response;
          },
          error: (error) => {
            console.log(error);
          },
        });
  }
  clickToSearch() {
    this.displayPagination = false;
    this.questions = this.questionsSearch;
  }
}
