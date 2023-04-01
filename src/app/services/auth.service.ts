import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  baseURL: string = 'http://127.0.0.1:8000/api/user';

  loggedUser: {} | null = null;

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
  });

  requestOptions = { headers: this.headers };

  register(userData: any) {
    return this.http.post(this.baseURL, userData, this.requestOptions);
  }
}
