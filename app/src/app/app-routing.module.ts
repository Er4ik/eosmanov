import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', component: WorkComponent, data: { animationState: 'One' } },
  { path: 'resume', component: ResumeComponent, data: { animationState: 'Two' } },
  { path: 'about', component: AboutComponent, data: { animationState: 'Three' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
