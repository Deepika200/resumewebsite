import { Component, OnInit } from '@angular/core';
import { EducationService } from '../education.service'; // Import the service

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  title = 'Education';
  educationDetails: any[] = []; // Initialize an empty array to hold education details

  constructor(private educationService: EducationService) { } // Inject the service

  ngOnInit(): void {
    this.educationService.getEducationDetails().subscribe(data => {
      this.educationDetails = data.education; // Assign fetched data to educationDetails
    });
  }
}
