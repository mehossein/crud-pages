import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { TipsMatTableModule } from '@tavanasystem/tips-mat-table';
import { MaterialModule } from './modules/material/material.module';
import { AdvanceToolbarModule } from '@tavanasystem/advance-toolbar';
import { FormlyModule } from '@ngx-formly/core';
const MODULES = [
  FormlyModule,
  MaterialModule,
  TipsMatTableModule,
  AdvanceToolbarModule,
  ReactiveFormsModule,
];
@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
