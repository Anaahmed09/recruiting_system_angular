import { ShowAllCandidatesComponent } from './../components/show-all-candidates/show-all-candidates.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShowAllCandidatesService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
    'Authorization': 'Bearer 2|C42KnFV8YZce0V6xlSWG8IE3lyf0WgnPenV9LZzR',
  });
  // baseUrl: string =
  //   'http://localhost/Project_Back_End/recruiting_system-/public/api/candidate';
  baseUrl: string =
    'http://localhost/api/candidate'; //url for show all candidates of api
  ShowAllCandidates() {
    const result = this.http.get(this.baseUrl, { headers: this.headers });
    //console.log(result);
    return result; //return observable data
  }
}
