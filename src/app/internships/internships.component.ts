import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service'; // Import the service

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {
  internships: any[] = []; // Store internship details here

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getResumeDetails().subscribe(data => {
      this.internships = data.internships; // Fetch internships data from the service
    });
  }
}
