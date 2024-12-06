import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'] // Corrected 'styleUrls' instead of 'styleUrl'
})
export class CertificationsComponent implements OnInit {
  certificates: any[] = []; // Array to store certificate details

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    // Fetch certificate data from resume.json using the ResumeService
    this.resumeService.getResumeDetails().subscribe(data => {
      this.certificates = data.certificates; // Assign fetched data to the certificates array
    });
  }
}
