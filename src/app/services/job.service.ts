import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  job_id: number = 0;
  constructor(private http: HttpClient) {}

  token_user: string = 'Bearer 2|gCcyUCgShAy4G352UY8l6cALwdOgCIE2SaSww9uS';
  headers: HttpHeaders = new HttpHeaders({
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
    Authorization: this.token_user,
  });

  applyUrl: string = '';
  baseurl: string = 'http://localhost:8000/api/job.available';
  candidateUrl: string = 'http://localhost:8000/api//candidate.store';

  job() {
    this.applyUrl = 'http://localhost:8000/api/question/' + this.job_id;

    return this.http.get(this.applyUrl, { headers: this.headers });
  }

  candidate(job_id:any ,numbers_of_right_answers:number,user_id:number,numbers_of_wrong_answers:number){
    let user={
      job_id,
      numbers_of_right_answers,
      user_id,
      numbers_of_wrong_answers 
    }
    return this.http.post(this.candidateUrl, user, { headers: this.headers });
  }

  getlogin() {
    return this.http.get(this.baseurl, { headers: this.headers });
  }
}
