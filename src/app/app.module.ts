import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { InternshipsComponent } from './internships/internships.component';
import { HttpClientModule } from '@angular/common/http';
import { CertificationsComponent } from './certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    InternshipsComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
