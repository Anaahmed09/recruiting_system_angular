import { ILogin } from '../models/ILogin';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  messageError: string = '';
  private url: string = 'http://localhost/api';
  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
  });
  constructor(private httpClient: HttpClient, private router: Router) {}
  login(request: any) {
    this.url = `${this.url}/login`;
    return this.httpClient
      .post<ILogin>(this.url, request, { headers: this.headers })
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['dashboard']);
        },
        error: (error) => {
          this.messageError = 'Invalid username or password. Please try again.';
        },
      });
  }
  public get invalidMessage(): string {
    return this.messageError;
  }
  public logout() {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
      Authorization: `Bearer ${token}`,
    });
    console.log(headers);
    return this.httpClient.delete(`${this.url}/logout/${token}`, {
      headers: headers,
    });
  }
}
