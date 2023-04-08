import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  job_id: number = 0;
  constructor(private http: HttpClient) {}

  baseURL: string = 'http://127.0.0.1:8000/api/job';
  // TODO: get token from localStorage
  auth_token = '8|x6TTRGUpd9vjnO8pkrrgvoK9vARbzW0UMGS1VVYT';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.auth_token}`,
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
  });

  requestOptions = { headers: this.headers };

  getAllJobs(page: number) {
    return this.http.get(`${this.baseURL}?page=${page}`, this.requestOptions);
  }

  getJob(id: number) {
    return this.http.get(`${this.baseURL}/${id}`, this.requestOptions);
  }

  createJob(job: any) {
    return this.http.post(this.baseURL, job, this.requestOptions);
  }

  editJob(id: number, job: any) {
    return this.http.put(`${this.baseURL}/${id}`, job, this.requestOptions);
  }

  deleteJob(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`, this.requestOptions);
  }



  job() {
    this.applyUrl = 'http://localhost:8000/api/question/' + this.job_id;

    return this.http.get(this.applyUrl, { headers: this.headers });
  }

  candidate(
    job_id: any,
    numbers_of_right_answers: number,
    numbers_of_wrong_answers: number
  ) {
    let user = {
      job_id,
      numbers_of_right_answers,
      numbers_of_wrong_answers,
    };
    return this.http.post(this.candidateUrl, user, { headers: this.headers });
  }

  getlogin() {
    return this.http.get(this.baseurl, { headers: this.headers });
  }
}
