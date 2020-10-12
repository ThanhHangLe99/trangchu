import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: 'detail/:id', component: DetailComponent },
  { path: 'list/:id', component: ListComponent },
];

@NgModule({
  declarations: [DetailComponent,
                 ListComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductModule {}
