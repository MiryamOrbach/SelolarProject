import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule
  ],
  exports:
  [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule
  ]
})
export class AngularMaterialModule { }
