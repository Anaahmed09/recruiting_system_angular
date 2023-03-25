import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardInfoService {
  constructor(private httpClient: HttpClient) {}
  private token: string | null = localStorage.getItem('token');
  private url: string = 'http://localhost/api';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
    Authorization: `Bearer ${this.token}`,
  });

  public get countCandidates(): Observable<{count:string}> {
    return this.httpClient.get<{count: string}>(`${this.url}/candidate.count`, { headers: this.headers });
  }
  public get countJobs(): Observable<{count:string}> {
    return this.httpClient.get<{count: string}>(`${this.url}/job.count`, { headers: this.headers });
  }
  public get countQuestions(): Observable<{count:string}> {
    return this.httpClient.get<{count: string}>(`${this.url}/question`, { headers: this.headers });
  }
}
