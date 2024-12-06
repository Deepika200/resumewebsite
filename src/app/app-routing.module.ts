import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { InternshipsComponent } from './internships/internships.component';
import { CertificationsComponent } from './certifications/certifications.component';
// import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'',redirectTo:'aboutme',pathMatch:'full'},
  {path: 'aboutme',component:AboutMeComponent},
  {path:'skills',component:SkillsComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'education',component:EducationComponent},
  {path:'internship',component:InternshipsComponent},
  {path:'certifications',component:CertificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
