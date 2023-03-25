import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateJobService {
  private token: string | null = localStorage.getItem('token');
  private url: string = 'http://localhost/api';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
    Authorization: `Bearer ${this.token}`,
  });
  constructor(private httpClient: HttpClient) {}
  public createNewJob(request: any) {
    return this.httpClient.post(`${this.url}/job`, request, {
      headers: this.headers,
    });
  }
}
