import { ILogin } from './../components/shared/ILogin';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  constructor(private httpClient: HttpClient) {}
  login(request: any) {
    this.url = `${this.url}/login`;
    return this.httpClient
      .post<ILogin>(this.url, request, { headers: this.headers })
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
        },
        error: (error) => {
          this.messageError = 'Invalid username or password. Please try again.';
        },
      });
  }
  public get invalidMessage(): string {
    return this.messageError;
  }
}
