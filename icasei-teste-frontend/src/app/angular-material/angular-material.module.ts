import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule } from '@angular/material';

const modules = [
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule
];

@NgModule({
  imports: modules,
  exports: modules,
})

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [...modules]
})
export class AngularMaterialModule { }
