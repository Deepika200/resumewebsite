import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Makes the service available throughout the app
})
export class EducationService {
  private jsonUrl = 'assets/resume.json'; // Path to your JSON file

  constructor(private http: HttpClient) { }

  // Method to get education details
  getEducationDetails(): Observable<any> {
    return this.http.get<any>(this.jsonUrl); // Fetch data from resume.json
  }
}
