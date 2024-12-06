import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  title = 'About Me';
  description = 'This section contains information about me.';

}
