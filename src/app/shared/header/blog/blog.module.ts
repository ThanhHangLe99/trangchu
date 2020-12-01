
import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
];

@NgModule({
  declarations: [BlogComponent],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class BlogModule { }
