import { ShowAllCandidatesComponent } from './../components/show-all-candidates/show-all-candidates.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShowAllCandidatesService {
  httpClient: any;
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
    'Authorization': 'Bearer 2|g6DrOZ2rWu73x88H35oafJn6Pz0KUnYQ0j9b5CEU',
  });
  baseUrl: string =
    'http://localhost/Project_Back_End/recruiting_system-/public/api/candidate';
  // baseUrl: string =
  //   'http://localhost/api/candidate';
  ShowAllCandidates() {
    const result = this.http.get(this.baseUrl, { headers: this.headers });
    //console.log(result);
    return result; //return observable data
  }

}
