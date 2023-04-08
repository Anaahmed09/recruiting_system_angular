import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JobService {
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
}
