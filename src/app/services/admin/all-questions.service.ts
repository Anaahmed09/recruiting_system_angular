import { IPaginatedConfigQuestion } from './../../models/paginated-config-question';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AllQuestionsService {
  private token: string | null = localStorage.getItem('token');
  private url: string = 'http://localhost/api';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
    Authorization: `Bearer ${this.token}`,
  });
  constructor(private httpClient: HttpClient) {}

  public getTitleJob(id: number) {
    return this.httpClient.get<{ title: string }>(`${this.url}/job/${id}`, {
      headers: this.headers,
    });
  }

  public showQuestions(id: number, page: number = 1, pre_page: number = 2) {
    const params = { page, pre_page };
    return this.httpClient.get<IPaginatedConfigQuestion>(
      `${this.url}/question/${id}`,
      {
        headers: this.headers,
        params,
      }
    );
  }
  public deleteQuestion(id: number) {
    return this.httpClient.delete(`${this.url}/question/${id}`, {
      headers: this.headers,
    });
  }
  public searchQuestion(title: string, id: number) {
    return this.httpClient.post(
      `${this.url}/question.search`,
      { title, id },
      { headers: this.headers }
    );
  }
}
