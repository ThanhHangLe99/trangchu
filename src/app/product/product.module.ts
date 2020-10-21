import { ListBrandComponent } from './list-brand/list-brand.component';
import { DetailComponent } from './detail/detail.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  {
    path: 'detail/:id',
    component: DetailComponent,
  },

  {
    path: 'list/:id',
    component: ListComponent,
  },
  {
    path: 'list-brand/:id',
    component: ListBrandComponent,
  },
];


@NgModule({
  declarations: [DetailComponent, ListComponent, ListBrandComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ]
})
export class ProductModule { }
