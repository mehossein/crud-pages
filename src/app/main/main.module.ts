import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class MainModule {}
