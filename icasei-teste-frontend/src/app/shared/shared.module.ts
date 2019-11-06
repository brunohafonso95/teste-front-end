import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '@angular-material/angular-material.module';
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    FormsModule,
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ...fromComponents.components,
    FormsModule
  ]
})
export class SharedModule { }
