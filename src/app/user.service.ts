import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  token_user:string="Bearer 8|pUeI6G4XO1ngd2ZKg4Yyyymjn8fUUaUCYw5iqubh"
  headers: HttpHeaders = new HttpHeaders({
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
    'Authorization':this.token_user
  
  });
  resulturl:string='http://localhost:8000/api/candidate.show';
  profileurl:string='http://localhost:8000/api/user.show'
  constructor(private http:HttpClient) { }
  getresult()
  {
  // let user = {
  //   username: 'peter34',
  //   password: 'password',
  // };
  return this.http.get(this.resulturl,{headers:this.headers});
  }
  getprofile()
  {
    return this.http.get(this.profileurl,{headers:this.headers});
  }
   
  }
