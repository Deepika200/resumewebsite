import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private jsonUrl = 'assets/resume.json'; // Path to your JSON file

  constructor(private http: HttpClient) {}

  getResumeDetails(): Observable<any> {
    return this.http.get<any>(this.jsonUrl); // Fetch data from resume.json
  }
}
