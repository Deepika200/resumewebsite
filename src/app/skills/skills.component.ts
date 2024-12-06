import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service'; // Import the service

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: { name: string, image: string, description: string }[] = []; // Initialize an empty array for skills

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getResumeDetails().subscribe(
      data => {
        this.skills = data.skills; // Assign fetched skills data
      },
      error => {
        console.error('Error fetching skills data:', error); // Log error if fetch fails
      }
    );
  }
}
